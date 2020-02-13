const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

// connection with DB
const mongoDB = 'mongodb+srv://Artem:qwerty51@luxury-shop-6jbkc.mongodb.net/luxury-market';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })



//routs
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const singupRouter = require('./routes/singup');
const mainRouter = require('./routes/main');
const postsRouter = require('./routes/posts')


const app = express();

// view engine setup
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', singupRouter);
app.use('/posts', postsRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
