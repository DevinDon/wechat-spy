import { CORSHandler, Rester } from '@rester/core';
import { ChatroomEntity } from './wechat/chatroom';
import { ContactEntity } from './wechat/contact';
import { MessageEntity } from './wechat/message';
import { WechatView } from './wechat/wechat.view';

const rester = new Rester()
  .configViews
  .add(WechatView)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end();

rester
  .configDatabases
  .setEntities([
    ChatroomEntity,
    ContactEntity,
    MessageEntity
  ])
  .end();

rester.listen();
