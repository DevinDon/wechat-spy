import { logger } from '@iinfinity/logger';
import { execSync } from 'child_process';

export function getDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function getDatabase() {
  const command = `adb exec-out 'su -c cat /data/data/com.tencent.mm/MicroMsg/f6a3c0f680751728eb8223c32f419fc2/EnMicroMsg.db' > temp/${getDate()}.db`;
  logger.info(`Export database: ${execSync(command)}`);
}
