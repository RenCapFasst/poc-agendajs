var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var agendaService = require('./agenda');

var indexRouter = require('./routes/index');
var agendaRouter = require('./routes/agenda');

var app = express();

// Init the agenda
(async () => {
  await agendaService().init();
})();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/agenda', agendaRouter);

module.exports = app;
