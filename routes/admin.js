const router = require('express').Router();

/* GET users listing. */
// router.get('/create', (req, res) => {
//   res.render('posts');
// });

router.get('/', (req, res) => {
  res.render('admin');
});


module.exports = router;
