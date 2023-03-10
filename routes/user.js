const express = require('express');
const User = require('../models/Users');
const app = express();


//create new User : api/user/register
app.post('/register', async (req, res) => {
  let newuser = new User(req.body);
  let save = await newuser.save();
  res.send(save)
})


module.exports = app;