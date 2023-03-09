const express = require('express');
const product = require('../models/Products')
const app = express();

//Get Product data : api/getproduct
app.get('/', async (req,res) => {
  let result = await product.find();
  console.log(result)
  res.json(result)
})

module.exports = app;