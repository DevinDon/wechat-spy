import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { UserController } from './user.controller';
import { User } from './user.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('user')
export class UserView {

  @Inject()
  private controller!: UserController;

  @POST('')
  async addUser() { }

  @PUT('{{id}}')
  async updateUser() { }

}
