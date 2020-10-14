export function safeResponse(value: any) {
  delete value._id;
  return value;
}
