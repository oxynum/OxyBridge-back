"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _usersModel = _interopRequireDefault(require("../models/usersModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Ce controller permet de faire appel au Modele "usersModel" afin de récupèrer les informations liées aux utilisateurs
*/
var UsersController = /*#__PURE__*/function () {
  function UsersController() {
    _classCallCheck(this, UsersController);
  }

  _createClass(UsersController, null, [{
    key: "usersList",
    value: function usersList(req, res) {
      _usersModel["default"].get().then(function (result) {
        if (result) {
          res.send(result);
        } else {
          res.send({
            error: 'Error while getting all users'
          });
        }
      });
    }
  }, {
    key: "userById",
    value: function userById(req, res) {
      _usersModel["default"].getById(req.params.id).then(function (result) {
        if (result.length > 0) {
          res.send(result);
        } else if (result.length === 0) {
          res.send({
            error: "Error while getting User by id: ".concat(req.params.id)
          });
        }
      });
    }
  }]);

  return UsersController;
}(); // => module.exports = UsersController;


var _default = UsersController;
exports["default"] = _default;