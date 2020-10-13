export interface Contact {

  username: string;

  nickname: string;

  type: ContactType;

}

export enum ContactType {
  'Group' = 2,
  'Friend' = 3,
  'Stranger' = 4,
  'Officials' = 33
}
