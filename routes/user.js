const express = require('express');
const router = express.Router();
const {user_game} = require('./../models');
const user = require('../controllers/userGame');
// const {body, validationResult} = require('express-validator');


// router.post('/', body('username').isEmpty(), (req, res, next) =>{

// })

router.get('/', user.index);
router.get('/:id', user.getUserById);
router.post('/', user.create);
router.delete('/:id', user.delete);


// router.get('/', (req, res) => {
//     user_game.findAll()
//     .then(result => {
//         res.status(200).json(result);
//     })
// })

// router.get('/', (req, res) => {
//     user_game.findAll().then(result => {
//         res.status(200).render('user', {result})
//     })
// })

// router.get('/:id', (req, res) => {
//     user_game.findOne({where : {id : req.params.id}})
//     .then(result => {
//         res.status(200).json(result)
//     })
    
// })

// router.delete('/:id', (req, res) => {
//     user_game.destroy({where : {id : req.params.id}})
//     .then(result => {
//         res.status(200).json({data: result.rows});
//     })
// })



// router.post('/', (req, res) => {
//     user_game.create({
//         username: req.body.username,
//         password: req.body.password,
//         email : req.body.email
//     }).then(result => {
//         res.status(200).json(result);
//     })
// })

module.exports = router;