const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { getAllBooks } = require('./controller');

router.get('/books', auth, getAllBooks);

module.exports = router;
