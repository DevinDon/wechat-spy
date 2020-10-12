# Decrpty

```shell
sqlcipher export.db 'PRAGMA key = "0123456"; PRAGMA cipher_use_hmac = off; PRAGMA kdf_iter = 4000; ATTACH DATABASE "decrypted_database.db" AS decrypted_database KEY ""; SELECT sqlcipher_export("decrypted_database"); DETACH DATABASE decrypted_database;'
```

# Env

```shell
apt install sqlcipher
```
