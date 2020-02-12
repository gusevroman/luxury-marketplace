const express = require('express').Router()

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('login');
});

module.exports = router;
