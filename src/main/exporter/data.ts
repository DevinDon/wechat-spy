import { createQueryBuilder } from 'typeorm';
import { MessageEntity } from '../message/message.entity';
import { MessageType } from '../message/message.type';

const REG_AT_NAME_ASSISTANT = /(@.{0,3}?助教.{0,10})(\s|$)/;
const REG_AT_NAME_HEAD = /(@.{0,3}?九章.{0,10})(\s|$)/;

export async function exportData() {
  const messages = await createQueryBuilder(MessageEntity)
    .select()
    .andWhere('"type" = :type', { type: MessageType.Normal })
    .andWhere('"content" LIKE :keyword', { keyword: '%助教%' })
    .orWhere('"content" LIKE :keyword', { keyword: '%九章%' })
    .getMany();
  const array = messages
    .map(message => {
      const text = message.content;
      if (REG_AT_NAME_ASSISTANT.test(text)) {
        return text.match(REG_AT_NAME_ASSISTANT)!;
      } else if (REG_AT_NAME_HEAD.test(text)) {
        return text.match(REG_AT_NAME_HEAD)!;
      } else {
        return '';
      }
    })
    .flat()
    .filter(name => name.length < 10 && name.length > 0)
    .map(name => name.trim());
  return [...new Set(array)];
}
