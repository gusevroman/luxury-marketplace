const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('slider');
});


router.get('/checkUser', async (req, res) => {
  const { user } = req;
  await res.json(user);
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})


module.exports = router;
