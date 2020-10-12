import { createQueryBuilder } from 'typeorm';
import { MessageEntity } from '../message/message.entity';
import { MessageType } from '../message/message.type';

const REG_AT_NAME = /(@助教.*?)\s/;

export async function exportData() {
  const messages = await createQueryBuilder(MessageEntity)
    .select()
    .andWhere('"type" = :type', { type: MessageType.Normal })
    .andWhere('"content" LIKE :keyword', { keyword: '%助教%' })
    .getMany();
  const array = messages
    .map(message => {
      const text = message.content;
      return REG_AT_NAME.test(text) ? text.match(REG_AT_NAME)! : '';
    })
    .flat()
    .filter(name => name.length < 10 && name.length > 0)
    .map(name => name.trim());
  return [...new Set(array)];
}
