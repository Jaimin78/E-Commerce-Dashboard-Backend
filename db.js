const mongoose = require('mongoose');
const uri = "mongodb+srv://Jaimin:jaimin@jaimin.qjzvkio.mongodb.net/E-commerce?retryWrites=true&w=majority";

const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(uri);
}

module.exports = connectDb;