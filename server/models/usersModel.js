import DbMySqlConnection from '../DB_CONFIG/dbMySqlConnection';

const db = new DbMySqlConnection().connect();

/**
 * Ce modele permet de récupèrer les informations liées aux users en base de données.
*/
class UsersModel {

  /**
   * Static method to get all users with a limit of 5.
   * @return {Array} Returns a list of Users.
   */
  static get() {
    return db('user').select('*').limit(5);
  }
  /**
   * Get User by Id inside the MySQL.
   * @param {Number} id inside the database to specify which user to get.
   */
  static getById(id) {
    return db('user').select('*').where('id', id);
  }
}

// => module.exports = UsersModel;
export default UsersModel;