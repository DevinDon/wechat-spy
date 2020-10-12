/**
 * 格式化后的记录
 */
export interface Record {

  /** 微信消息 ID */
  id: number;

  /** 发言人 */
  user: string;

  /** 发送时间 */
  time: Date;

  /** 内容，纯文本或资源 URL */
  content: string;

  /** @ 的用户 */
  ats: string[];

  /** 引用的内容 */
  quote?: Record;

}

// record.ats
// record.quote?.content
