const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mg = require('mongoose');

dotenv.config({path : './config/config.env'});

const centersRoute = require('./routes/Centers');
const coursesRoute = require('./routes/Teachers');
const usersRoute = require('./routes/Users');

const app = express();
app.use(bodyParser.json());

app.use('/centers', centersRoute);
app.use('/courses', coursesRoute);
app.use('/users', usersRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to port: ${process.env.PORT}!`);
});

mg.connect(process.env.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log(`Connected to database!`);
});