const {user_game} = require('./../models');

module.exports = {
    
    index : (req, res) => {
        res.status(200).render('login');
    },

    login : async (req, res) => {
        const data = await user_game.findOne({where : {username : req.body.username} && {password : req.body.password}});
        if(data){
            res.status(200).send('login berhasil')
        }else{
            res.status(200).send('login gagal');
        }
    }
}