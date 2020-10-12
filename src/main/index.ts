import { CORSHandler, Rester } from '@rester/core';
import { ContactEntity } from './contact/contact.entity';
import { ContactView } from './contact/contact.view';
import { MessageEntity } from './message/message.entity';
import { MessageView } from './message/message.view';

const rester = new Rester()
  .configViews
  .add(ContactView, MessageView)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end();

rester.configDatabase.setEntities([ContactEntity, MessageEntity]).end();

rester.listen();
