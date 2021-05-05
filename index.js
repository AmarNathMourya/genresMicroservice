const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/genres-services',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(require('./router'))

const port = 3000;

app.listen(port, () => console.log('Server running... on port', port));
