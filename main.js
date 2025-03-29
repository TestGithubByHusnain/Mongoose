// import mongoose from "mongoose";
// import express from "express";
// import { Todo } from "./models/Todo.js";

// let conn = await mongoose.connect("mongodb://localhost:27017/todo");
// const app = express();
// const port = 3000;
// app.get("/", (req, res) => {
//   const todo = new Todo({
//     title: "Hey firts todo",
//     desc: "Description of this todo",
//     isDone: false,
//   })
//   todo.save();
//   res.send("Hello world");
// });
// app.listen(port, () => {
//   console.log(`Server is listening on port${port}`);
// });


import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

const app = express();
const port = process.env.PORT || 3000; // Ensures dynamic port assignment

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo"); // Removed deprecated options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

app.get("/", async (req, res) => {
  try {
    const todo = new Todo({
      title: "Hey first todo",
      desc: "Description of this todo",
      isDone: false,
    });

    await todo.save();
    res.send("Todo saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving todo");
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
