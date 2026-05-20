var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cicd deployment through github actions successful❤️❤️❤️' });
});

module.exports = router;
