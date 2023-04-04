const express = require('express');
const User = require('../models/Users');
const app = express();


//create new User : api/user/register
app.post('/register', async (req, res) => {
  let newuser = new User(req.body);
  let save = await newuser.save();
  save = save.toObject()
  delete save.password
  res.send(save)
})

//Sign User : api/user/login
app.post('/login', async (req, res) => {

  if (req.body.email && req.body.password) {
    let find = await User.findOne(req.body).select("-password");
    if(!find){
       return res.status(404).json({error:"user not found"})
    }
    res.send(find)
  }else{
    return res.status(404).json({error:"user not found"})
  }
})


module.exports = app;