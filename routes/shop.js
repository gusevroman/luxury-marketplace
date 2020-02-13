const router = require('express').Router();

/* GET cards listing. */
router.get('/', (req, res) => {
  res.render('shop'); // вывести все карточки товаров
});

module.exports = router;
