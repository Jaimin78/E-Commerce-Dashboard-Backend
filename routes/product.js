const express = require('express');
const Product = require('../models/Products')
const app = express();


//Get Product data : api/product
app.get('/', async (req,res) => {
  let result = await Product.find();
  if(result.length>0){
    res.json(result);
  }else{
    res.send({error:"Product not found"}) 
  }
})

//Get Single Product: api/product/get/:id
app.get('/get/:id', async (req,res) =>{
  let result = await Product.findOne({_id:req.params.id});
  if(result){
    res.send(result);
  }else{
    res.send({error:"Product not found"})
  }
})

//Add Product : api/product/add
app.post('/add', async (req,res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result)
})

//Delete Product: api/product/delete/:id
app.delete('/delete/:id', async (req,res) => {
  let remove = await Product.deleteOne({_id:req.params.id});
  res.send(remove);
})

module.exports = app;