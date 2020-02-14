const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', (req, res) => {
  res.render('admin')
});

router.post('/')

router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
  })
);

module.exports = router;
