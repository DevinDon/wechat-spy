import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Chatroom } from './chatroom.model';


@Entity('chatroom')
export class ChatroomEntity extends BaseEntity implements Chatroom {

  @Column({ type: 'text' })
  chatroomname!: string;

  addtime!: string;

  memberlist!: string;

  displayname!: string;

  chatroomnick!: string;

  roomflag!: string;

  roomowner!: string;

  roomdata!: string;

  isShowname!: string;

  selfDisplayName!: string;

  style!: string;

  chatroomdataflag!: string;

  modifytime!: string;

  chatroomnotice!: string;

  chatroomVersion!: string;

  chatroomnoticeEditor!: string;

  chatroomnoticePublishTime!: string;

  chatroomLocalVersion!: string;

  chatroomStatus!: string;

  memberCount!: string;

  chatroomfamilystatusmodifytime!: string;

}
