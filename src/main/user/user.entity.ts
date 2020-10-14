import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { User, UserType } from './user.model';

@Entity('user')
export class UserEntity extends BaseEntity implements User {

  @ObjectIdColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  type!: UserType;

  @Column()
  codes!: string[];

  @Column()
  update!: Date;

}
