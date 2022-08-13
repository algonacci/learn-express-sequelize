const express = require('express');
const router = express.Router();

router.get('/category', function(req, res) {
  res.status(200).json({message: 'Router category'});
});

module.exports = router;
