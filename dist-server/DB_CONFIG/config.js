"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'myapp_test'
  }
});

knex.raw("SELECT VERSION()").then(function (version) {
  return console.log(version[0][0]);
})["catch"](function (err) {
  console.log(err);
  throw err;
})["finally"](function () {
  knex.destroy();
});
var _default = knex;
exports["default"] = _default;