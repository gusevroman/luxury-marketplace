const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { sex, brand, category, style } = req.body;
  console.log(sex, brand, category, style);

})

module.exports = router;
