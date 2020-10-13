import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { Contact, ContactType } from './contact.model';

@Entity('rcontact')
export class ContactEntity extends BaseEntity implements Contact {

  @PrimaryColumn()
  username!: string;

  @Column()
  nickname!: string;

  @Column({ type: 'int' })
  type!: ContactType;

}
