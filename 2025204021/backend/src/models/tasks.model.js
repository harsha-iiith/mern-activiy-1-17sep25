import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: String,
  content: String,
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for id to match test expectations
TaskSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised
TaskSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.model("Task", TaskSchema);
