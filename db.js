const mongoose = require('mongoose');
const uri = "mongodb+srv://Jaimin:jaimin@jaimin.qjzvkio.mongodb.net/E-commerce?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);
mongoose.connect(uri);