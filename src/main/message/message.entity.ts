import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './message.model';

@Entity('message')
export class MessageEntity extends BaseEntity implements Message {

  @Column({ type: 'integer' })
  msgId!: string;

  @Column({ type: 'integer' })
  msgSvrId!: string;

  @Column({ type: 'int' })
  type!: string;

  @Column({ type: 'int' })
  status!: string;

  @Column({ type: 'int' })
  isSend!: string;

  @Column({ type: 'int' })
  isShowTimer!: string;

  @Column({ type: 'int' })
  createTime!: string;

  @Column({ type: 'text' })
  talker!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'text' })
  imgPath!: string;

  @Column({ type: 'text' })
  reserved!: string;

  @Column({ type: 'blob' })
  lvbuffer!: string;

  @Column({ type: 'text' })
  transContent!: string;

  @Column({ type: 'text' })
  transBrandWording!: string;

  @Column({ type: 'integer' })
  talkerId!: string;

  @Column({ type: 'text' })
  bizClientMsgId!: string;

  @Column({ type: 'integer' })
  bizChatId!: string;

  @Column({ type: 'text' })
  bizChatUserId!: string;

  @Column({ type: 'integer' })
  msgSeq!: string;

  @Column({ type: 'int' })
  flag!: string;

}
