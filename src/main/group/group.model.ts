import { CourseSymbol } from '../course/course.model';
import { UserSymbol } from '../user/user.model';

export interface Group {

  /** 群聊 ID */
  id: string;

  /** 群聊名称，课程 + 期次 */
  name: string;

  /** 群内人员，包括助教与班班 */
  users: UserSymbol[];

  /** 服务开始日期 */
  start: Date;

  /** 服务结束日期 */
  end: Date;

  /** 数据更新日期 */
  update: Date;

  /** 课程信息 */
  course: CourseSymbol;

  /** 期次 */
  peroid: number;

  /** 是否已人工标记 */
  marked: boolean;

}

export type GroupSymbol = Pick<Group, 'id' | 'name'>;
