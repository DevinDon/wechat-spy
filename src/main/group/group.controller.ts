import { Controller, HTTPException } from '@rester/core';
import { GroupEntity } from './group.entity';
import { Group } from './group.model';

// insert, delete, update, select
// one, more

@Controller()
export class GroupController {

  async insertGroup(group: Group) {
    // 群组存在，则不能插入
    if (await GroupEntity.findOne({ id: group.id })) {
      throw new HTTPException(409, `Group ID ${group.id} has existed`, { id: group.id, message: `Group ID ${group.id} has existed.` });
    }
    await GroupEntity.insert(group);
    return group;
  }

}
