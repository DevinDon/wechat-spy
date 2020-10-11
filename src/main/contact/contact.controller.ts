import { Controller } from '@rester/core';
import { Contact } from './contact.model';
import { ContactEntity } from './contact.entity';

// insert, delete, update, select
// one, more

@Controller()
export class ContactController {

  async selectOneByID(id: Contact['id']) {
    return ContactEntity.findOne(id);
  }

}