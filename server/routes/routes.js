const express = require('express');
const { fetchAllCards } = require('../controllers/controller.js');
const router = express.Router();

router.get('/cards', fetchAllCards);

module.exports = router;