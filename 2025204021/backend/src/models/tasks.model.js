import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  id: String,
  title: String,
  content: String,
});

export default mongoose.model("Task", TaskSchema);
