export interface Chatroom {

  chatroomname: string;

  memberlist: string;

  displayname: string;

  chatroomStatus: ChatroomStatus;

}

export enum ChatroomStatus {
  'Normal' = 0,
  'Closed' = 16384,
  'Other' = 524288,
  'Other2' = 540672
}
