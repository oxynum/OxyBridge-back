"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIG_MYSQL = void 0;
var CONFIG_MYSQL = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    // process.env.MYSQL_HOST
    port: 3306,
    // process.env.MYSQL_PORT
    user: 'root',
    // process.env.MYSQL_USERNAME
    password: 'root',
    // process.env.MYSQL_PASSWORD
    database: 'myapp_test' // process.env.MYSQL_DATABASE

  }
};
exports.CONFIG_MYSQL = CONFIG_MYSQL;