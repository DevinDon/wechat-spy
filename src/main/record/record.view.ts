import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { RecordController } from './record.controller';
import { Record } from './record.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('record')
export class RecordView {

  @Inject()
  private controller!: RecordController;

}
