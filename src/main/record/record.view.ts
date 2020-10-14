import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { RecordController } from './record.controller';
import { Record } from './record.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('record')
export class RecordView {

  @Inject()
  private controller!: RecordController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
