// condition if env is in dev
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bcrypt = require('bcrypt');
const hbs = require('hbs');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//User schema
const User = require('./models/user-schema')



// connection with DB
const mongoDB = 'mongodb+srv://Artem:qwerty51@luxury-shop-6jbkc.mongodb.net/luxury-market';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

//pasport midlleware
passport.use(new LocalStrategy(
  async (username, password, done) => {
    const user = await User.findOne({ login: username });
    console.log(password);

    console.log(await bcrypt.compare(password, user.password));

    if (!user) {
      return done(null, false);
    } else if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  }));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await User.findOne({ _id: id });
  cb(null, user);
});


//routs
const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/login', loginRouter);

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
