// routes/index.js and users.js
import express from 'express';
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// module.exports = router;
// ..stuff below
export default router;
