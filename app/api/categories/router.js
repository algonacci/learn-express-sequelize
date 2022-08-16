const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const { getAllCategories, createCategories, updateCategories, deleteCategories } = require('./controller');

router.get('/categories', auth, getAllCategories);
router.post('/categories', auth, createCategories);
router.put('/categories/:id', auth, updateCategories);
router.delete('/categories/:id', auth, deleteCategories);

module.exports = router;
