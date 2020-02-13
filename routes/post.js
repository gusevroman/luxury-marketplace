const router = require('express').Router()

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('posts');
});

module.exports = router;
