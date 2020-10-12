import { GET, HTTP400Exception, Inject, PathQuery, View } from '@rester/core';
import { MessageController } from './message.controller';

// add, remove, modify, find(condition), get(random)
// one, more

@View('message')
export class MessageView {

  @Inject()
  private controller!: MessageController;

  @GET('records')
  async getRecords(
    @PathQuery('start') start: number = 0,
    @PathQuery('end') end: number = Date.now(),
    @PathQuery('group') group: string,
    @PathQuery('limit') limit: number = 100,
    @PathQuery('page') page: number = 1
  ) {
    if (!group) { throw new HTTP400Exception('param `group` is required'); }
    limit = Math.max(0, limit);
    limit = Math.min(100, limit);
    const skip = Math.max(1, page) * limit - limit;
    return this.controller.selectMessagesToRecords({
      start, end, group, limit, skip
    });
  }

  @GET('qas')
  async getQAs(
    @PathQuery('start') start: number = 0,
    @PathQuery('end') end: number = Date.now(),
    @PathQuery('group') group: string,
    @PathQuery('limit') limit: number = 100,
    @PathQuery('page') page: number = 1
  ) {

  }

}
