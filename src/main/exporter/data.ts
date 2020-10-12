import { MessageEntity } from '../message/message.entity';
import { createQueryBuilder } from 'typeorm';

export async function exportData() {
  const messages = (await createQueryBuilder(MessageEntity)
    .select(['content'])
    .andWhere('content LIKE :keyword', { keyword: '%助教%' })
    .getMany()).map(message => message.content);
  return messages;
}
