import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { ContactController } from './contact.controller';
import { Contact } from './contact.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('contact')
export class ContactView {

  @Inject()
  private controller!: ContactController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
