export interface User {
  wxid: string;
  name: string;
  type: UserType;
}

export enum UserType {
  Teacher, Student, AssistantTeacher, HeadTeacher
}
