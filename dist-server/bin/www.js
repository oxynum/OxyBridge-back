"use strict";

var _app = _interopRequireDefault(require("../app"));

var _debug = _interopRequireDefault(require("debug"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Module dependencies.
 */
var debug = (0, _debug["default"])('oxybridge-back:server'); // ..generated code below.
//const app = require('../app');

_app["default"].listen(3000, function () {
  console.log('server is listen');
});

console.log(_app["default"]);