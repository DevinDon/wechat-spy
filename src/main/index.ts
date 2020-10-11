import { CORSHandler, Rester } from '@rester/core';

const rester = new Rester()
  .configViews
  .add()
  .end()
  .configHandlers
  .add(CORSHandler)
  .end();

if (process.env.MODE === 'PROD') {
  rester.configDatabase.setEntities([]).end();
}

rester.listen();
