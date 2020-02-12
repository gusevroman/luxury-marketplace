const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
  title: {
    // Goods name
    type: String,
    required: true,
  },
  price: {
    // Goods price
    type: Number,
    required: true,
  },
  description: {
    // Description of the good
    type: String,
    required: true,
  },
  checked: {
    // This stuff is needed for admin, to check whether fits the description
    type: Boolean,
  },
  image: {
    //?????
  },
  userID: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  },
  // filters
  sex: {
    type : String,
    required: true,
  },
  size: {
    type : String,
    required: true,
  },
  brand: {
    type : String,
    required: true,
  },
  style: {
    type : String
  }
})


module.exports = mongoose.model('Good', goodsSchema);
