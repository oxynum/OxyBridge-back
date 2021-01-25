"use strict";

var _app = require("../app");

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Module dependencies.
 */
var debug = (0, _debug["default"])('oxybridge-back:server');
var PORT = process.env.PORT || 3000; // ..generated code below.
//const app = require('../app');

_app.app.listen(PORT, function () {
  console.log("[OXYBRIDGE - API] Server is listening on port: ".concat(PORT));
});