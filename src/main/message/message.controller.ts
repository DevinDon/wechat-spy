import { Controller, Inject } from '@rester/core';
import { Message } from './message.model';
import { MessageEntity } from './message.entity';
import { Record } from '../@type/Record';
import { createQueryBuilder } from 'typeorm';
import { getUser, parseContent } from './message.util';

interface ParamSelectMessagesToRecords {
  start: number;
  end: number;
  group: string;
  take: number;
  skip: number;
}

// insert, delete, update, select
// one, more

@Controller()
export class MessageController {

  async selectMessagesToRecords({ start, end, group, take, skip }: ParamSelectMessagesToRecords): Promise<Record[]> {
    const messages = await createQueryBuilder(MessageEntity)
      .select()
      .andWhere('talker = :group', { group })
      .andWhere('createTime >= :start', { start })
      .andWhere('createTime <= :end', { end })
      .skip(skip)
      .take(take)
      .getMany();
    return messages.map(
      message => {
        return {
          id: message.msgSvrId,
          time: new Date(message.createTime),
          ...parseContent({ type: message.type, content: message.content })
        };
      }
    );
  }

}
