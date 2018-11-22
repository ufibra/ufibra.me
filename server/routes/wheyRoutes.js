const express = require('express');
const router = express.Router();
const controller = require('../controllers/wheyprotein');

router.get('/wheyprotein', controller.get);
router.get('/store', controller.getOne);

module.exports = router;