const express = require('express');
const router = express.Router();
const controller = require('../controllers/wheyprotein');

router.get('/wheyprotein', controller.get);

module.exports = router;