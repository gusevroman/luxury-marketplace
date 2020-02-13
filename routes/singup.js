const router = require('express').Router()

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', (req, res) => {
  // const { username }
})

module.exports = router;


