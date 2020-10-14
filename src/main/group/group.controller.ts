import { Controller } from '@rester/core';
import { Group } from './group.model';
import { GroupEntity } from './group.entity';

// insert, delete, update, select
// one, more

@Controller()
export class GroupController {

  async selectOneByID(id: Group['id']) {
    return GroupEntity.findOne(id);
  }

}