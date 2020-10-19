import { UserSymbol } from '../user/user.model';

/**
 * 格式化后的记录
 */
export interface Record {

  /** 微信消息 ID */
  id: number;

  /** 发言人 */
  user: UserSymbol;

  /** 发送时间 */
  time: Date;

  /** 内容，markdown 格式 */
  content: string;

  /** @ 的用户 */
  ats: UserSymbol[];

  /** 引用的内容 */
  quote?: RecordSymbol;

  /** 是否已人工标记 */
  marked: boolean;

}

// record.ats
// record.quote?.content

export interface RecordSymbol {

  /** 微信消息 ID */
  id: number;

  /** 发言人 */
  user: UserSymbol;

}
