import { UserSymbol } from './User';

/**
 * Q/A 记录
 */
export interface QA {

  /** 问题 */
  question: string;

  /** 提问人 */
  questioner: UserSymbol;

  /** 提问时间 */
  questionTime: Date;

  /** 回答 */
  answer: string;

  /** 回答人 */
  answerer: UserSymbol;

  /** 回答时间 */
  answerTime: Date;

}
