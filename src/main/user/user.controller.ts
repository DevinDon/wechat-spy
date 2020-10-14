import { Controller, HTTP404Exception, HTTPException } from '@rester/core';
import { UserEntity } from './user.entity';
import { User } from './user.model';

export type UserID = Pick<User, 'id'>;
export type ParamUpdateUser = Partial<User> & UserID;

// insert, delete, update, select
// one, more

@Controller()
export class UserController {

  async selectUserByID({ id }: UserID) {
    const user = await UserEntity.findOne({ id });
    // 用户不存在则返回 404
    if (!user) {
      throw new HTTP404Exception(`WeChat ID ${id} does not exist.`, { message: `WeChat ID ${id} does not exist.` });
    }
    return user;
  }

  async insertUser(user: User) {
    // 用户存在，则不能插入
    if (await UserEntity.findOne(user)) {
      throw new HTTPException(409, `WeChat ID ${user.id} has existed`, { message: `WeChat ID ${user.id} has existed.` });
    }
    await UserEntity.insert(user);
    return user;
  }

  async updateUser(user: ParamUpdateUser) {
    // 检查用户是否存在，复用 select 的 404 错误
    await this.selectUserByID({ id: user.id });
    await UserEntity.update({ id: user.id }, user);
    return this.selectUserByID(user);
  }

  async deleteUser({ id }: UserID) {
    // 检查用户是否存在，复用 select 的 404 错误
    const user = await this.selectUserByID({ id });
    await UserEntity.delete({ id });
    // 返回已删除的用户
    return user;
  }

}
