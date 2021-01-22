const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port: 3306,
    user : 'root',
    password : 'root',
    database : 'myapp_test'
  }
});


knex.schema.createTable('user', table => {
  table.increments('id');
  table.string('firstname');
  table.string('lastname');
  table.string('username');
  table.string('email');
  table.string('password');
  table.timestamps('birthdate');
}).then(() => {
  console.log('Table User created');
}).catch(e => {
  console.log('Issue while creating the database User:', e);
})