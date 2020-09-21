import { Controller } from '@rester/core';
import { Message } from './message.model';
import { MessageEntity } from './message.entity';

// insert, delete, update, select
// one, more

@Controller()
export class MessageController {

  async selectOneByID(id: Message['id']) {
    return MessageEntity.findOne(id);
  }

}