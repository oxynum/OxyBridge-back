import UsersModel from '../models/usersModel';

/**
 * Ce controller permet de faire appel au Modele "usersModel" afin de récupèrer les informations liées aux utilisateurs
*/
class UsersController {

  static usersList(req,res) {
    UsersModel.get().then(result => {
      if(result) {
        res.send(result);
      } else {
        res.send({error: 'Error while getting all users'});
      }
    });
  }

  static userById(req, res) {
    UsersModel.getById(req.params.id).then(result => {
      if(result.length > 0) {
        res.send(result);
      } else if (result.length === 0){
        res.send({
          error: `Error while getting User by id: ${req.params.id}`
        });
      }
    });
  }
}

// => module.exports = UsersController;
export default UsersController;