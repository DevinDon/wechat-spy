import { User } from './User';

/**
 * Q/A 记录
 */
export interface QA {

  /** 问题 */
  question: string;

  /** 提问人 */
  questioner: User;

  /** 提问时间 */
  questionTime: Date;

  /** 回答 */
  answer: string;

  /** 回答人 */
  answerer: User;

  /** 回答时间 */
  answerTime: Date;

}
