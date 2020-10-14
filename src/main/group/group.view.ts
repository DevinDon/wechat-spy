import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { GroupController } from './group.controller';
import { Group } from './group.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('group')
export class GroupView {

  @Inject()
  private controller!: GroupController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
