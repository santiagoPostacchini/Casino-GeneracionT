const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
var menuRouter = require('./routes/menu');
var usuariosRouter = require('./routes/usuarios');
var crashRouter = require('./routes/crash');
var slotsRouter = require('./routes/slots');
var towerRouter = require('./routes/tower');
var blackjackRouter = require('./routes/blackjack');
//var loginRouter = require('./routes/login');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuRouter);
app.use('/crash', crashRouter);
app.use('/slots', slotsRouter);
app.use('/tower', towerRouter);
app.use('/blackjack', blackjackRouter);
app.use('/usuarios', usuariosRouter);
//app.use('/login', loginRouter)

module.exports = app;
