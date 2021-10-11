const {user_game} = require('./models');

user_game.create({
    username: 'alief',
    password: 'alief',
    email : 'alief@gmail.com'
}).then(result => {
    console.log(result);
})