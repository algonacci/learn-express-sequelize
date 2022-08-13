var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/auth', function(req, res) {
  res.status(200).json({message: 'Router auth'});
});

module.exports = router;
