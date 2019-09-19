const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const mongo = require('mongodb').MongoClient

const logger = require('morgan');



const errorController = require('./controllers/error');

const emailRouter = require('./routes/email');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/emailapp'


const app = express();

mongoose.connect(url);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/public', express.static('public'));


// view engine setup
app.set('view engine', 'ejs');
app.set ('views', 'views');


//app.use(logger('dev'));
//app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/email', emailRouter);

app.use(errorController.getPageNotFound);






app.listen(3000);
module.exports = app;
