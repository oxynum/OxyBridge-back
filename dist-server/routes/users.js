"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _usersController = _interopRequireDefault(require("../controller/usersController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

/* GET users listing. */
router.get('/', _usersController["default"].usersList);
/* GET a user by ID. */

router.get('/:id', _usersController["default"].userById);
var _default = router;
exports["default"] = _default;