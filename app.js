const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/user')
const userBiodata = require('./routes/userBiodata')
const userHistory = require('./routes/userHistory')
const register = require('./routes/register')
const login = require('./routes/login')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/user', user);
app.use('/biodata', userBiodata);
app.use('/history', userHistory);
app.use('/register', register);
app.use('/login', login)

app.use('/', (req, res) => {
	res.status('404').send('Page Not Found');
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
