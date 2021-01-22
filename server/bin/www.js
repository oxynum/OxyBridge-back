/**
 * Module dependencies.
 */
import {app, knex} from '../app';
import debugLib from 'debug';
const debug = debugLib('oxybridge-back:server');
const PORT = process.env.PORT || 3000;
// ..generated code below.

//const app = require('../app');
app.listen(PORT, () => {
  console.log(`[OXYBRIDGE - API] Server is listening on port: ${PORT}`);
});