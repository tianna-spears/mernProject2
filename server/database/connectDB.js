require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    mongoose.connect(process.env.MONGO_DB);
    console.log("Database connected!");
  } catch (err) {
    console.log(err, "Error connecting to database.");
  }
};

module.exports = connectDB;
