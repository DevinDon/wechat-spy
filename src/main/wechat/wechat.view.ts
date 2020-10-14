import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { safeResponse } from '../@util';
import { WechatController } from './wechat.controller';

// add, remove, modify, find(condition), get(random)
// one, more

@View('wechat')
export class WechatView {

  @Inject()
  private controller!: WechatController;

  @GET('users')
  async exportAllUsers() {
    return this.controller
      .selectAllUsersFromContactTable()
      .then(users => users.map(safeResponse));
  }

  @GET('groups')
  async exportAllGroups() {
    return this.controller
      .selectAllGroupsFromContactAndChatroom()
      .then(groups => groups.map(safeResponse));
  }

  @GET('messages')
  async exportMessagesByGroups() { }

}
