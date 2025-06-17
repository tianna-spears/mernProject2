require("dotenv").config();

const express = require("express");
// const mongoose = require('mongoose')
const cors = require("cors");
const PORT = 5000 || process.env.PORT;
const connectDB = require('./database/connectDB')
const TodoModel = require('./models/TodoModel')

// create server
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/home', (req, res) => {
    res.send('Home Page')
})

app.get('/get', async (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post("/add", async (req, res) => {
  const task = req.body.task;
  await TodoModel.create({
    task: task
  }).then(result => res.json(result))
  .catch(err => res.json(err))
});

// start server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}!`);
  await connectDB()
});
