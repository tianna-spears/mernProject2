require("dotenv").config();

const express = require("express");
// const mongoose = require('mongoose')
const cors = require("cors");
const PORT = 5000 || process.env.PORT;
const connectDB = require('./database/connectDB')

// create server
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.post("add", (req, res) => {
  const task = req.body.task;
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
  connectDB()
});
