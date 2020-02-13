const express = require('express');
const router = express.Router();
const Goods = require('../models/goods-schema');

router.get('/', (req, res) => {
  res.render('posts'); 
})

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
  res.redirect('/')
})

// router.get('/:postsId', async (req, res) => {
//   const id = req.params.postId;
//   const item = await Goods.findById(id);
//   const {title, price, description, checked, image, userID, sex, size, brand, style} = item;
//   res.render('', {
//     title,
//     price,
//     description,
//     checked,
//     image,
//     userID,
//     sex,
//     size,
//     brand,
//     style
//   })
// })




module.exports = router;
