const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('post-list');
})

router.get('/id', (req, res) => {
  res.render('post-id')
})

module.exports = router;
