import { logger } from '@iinfinity/logger';
import { Controller, Inject } from '@rester/core';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { getLocalISODateTime, safeResponse } from '../@util';
import { Group } from '../group/group.model';
import { User, UserType, UserSymbol } from '../user/user.model';
import { ChatroomEntity } from './chatroom';
import { ContactEntity, ContactType } from './contact';
import { getConnection, EntityTarget } from 'typeorm';
import { UserView } from '../user/user.view';

export interface Config {
  IMEI: string;
  UIN: string;
  KEY: string;
  DATABASE: string;
  ID: string;
}

// insert, delete, update, select
// one, more

@Controller()
export class WechatController {

  @Inject() private userView!: UserView;

  private getRepo<T = any>(target: EntityTarget<T>) {
    return getConnection('wechat').getRepository(target);
  }

  private loadConfig(): Config {
    return JSON.parse(readFileSync('key.json').toString());
  }

  async updateDatabase() {

    existsSync('out') || mkdirSync('out');

    const { KEY, DATABASE } = this.loadConfig();

    const date = getLocalISODateTime();
    const exportDB = 'decrypted.db';
    const encryptedDB = `${date}.encrypted.db`;
    const decryptedDB = `${date}.decrypted.db`;

    const commandCopy = `adb exec-out su -c "cp /data/data/com.tencent.mm/MicroMsg/${DATABASE}/EnMicroMsg.db /sdcard/${exportDB}"`;
    const commandPull = `adb pull /sdcard/${exportDB} out/${encryptedDB}`;
    const commandDecrypt = `sqlcipher out/${encryptedDB} 'PRAGMA key = "${KEY}"; PRAGMA cipher_use_hmac = off; PRAGMA kdf_iter = 4000; ATTACH DATABASE "out/${decryptedDB}" AS decrypted_database KEY ""; SELECT sqlcipher_export("decrypted_database"); DETACH DATABASE decrypted_database;'`;
    const commandBackup = `cp out/${decryptedDB} out/${exportDB}`;

    logger.info(`Copy to sdcard: ${execSync(commandCopy).length}`);
    logger.info(`Pull to local disk: ${execSync(commandPull).length}`);
    logger.info(`Decrypt: ${execSync(commandDecrypt).length}`);
    logger.info(`Export database: ${execSync(commandBackup).length}`);

    return { date };

  }

  /**
   * 先查询所有用户，然后插入到数据库中
   *
   * 如果数据库中已有数据，则更新用户名
   */
  async selectAllUsersFromContactTable() {

    const list = await this.getRepo(ContactEntity)
      .createQueryBuilder('user')
      .select()
      .andWhere('"type" = :type', { type: ContactType.Friend })
      .orWhere('"type" = :type', { type: ContactType.Stranger })
      .getMany();
    const inserted: Promise<Pick<User, 'id' | 'name'>>[] = list.map(
      user => ({
        id: user.username,
        name: user.nickname,
        type: UserType.Unknown,
        codes: [],
        update: new Date(),
        usable: true
      })
    ).map(
      user => this.userView
        .insert(user.id, user)
        .then()
        .catch(reason => ({ id: user.id, name: user.name }))
    );

    const ids = await Promise.all(inserted);

    const updated = ids.map(({ id, name }) => this.userView.update(id, { name }));

    return Promise.all(updated);

  }

  async selectAllGroupsFromContactAndChatroom() {

    const contactList = await this.getRepo(ContactEntity).find({ type: ContactType.Group });
    const chatroomList = await this.getRepo(ChatroomEntity).find();
    const users = await this.selectAllUsersFromContactTable();

    const groups: Group[] = contactList.map(
      contact => ({
        id: contact.username,
        name: contact.nickname,
        users: chatroomList
          .find(chatroom => chatroom.chatroomname === contact.username)
          ?.memberlist
          .split(';')
          .map<User>(id => users.find(user => user.id === id)!)
          .filter(user => user)
          .map<UserSymbol>(user => ({ id: user.id, type: user.type })) || [],
        start: new Date(),
        end: new Date(),
        update: new Date(),
        course: {
          id: 0,
          name: ''
        },
        peroid: -1
      })
    );

    return groups;

  }

}
