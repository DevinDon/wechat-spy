import { readFileSync } from 'fs';

export interface Config {
  IMEI: string;
  UIN: string;
  KEY: string;
  DATABASE: string;
  ID: string;
}

export function loadConfig(): Config {
  return JSON.parse(readFileSync('key.json').toString());
}

export function getDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
