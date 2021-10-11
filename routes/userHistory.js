const express = require('express');
const router = express.Router();
const userHistory = require('../controllers/userHistory');

router.get('/', userHistory.getData);
router.get('/:id', userHistory.getDataById);
router.post('/', userHistory.create);
router.delete('/:id', userHistory.delete);

module.exports = router;