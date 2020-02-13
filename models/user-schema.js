const mongoose = require('mongoose');
const validator = require('validator');


function isEmail(val) {
  return validator.isEmail(val);
}

const schemaUser = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // fullname: {
  //   type: String,acd
  //   required: true,
  //   trim: true,
  // },
  // email: {
  //   type: String,
  //   validate: isEmail,
  //   required: true,
  //   unique: true,
  //   trim: true
  // },
  // phone: {
  //   type: String,
  //   required: true,
  // },
  // sex : {
  //   type : String,
  //   required: true,
  // }
})

module.exports = mongoose.model('User', schemaUser);
