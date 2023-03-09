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
  categorie: {
    type: String,
    required: true,
    default: 'Product'
  }

})

const product = mongoose.model('products', productSchema);
module.exports = product;