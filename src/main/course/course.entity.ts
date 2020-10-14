import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { GroupSymbol } from '../group/group.model';
import { Course } from './course.model';

@Entity('course')
export class CourseEntity extends BaseEntity implements Course {

  @ObjectIdColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  link!: string;

  @Column()
  groups!: GroupSymbol[];

}
