// const user_game_biodata = require('../models/user_game_biodata');
const user_game_history = require('../models/user_game_history');
const {user_game, user_game_biodata} = require('./../models');

module.exports = {
    index : (req, res) => {
        user_game.findAll({include: [{model: user_game_biodata, as : "user"}]})
        .then(getUser => {
            res.status(200).render('user', {getUser});
        })
    },

    getUserById : (req, res) => {
        user_game.findOne({where : {id : req.params.id}})
        .then(result => {
            res.status(200).json(result)
        })
    },

    create : (req, res) => {
        user_game.create({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        }).then(result => {
            user_game_biodata.create({
                namaLengkap : req.body.namaLengkap,
                alamat : req.body.alamat,
                noHp : req.body.noHp,
                user_id : result.id
            })
            res.status(200).json({code : 200, message : 'Data Berhasil Disimpan'})
        })
    },

    delete : (req, res) => {
        user_game.destroy({where : {id : req.params.id}})
        .then(result => {
            user_game_biodata.destroy({where : {user_id : req.params.id}})
        })
        res.status(200).json({code: 200, message: "Data Berhasil Dihapus"})
    }
}
