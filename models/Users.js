const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const user = mongoose.model('users', userSchema);
module.exports = user;