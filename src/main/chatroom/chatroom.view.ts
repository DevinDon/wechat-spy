import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { ChatroomController } from './chatroom.controller';
import { Chatroom } from './chatroom.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('chatroom')
export class ChatroomView {

  @Inject()
  private controller!: ChatroomController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
