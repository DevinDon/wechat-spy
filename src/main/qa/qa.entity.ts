import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { UserSymbol } from '../user/user.model';
import { QA } from './qa.model';

@Entity('qa')
export class QAEntity extends BaseEntity implements QA {

  @ObjectIdColumn()
  id!: number;

  @Column()
  question!: string;

  @Column()
  questioner!: UserSymbol;

  @Column()
  questionTime!: Date;

  @Column()
  answer!: string;

  @Column()
  answerer!: UserSymbol;

  @Column()
  answerTime!: Date;

}
