const router = require('express').Router()

router.post('/', (req, res) => {
  res.render('post-list',);
})

router.get('/', (req, res) => {
  
  res.render('post-list');
})


router.get('/id', (req, res) => {
  res.render('post-id')
})

module.exports = router;
