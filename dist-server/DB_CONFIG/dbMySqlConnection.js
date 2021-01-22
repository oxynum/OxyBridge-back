"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 */
var DbMySqlConnection = /*#__PURE__*/function () {
  function DbMySqlConnection() {
    _classCallCheck(this, DbMySqlConnection);

    this.client = _config.CONFIG_MYSQL.client;
    this.connection = _config.CONFIG_MYSQL.connection;
  }
  /**
   * Create a new database connection to MySQL.
   */


  _createClass(DbMySqlConnection, [{
    key: "connect",
    value: function connect() {
      return (0, _knex["default"])({
        client: this.client,
        connection: this.connection
      });
    }
  }]);

  return DbMySqlConnection;
}();

exports["default"] = DbMySqlConnection;