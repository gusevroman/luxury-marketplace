const express = require('express');
const router = express.Router();
const Goods = require('../models/goods-schema')

router.get('/', async (req, res) => {
  const { sex, brand, category, style } = req.query;
  const filteredGoods = await Goods.find({sex})
  
  res.json(filteredGoods)
})

module.exports = router;
