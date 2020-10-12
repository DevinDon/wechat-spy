import { Course } from './Course';
import { User, UserSymbol } from './User';

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
  end: string;

  /** 课程信息 */
  course: Course;

}
