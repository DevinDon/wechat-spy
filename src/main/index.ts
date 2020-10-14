import { CORSHandler, Rester } from '@rester/core';
import { CourseEntity } from './course/course.entity';
import { CourseView } from './course/course.view';
import { GroupEntity } from './group/group.entity';
import { GroupView } from './group/group.view';
import { QAEntity } from './qa/qa.entity';
import { QaView } from './qa/qa.view';
import { RecordEntity } from './record/record.entity';
import { RecordView } from './record/record.view';
import { UserEntity } from './user/user.entity';
import { UserView } from './user/user.view';
import { ChatroomEntity } from './wechat/chatroom';
import { ContactEntity } from './wechat/contact';
import { MessageEntity } from './wechat/message';
import { WechatView } from './wechat/wechat.view';

const rester = new Rester()
  .configViews
  .add(
    CourseView,
    GroupView,
    QaView,
    RecordView,
    UserView,
    WechatView
  )
  .end()
  .configHandlers
  .add(CORSHandler)
  .end();

rester
  .configDatabases
  .setEntities([
    CourseEntity,
    GroupEntity,
    QAEntity,
    RecordEntity,
    UserEntity
  ])
  .setEntities([
    ChatroomEntity,
    ContactEntity,
    MessageEntity
  ], 'wechat')
  .end();

rester.listen();
