import mongoose, { Schema } from "mongoose";
const ObjectId = Schema.ObjectId;

const TaskSchema = new Schema({
  id: ObjectId,
  title: String,
  content: String,
});

export default mongoose.model("Task", TaskSchema);
