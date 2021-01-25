"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbMySqlConnection = _interopRequireDefault(require("../DB_CONFIG/dbMySqlConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = new _dbMySqlConnection["default"]().connect();
/**
 * Ce modele permet de récupèrer les informations liées aux users en base de données.
*/

var UsersModel = /*#__PURE__*/function () {
  function UsersModel() {
    _classCallCheck(this, UsersModel);
  }

  _createClass(UsersModel, null, [{
    key: "get",

    /**
     * Static method to get all users with a limit of 5.
     * @return {Array} Returns a list of Users.
     */
    value: function get() {
      return db('user').select('*').limit(5);
    }
    /**
     * Get User by Id inside the MySQL.
     * @param {Number} id inside the database to specify which user to get.
     */

  }, {
    key: "getById",
    value: function getById(id) {
      return db('user').select('*').where('id', id);
    }
  }]);

  return UsersModel;
}(); // => module.exports = UsersModel;


var _default = UsersModel;
exports["default"] = _default;