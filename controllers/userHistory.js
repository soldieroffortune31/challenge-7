const {user_game_history, user_game} = require('./../models');

module.exports = {

    getData : (req, res) => {
        user_game_history.findAll({include : [{model: user_game, as: "user_history"}]})
        .then(result => {
            res.status(200).json(result);
        })
    },

    getDataById : (req, res) => {
        user_game_history.findOne({where : {id : req.paramas.id}})
        .then(result => {
            res.status(200).json(result);
        })
    },

    create : (req, res) => {
        user_game_history.create({
            skor : req.body.skor,
            jumlahGame : req.body.skor,
            user_id : req.body.user_id
        }).then(result => {
            res.status(200).json({
                code : 200,
                message : 'Data Berhasil Disimpan'
            })
        })
    },

    delete : (req, res) => {
        user_game_history.destroy({where : {id: req.params.id}})
        .then(result => {
            res.status(200).json({
                code : 200,
                message : 'Data Berhasil Dihapus'
            })
        })
    }
}