import { Controller, HTTP403Exception } from '@rester/core';
import { TagEntity } from './tag.entity';
import { Tag } from './tag.model';

type ParamTagName = Pick<Tag, 'name'>;

// insert, delete, update, select
// one, more

@Controller()
export class TagController {

  async insert(tag: Tag) {
    return TagEntity.insert(tag);
  }

  async delete({ name }: ParamTagName) {
    const tag = await this.select({ name });
    TagEntity.delete({ name });
    return tag;
  }

  async select({ name }: ParamTagName) {
    return TagEntity.findOne({ name });
  }

  async selectAll() {
    return TagEntity.find();
  }

}
