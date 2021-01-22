// routes/index.js and users.js
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// module.exports = router;
// ..stuff below
export default router;
