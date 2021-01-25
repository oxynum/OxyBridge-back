export const CONFIG_MYSQL = {
  client: 'mysql', 
  connection: {
    host : 'localhost', // process.env.MYSQL_HOST
    port: 3306, // process.env.MYSQL_PORT
    user : 'root', // process.env.MYSQL_USERNAME
    password : 'root', // process.env.MYSQL_PASSWORD
    database : 'myapp_test' // process.env.MYSQL_DATABASE
  }
};
