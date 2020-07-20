const graylog2 = require('graylog2');
const crypto = require('crypto');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//Define rotas para o sistema
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var userRouter2 = require('./routes/metrics');
var app = express();

//GrayLog Início
const logger = new graylog2.graylog({
  servers: [{ 'host': 'graylog', port: 12201 }]
});
//Gera logs para o GrayLog
logger.log('Sistema ok!');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users',userRouter);
app.use('/metrics',userRouter2);

// Rota para erro 404
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Página de erro
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
