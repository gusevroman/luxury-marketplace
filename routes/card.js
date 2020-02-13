const router = require('express').Router()

/* GET cards listing. */
router.get('/', (req, res) => {
  res.render('card');
});

module.exports = router;
