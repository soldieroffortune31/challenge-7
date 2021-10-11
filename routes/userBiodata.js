const express = require('express');
const router = express.Router();
// const {user_game_history} = require('./../models');
const userBiodata = require('../controllers/userBiodata');


router.get('/', userBiodata.getData);
router.get('/:id', userBiodata.getUserById);
router.delete('/:id', userBiodata.delete);


module.exports = router;