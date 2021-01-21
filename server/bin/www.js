/**
 * Module dependencies.
 */
import app from '../app';
import debugLib from 'debug';
import http from 'http';
const debug = debugLib('oxybridge-back:server');
// ..generated code below.

//const app = require('../app');
app.listen(3000, () => {
  console.log('server is listen');
});
console.log(app);