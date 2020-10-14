import { Controller } from '@rester/core';
import { Qa } from './qa.model';
import { QaEntity } from './qa.entity';

// insert, delete, update, select
// one, more

@Controller()
export class QaController {

  async selectOneByID(id: Qa['id']) {
    return QaEntity.findOne(id);
  }

}