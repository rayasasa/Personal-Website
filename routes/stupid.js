var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/stupid', function(req, res, next) {
  res.render('stupid', { title: 'Express' });
});

module.exports = router;
