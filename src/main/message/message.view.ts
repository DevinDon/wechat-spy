import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { MessageController } from './message.controller';
import { Message } from './message.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('message')
export class MessageView {

  @Inject()
  private controller!: MessageController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
