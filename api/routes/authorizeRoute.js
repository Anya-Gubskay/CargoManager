const express = require('express');
const router = express.Router();
const authorizeController = require('../controllers/authorizeController');

router.post('/api/authenticate', authorizeController.authenticate);

module.exports = router;
