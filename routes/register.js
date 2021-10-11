const express = require('express');
const router = express.Router();
const register = require('../controllers/register');

router.get('/', register.index);
router.post('/', register.create);

module.exports = router;