import { BaseEntity, Column, Entity, ObjectIdColumn, Index, ObjectID } from 'typeorm';
import { User, UserType } from './user.model';

@Entity('user')
export class UserEntity extends BaseEntity implements User {

  @ObjectIdColumn()
  _id!: ObjectID;

  @Column()
  @Index({ unique: true })
  id!: string;

  @Column()
  name!: string;

  @Column()
  type!: UserType;

  @Column()
  codes!: string[];

  @Column()
  update!: Date;

  @Column({ default: true })
  usable!: boolean;

}
