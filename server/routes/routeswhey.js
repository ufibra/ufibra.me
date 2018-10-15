const express = require('express');
const router = express.Router();
const controller = require('../controllers/wheyprotein');

router.get('/teste', controller.get);

module.exports = router;