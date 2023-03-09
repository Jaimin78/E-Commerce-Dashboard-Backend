const express = require('express');
const connectDb = require('./db')
const app = express();
connectDb()

app.use(express.json())

app.use('/api/getproduct', require('./routes/getproduct'));

app.listen(5000, () => {
  console.log("Server is live")
})