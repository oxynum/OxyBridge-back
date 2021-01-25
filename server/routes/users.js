import express from 'express';
const router = express.Router();
import UsersController from '../controller/usersController';

/* GET users listing. */
router.get('/', UsersController.usersList);

/* GET a user by ID. */
router.get('/:id', UsersController.userById);

export default router;
