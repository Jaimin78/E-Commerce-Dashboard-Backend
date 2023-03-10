const express = require('express');
require('./db');
const app = express()

app.use(express.json())

app.use('/api/product', require('./routes/product'));
app.use('/api/user', require('./routes/user'));

app.listen(5000, () => {
  console.log("Server is live")
})