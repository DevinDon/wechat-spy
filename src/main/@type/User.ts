export interface User {
  name: string;
  type: UserType;
}

export enum UserType {
  Teacher, Student, AssistantTeacher, HeadTeacher
}
