import { BaseEntity, Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';
import { Tag } from './tag.model';

@Entity('tag')
export class TagEntity extends BaseEntity implements Tag {

  @ObjectIdColumn()
  _id!: ObjectID;

  @Index({ unique: true })
  @Column()
  name!: string;

  @Column()
  group?: string;

  @Column({ nullable: true })
  comment?: string;

}
