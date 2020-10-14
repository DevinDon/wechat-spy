export interface User {

  /** 用户微信 ID */
  id: string;

  /** 用户昵称，不定可变 */
  name: string;

  /** 用户类型，见下 */
  type: UserType;

  /** 用户报名码，只有已报名的学员有，可能报名了多门课程 */
  codes: string[];

  /** 数据更新日期 */
  update: Date;

  /** 用户是否可用 */
  usable: boolean;

}

export type UserSymbol = Pick<User, 'id' | 'type'>;

/**
 * 用户类型
 *
 * - 讲师
 * - 学员
 * - 助教
 * - 班班
 * - 其他
 */
export enum UserType {
  Teacher, Student, AssistantTeacher, HeadTeacher, Other
}
