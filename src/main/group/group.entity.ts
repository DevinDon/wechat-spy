import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { CourseSymbol } from '../course/course.model';
import { UserSymbol } from '../user/user.model';
import { Group } from './group.model';

@Entity('group')
export class GroupEntity extends BaseEntity implements Group {

  @ObjectIdColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  users!: UserSymbol[];

  @Column()
  start!: Date;

  @Column()
  end!: Date;

  @Column()
  update!: Date;

  @Column()
  course!: CourseSymbol;

  @Column()
  peroid!: number;

  @Column({ default: false })
  marked!: boolean;

}
