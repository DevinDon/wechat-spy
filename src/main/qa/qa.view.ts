import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { QaController } from './qa.controller';
import { QA } from './qa.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('qa')
export class QaView {

  @Inject()
  private controller!: QaController;

}
