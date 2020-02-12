const express = require('express');
const router = express.Router();
const Good = require('../models/goods-schema');
const User = require('../models/user-schema');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res) => {
  const { email, fullname, login, password } = req.body;
  const newUser = new User({ email, fullname, login, password })
  await newUser.save();
  res.redirect('/')
})
module.exports = router;
