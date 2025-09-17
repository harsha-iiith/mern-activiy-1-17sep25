import { Schema } from "mongoose";

const TaskSchema = new Schema({
  id: String,
  title: String,
  content: String,
});

