import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { WechatController } from './wechat.controller';

// add, remove, modify, find(condition), get(random)
// one, more

@View('wechat')
export class WechatView {

  @Inject()
  private controller!: WechatController;

  @GET('users')
  async exportAllUsers() {
    return this.controller.selectAllUsersFromContactTable();
  }

  @GET('groups')
  async exportAllGroups() {
    return this.controller.selectAllGroupsFromContactAndChatroom();
  }

  @GET('messages')
  async exportMessagesByGroups() { }

}
