import { Group } from './Group';
import { UserSymbol } from './User';

/**
 * 课程信息
 */
export interface Course {

  /** 课程 ID */
  id: number;

  /** 官网链接 */
  link: string;

  /** 有哪些期次的课程群聊，双向链接 */
  groups: Group[];

  /** 报名的学员，期次对应数组 */
  students: { [index: number]: UserSymbol[] };

}
