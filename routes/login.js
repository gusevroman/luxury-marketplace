const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport')
const User = require('../models/user-schema');


router.get('/', (req, res) => {
  res.render('login')
});

router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/badauth',
    successRedirect: '/account'
  })
);

module.exports = router;
