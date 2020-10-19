export function safeResponse(value: any) {
  delete value._id;
  return value;
}

export function safeResponseFields(value: any, keys: string[] = ['_id']) {
  for (const key of keys) {
    delete value[key];
  }
  return value;
}

export function safeResponseArray(array: any[]) {
  return array.map(safeResponse);
}
