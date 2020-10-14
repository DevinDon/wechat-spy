import { logger } from '@iinfinity/logger';
import { Controller } from '@rester/core';
import { execSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { Group } from '../@type/Group';
import { User, UserSymbol, UserType } from '../@type/User';
import { getLocalISODateTime } from '../@util';
import { ChatroomEntity } from './chatroom';
import { ContactEntity, ContactType } from './contact';

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

  async selectAllUsersFromContactTable() {

    const list = await ContactEntity
      .createQueryBuilder('user')
      .select()
      .andWhere('"type" = :type', { type: ContactType.Friend })
      .orWhere('"type" = :type', { type: ContactType.Stranger })
      .getMany();
    const users: User[] = list.map(
      user => ({
        id: user.username,
        name: user.nickname,
        type: UserType.Other,
        codes: [],
        update: new Date()
      })
    );

    return users;

  }

  async selectAllGroupsFromContactAndChatroom() {

    const contactList = await ContactEntity.find({ type: ContactType.Group });
    const chatroomList = await ChatroomEntity.find();
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
          link: '',
          groups: [],
          students: []
        }
      })
    );

    return groups;

  }

}
