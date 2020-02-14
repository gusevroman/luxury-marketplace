const mongoose = require('mongoose');
const validator = require('validator');


function isEmail(val) {
  return validator.isEmail(val);
}

const schemaUser = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    validate: isEmail,
    required: true,
    unique: true,
    trim: true
  }
})

module.exports = mongoose.model('User', schemaUser);
