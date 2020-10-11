import { logger } from '@iinfinity/logger';
import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { getDate, loadConfig } from '../@util';

export function exportDatabase() {
  const { KEY, DATABASE } = loadConfig();
  existsSync('out') || mkdirSync('out');
  const exportDB = 'decrypted.db';
  const encryptedDB = `${getDate()}-encrypted.db`;
  const decryptedDB = `${getDate()}-decrypted.db`;
  const commandCopy = `adb exec-out su -c "cp /data/data/com.tencent.mm/MicroMsg/${DATABASE}/EnMicroMsg.db /sdcard/${exportDB}"`;
  const commandPull = `adb pull /sdcard/${exportDB} out/${encryptedDB}`;
  const commandDecrypt = `sqlcipher out/${encryptedDB} 'PRAGMA key = "${KEY}"; PRAGMA cipher_use_hmac = off; PRAGMA kdf_iter = 4000; ATTACH DATABASE "out/${decryptedDB}" AS decrypted_database KEY ""; SELECT sqlcipher_export("decrypted_database"); DETACH DATABASE decrypted_database;'`;
  const commandBackup = `cp out/${decryptedDB} out/${exportDB}`;
  logger.info(`Copy to sdcard: ${execSync(commandCopy).length}`);
  logger.info(`Pull to local disk: ${execSync(commandPull).length}`);
  logger.info(`Decrypt: ${execSync(commandDecrypt).length}`);
  logger.info(`Export database: ${execSync(commandBackup).length}`);
}
