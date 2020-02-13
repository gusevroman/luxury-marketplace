const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
  res.render(); //отрисовать страницу добавления вещей
})




module.exports = router;
