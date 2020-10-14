import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, requiredParams, requiredParamsInFields, View } from '@rester/core';
import { UserController } from './user.controller';
import { User } from './user.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('user')
export class UserView {

  @Inject()
  private controller!: UserController;

  @GET(':id')
  async select(
    @PathVariable('id') id: string
  ) {
    requiredParams({ id });
    return this.controller.selectUserByID({ id });
  }

  /**
   * 为啥需要 id 呢？
   *
   * 因为新增用户一定有微信 ID，所以可以在路径里添加 ID
   *
   * @param id 微信 ID
   */
  @POST(':id')
  async insert(
    @PathVariable('id') id: string,
    @RequestBody() user: User
  ) {
    requiredParams({ id });
    requiredParamsInFields(user, ['name', 'type', 'codes']);
    return this.controller.insertUser({ ...user, id, update: new Date() });
  }

  @PUT(':id')
  async update(
    @PathVariable('id') id: string,
    @RequestBody() user: Partial<User> = {}
  ) {
    requiredParams({ id });
    return this.controller.updateUser({ ...user, id, update: new Date() });
  }

  @DELETE(':id')
  async delete(
    @PathVariable('id') id: string
  ) {
    requiredParams({ id });
    return this.controller.deleteUser({ id });
  }

}
