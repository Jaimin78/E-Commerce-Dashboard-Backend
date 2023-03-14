const express = require('express');
const cors = require('cors')
require('./db');
const app = express()

app.use(express.json());

//This line is used to accept request from any external server
app.use(cors());


app.use('/api/product', require('./routes/product'));
app.use('/api/user', require('./routes/user'));

app.listen(5000, () => {
  console.log("Server is live")
})