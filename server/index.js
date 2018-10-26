const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('connected')
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT} 🦍`)
})