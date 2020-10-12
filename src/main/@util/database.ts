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
  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
