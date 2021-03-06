# Wechat Spy

## Structure

1. Record
2. Discussion
3. QA
4. User
5. Group

## SQLCipher

<http://maskray.me/blog/2014-10-14-wechat-export>

数据库密码计算方式：

拼接 `大写 IMEI` 与 `UIN`，计算 `小写 MD5`，取前 7 位。

## Rester Config

### MongoDB

> MongoDB as default database.

```json
{
  "debug": true,
  "database": {
    "type": "mongodb",
    "url": "mongodb://username:password@host.com:27017/database",
    "authSource": "admin",
    "logging": true,
    "synchronize": true,
    "entities": [
      "src/main/**/*.entity.*"
    ]
  }
}
```

### SQLite

```json
{
  "database": {
    "type": "sqlite",
    "database": "./sqlite.db",
    "entities": [
      "**/*.entity.js"
    ],
    "logging": false,
    "synchronize": true
  }
}
```

### PostgreSQL

```json
{
  "database": {
    "type": "mongodb",
    "database": "dev",
    "host": "localhost",
    "port": "27017",
    "logging": true,
    "synchronize": true
  }
}
```

### MySQL

```json
{
  "database": {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "test",
    "database": "test",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ]
  }
}
```

## [THE MIT LICENSE](https://raw.githubusercontent.com/DevinDon/license/master/THE%20MIT%20LICENSE)

Copyright © 2018+ Devin Don

LICENSE: MIT

Click <https://raw.githubusercontent.com/DevinDon/license/master/THE%20MIT%20LICENSE> to view a copy of this license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
