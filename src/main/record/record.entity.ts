import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { User } from '../user/user.model';
import { Record } from './record.model';

@Entity('record')
export class RecordEntity extends BaseEntity implements Record {

  @ObjectIdColumn()
  id!: number;

  @Column()
  user!: Pick<User, 'id' | 'type'>;

  @Column()
  time!: Date;

  @Column()
  content!: string;

  @Column()
  ats!: Pick<User, 'id' | 'type'>[];

  @Column()
  quote?: Record;

  @Column({ default: false })
  marked!: boolean;

}
