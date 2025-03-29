
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,  // ✅ Fixed typo
  desc: String,
  isDone: Boolean,
});

export const Todo = mongoose.model("Todo", TodoSchema);
