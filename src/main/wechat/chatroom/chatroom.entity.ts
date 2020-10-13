import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { Chatroom, ChatroomStatus } from './chatroom.model';

@Entity('chatroom')
export class ChatroomEntity extends BaseEntity implements Chatroom {

  @PrimaryColumn()
  chatroomname!: string;

  @Column()
  memberlist!: string;

  @Column()
  displayname!: string;

  @Column({ type: 'int' })
  chatroomStatus!: ChatroomStatus;

}
