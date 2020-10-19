import { DELETE, GET, HTTP403Exception, HTTP500Exception, HTTPException, Inject, PathVariable, POST, RequestBody, requiredParams, requiredParamsInFields, View } from '@rester/core';
import { safeResponse, safeResponseArray } from '../@util';
import { TagController } from './tag.controller';
import { Tag } from './tag.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('tags')
export class TagView {

  @Inject()
  private controller!: TagController;

  @POST()
  async insert(
    @RequestBody() tag: Tag
  ) {
    requiredParamsInFields(tag, ['name']);
    return this.controller
      .insert(tag)
      .then(safeResponse)
      .catch(reason => { throw new HTTP403Exception(`unable to insert tag '${tag.name}'`, { error: `unable to insert tag '${tag.name}'` }); });
  }

  @DELETE(':name')
  async delete(
    @PathVariable('name') name: string
  ) {
    requiredParams({ name });
    return this.controller
      .delete({ name })
      .then(safeResponse);
  }

  /**
   * @deprecated not allow to update tag
   */
  async update() {
    throw new HTTP500Exception('not allow to update tag', { error: 'not allow to update tag' });
  }

  @GET(':name')
  async select(
    @PathVariable('name') name: string
  ) {
    requiredParams({ name });
    const tag = await this.controller.select({ name });
    if (!tag) {
      throw new HTTPException(204, `tag '${name}' not found`);
    }
    return safeResponse(tag);
  }

  @GET()
  async selectAll() {
    return this.controller
      .selectAll()
      .then(safeResponseArray);
  }

}
