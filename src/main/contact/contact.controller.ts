import { Controller } from '@rester/core';
import { ContactEntity } from './contact.entity';

// insert, delete, update, select
// one, more

@Controller()
export class ContactController {

  async selectAllGroup() {
    return ContactEntity.find({ type: 2 });
  }

}