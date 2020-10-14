import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, requiredParams, requiredParamsInFields, View } from '@rester/core';
import { safeResponse } from '../@util';
import { GroupController } from './group.controller';
import { Group } from './group.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('group')
export class GroupView {

  @Inject()
  private controller!: GroupController;

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
    @RequestBody() group: Group
  ) {
    requiredParams({ id });
    requiredParamsInFields(group, ['name', 'users', 'start', 'end', 'course', 'peroid']);
    return this.controller
      .insertGroup({ ...group, id, update: new Date() })
      .then(safeResponse);
  }

}
