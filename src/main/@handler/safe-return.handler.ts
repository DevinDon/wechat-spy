import { BaseHandler } from "@rester/core";

export class SafeReturnHandler extends BaseHandler {

  async handle(next: () => Promise<any>): Promise<any> {
    return next().then(v => {
      delete v._id;
      return v;
    });
  }

}
