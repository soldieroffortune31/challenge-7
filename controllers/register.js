const {user_game, user_game_biodata} = require('./../models/');

module.exports = {
    
    index : (req, res) => {
        res.status(200).render('register');
    },
    
    create : (req, res) => {
        user_game.create({
            username : req.body.username,
            password : req.body.password1,
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
    }
    
}