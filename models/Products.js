const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    default: 'Product' 
  },
  userId : {
    type: String,
    required: true,
  }
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;