import { Record } from '../@type/Record';
import { User } from '../@type/User';
import { ContactEntity } from '../contact/contact.entity';
import { Message } from './message.model';
import { MessageType } from './message.type';

export const REG_NORMAL = /(.*?):\n(.*)/;
export const REG_NORMAL_ATS = /@(.*?)\s/g;

export const REG_QUOTE_REPLY = /<title>(.*)<\/title>/;
export const REG_QUOTE_QUOTE = /<content>(.*)<\/content>/;
export const REG_QUOTE_ANSWERER = /(.*?):/;
export const REG_QUOTE_QUESTIONER = /<chatusr>(.*)<\/chatusr>/;

export const FAILED_TEXT = '内容获取失败';

export type ParsedRecord = Pick<Record, 'ats' | 'content' | 'quote' | 'user'>;

export async function getUser(wxid: string) {
  return ContactEntity.findOne({ username: wxid });
}

export function parseContent(
  { type, content }: Pick<Message, 'type' | 'content'>
): ParsedRecord {
  switch (type.toString()) {
    case MessageType.Normal.toString():
      return parseNormal(content);
    default:
      return parseDefault(content);
  }
}

export function parseNormal(text: string): ParsedRecord {
  const [, user, content] = REG_NORMAL.test(text) ? text.match(REG_NORMAL)! : [FAILED_TEXT, FAILED_TEXT, FAILED_TEXT];
  const ats: string[] = REG_NORMAL_ATS.test(content)
    ? content.match(REG_NORMAL_ATS)!
    : [];
  return { ats, content, user };
}

/**
 * `<title>@HashMap 哈哈，问题不大。你们有疑惑尽管在群里问就行。[机智]其他助教们和我一直都在</title>`
 *
 * @param xml Input xml
 */
export function parseQuote(xml: string): ParsedRecord {
  throw new Error('not implement');
  // return {
  //   user: REG_QUOTE_ANSWERER.test(xml) && xml.match(REG_QUOTE_ANSWERER)![1],
  //   content: REG_QUOTE_REPLY.test(xml) ? xml.match(REG_QUOTE_REPLY)![1] : FAILED_TEXT,
  //   ats: [],
  //   quote: {}
  // };
}

export function parseEmoticons(xml: string): ParsedRecord {
  throw new Error('not implement');
}

export function parseDefault(text: string): ParsedRecord {
  return { content: text } as any;
}
