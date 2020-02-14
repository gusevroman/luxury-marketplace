const express = require('express');
const router = express.Router();
const Goods = require('../models/goods-schema')

router.get('/new', (req, res) => {
  res.render('new-item');
});

//add new item 
router.post('/new', async (req, res) => {
  
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
  res.redirect('/')
})


module.exports = router;
