import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { QaController } from './qa.controller';
import { Qa } from './qa.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('qa')
export class QaView {

  @Inject()
  private controller!: QaController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
