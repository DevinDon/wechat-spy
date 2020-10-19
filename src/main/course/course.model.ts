import { GroupSymbol } from '../group/group.model';

/**
 * 课程信息
 */
export interface Course {

  /** 课程 ID */
  id: number;

  /** 课程名称 */
  name: string;

  /** 官网链接 */
  link: string;

  /** 有哪些期次的课程群聊，双向链接 */
  groups: GroupSymbol[];

  /** 是否已人工标记 */
  marked: boolean;

}

export type CourseSymbol = Pick<Course, 'id' | 'name'>;
