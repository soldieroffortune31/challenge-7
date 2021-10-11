const {user_game_biodata, user_game} = require('../models/');

module.exports = {
    getData : (req, res) => {
        user_game_biodata.findAll({include: [{model: user_game, as: "user_biodata"}]})
        .then(result => {
            res.status(200).json(result);
        })
    },

    getUserById : (req, res) => {
        user_game_biodata.findAll({include: [{model: user_game, as: "user_biodata"}], where : {user_id: req.params.id}})
        .then(result => {
            res.status(200).json(result);
        })
    },

    delete : (req, res) => {
        user_game_biodata.destroy({where : {id: req.params.id}})
        .then(result => {
            res.status(200).json({code: 200, message: 'Data Berhasil Dihapus'})
        })
    }
};