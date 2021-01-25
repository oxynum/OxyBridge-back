import knex from 'knex';
import {CONFIG_MYSQL} from './config';

/**
 * 
 */
export default class DbMySqlConnection {
  constructor() {
    this.client = CONFIG_MYSQL.client;
    this.connection = CONFIG_MYSQL.connection;
  }

  /**
   * Create a new database connection to MySQL.
   */
  connect() {
    return knex({
      client: this.client,
      connection: this.connection
    });
  };
}