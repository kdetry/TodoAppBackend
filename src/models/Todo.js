import mongoose from "mongoose"
import { TaskStatus } from './enums';

const Todo = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    deadline: {
      type: Date
    },
    category: {
      type: String
    },
    status: {
      type: Number,
      enum: Object.values(TaskStatus),
      default: 0
    },
    userId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Todo", Todo);
