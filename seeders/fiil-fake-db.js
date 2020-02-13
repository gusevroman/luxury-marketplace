const mongoose = require("mongoose");
const mongoDB = 'mongodb+srv://Artem:qwerty51@luxury-shop-6jbkc.mongodb.net/luxury-market';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })


const Entry = require('../models/goods-schema');


const goods = [
  {
    title: "Salsify Taro Catsear Garlic",
  },
  {
    title: "Kohlrabi Radish Okra Azuki",
  },
  {
    title: "Lotus Root Water Spinach",
  },
  {
    title: "Bean Swiss Chard Seakale",
  },
  {
    title: "Magis Kohlrabi Welsh Onion",
  },
  {
    title: "Parsley Shallot Courgette Tatsoi",
  },
  {
    title: "Bean Mustard Tigernut",
    body: "Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut.", createdAt: new Date(), updatedAt: new Date()
  },
  {
    title: "Aubergine Spring Onion",
  },
  {
    title: "Chicory Celtuce Parsley",
  },
  {
    title: "Coriander Yarrow Sweet Pepper",
  }
];


Entry.insertMany(goods)
