const express = require('express');
const router = express.Router();
const Goods = require('../models/goods-schema');

router.get('/', (req, res) => {
  res.render(); //отрисовать страницу добавления вещей
})

router.get('/:postId', async (req, res) => {
  const id = req.params.postId;
  const item = await Goods.findById(id);
  const {title, price, description, checked, image, userID, sex, size, brand, style} = item;
  res.render('post', {
    title,
    price,
    description,
    checked,
    image,
    userID,
    sex,
    size,
    brand,
    style
  })
})




module.exports = router;
