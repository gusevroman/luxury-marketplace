const router = require('express').Router();
const Goods = require('../models/goods-schema');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('post');
});

router.post('/', async (req, res) => {
  const { sex, brand, description, image, size, category, price, title } = req.body // Добавить id пользователя, когда будут доделаны сессии
  await Goods.create({
    sex: sex,
    brand: brand,
    description: description,
    image: image,
    size: size, 
    category: category,
    price: price,
    title: title
  });
})

module.exports = router;
