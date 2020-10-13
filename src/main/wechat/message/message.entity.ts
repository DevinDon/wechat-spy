import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { Message } from './message.model';

@Entity('message')
export class MessageEntity extends BaseEntity implements Message {

  @PrimaryColumn()
  msgSvrId!: number;

  @Column()
  type!: string;

  @Column()
  createTime!: number;

  @Column()
  talker!: string;

  @Column()
  content!: string;

  @Column()
  imgPath!: string;

}
