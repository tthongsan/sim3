const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
const AC = require('./controllers/authController');
const UC = require('./controllers/userController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}))

app.use(express.static(__dirname + '/../build')); 


massive(process.env.CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('connected')
})

app.post('/api/user', UC.register);
app.put('/api/user/:id', UC.updateUser)

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT} 🦍`)
})