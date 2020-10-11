import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from './contact.model';

@Entity('contact')
export class ContactEntity extends BaseEntity implements Contact {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  content?: string;

}
