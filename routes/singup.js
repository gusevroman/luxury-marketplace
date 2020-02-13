const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user-schema');
/* GET users listing. */
router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res) => {
  const { username, pass, passConfirm, email } = req.body;
  if(pass !== passConfirm) {
    res.redirect('/signup')
  }
  const hashedPassword = await bcrypt.hash(pass, 10);
  console.log(hashedPassword);
  
  try {
    await User.create({ fullname: username, password: hashedPassword, email });
    res.redirect('/login')
  } catch (e) {
    console.log(e);
    
    res.status(500).send({ messege: 'Юсер с таким логином уже существует' })
  }
})

module.exports = router;


