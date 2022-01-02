var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});
router.get('/auto', function(req, res, next) {
  res.render('auto', { title: 'Express' });
});
module.exports = router;
