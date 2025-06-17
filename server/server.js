require("dotenv").config();

const express = require("express");
// const mongoose = require('mongoose')
const cors = require("cors");
const PORT = 5000 || process.env.PORT;
const connectDB = require("./database/connectDB");
const TodoModel = require("./models/TodoModel");

// create server
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/get", async (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", async (req, res) => {
  const { task } = req.body;
  await TodoModel.create({
    task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task, done } = req.body;

    const updatedFields = {};
    if (task !== undefined) updatedFields.task = task;
    if (done !== undefined) updatedFields.done = done;

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.json(updatedTodo);
  } catch (err) {
    console.error("Update Error:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await TodoModel.findByIdAndDelete({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// start server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}!`);
  await connectDB();
});
