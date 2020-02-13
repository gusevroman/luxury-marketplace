const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user-schema');

//protection midlleware
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}


router.get('/', function (req, res, next) {
  res.render('index');
});


router.post('/', async (req, res) => {
  const { login, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({ login, password: hashPassword });
    res.redirect('/login')
  } catch (e) {
    res.status(418).send({ messege: 'Юсер с таким логином уже существует' })
  }

})

module.exports = router;
