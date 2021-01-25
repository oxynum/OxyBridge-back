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
  table.date('birthdate');
  table.timestamp();
}).then(() => {
  console.log('Table User created');
}).catch(e => {
  console.log('Issue while creating the database User:', e);
})

knex.schema.createTable('bridge_credentials', table => {
  table.increments('id');
  table.string('username');
  table.string('password');
}).then(() => {
  console.log('Table Bridge_credentials created');
}).catch(e => {
  console.log('Issue while creating the database Bridge_credentials:', e);
})

knex.schema.createTable('user_bridge_info', table => {
  table.increments('id');
  table.string('acces_token');
  table.timestamp();
  table.date('expires_at');
  table
    .integer('user_uuid')
    .unsigned()
    .references('user.id');
  table.string('resource_uri');
  table.string('email');
}).then(() => {
  console.log('Table User_bridge_info created');
}).catch(e => {
  console.log('Issue while creating the database User_bridge_info:', e);
})