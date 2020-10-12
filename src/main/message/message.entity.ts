import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { Message } from './message.model';

@Entity('message')
export class MessageEntity extends BaseEntity implements Message {

  @PrimaryColumn({ type: 'integer' })
  msgSvrId!: number;

  @Column({ type: 'int' })
  type!: string;

  @Column({ type: 'int' })
  createTime!: number;

  @Column({ type: 'text' })
  talker!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'text' })
  imgPath!: string;

}
