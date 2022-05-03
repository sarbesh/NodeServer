const express = require("express"),
app = express(),
router = require('./api/route'),
invest = require('./api/investment'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

const {mongo_url} = require('./config');

mongoose.connect(mongo_url);

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

// routes
app.use((req, res, next) => {
  console.log(" request: ",req.url);
  res.header("content-type","application/json");
  next();
});

app.use(router);
app.use('/invest',invest);

module.exports = app,mongoose;