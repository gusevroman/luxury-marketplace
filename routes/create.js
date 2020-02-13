const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('post');
});

module.exports = router;
