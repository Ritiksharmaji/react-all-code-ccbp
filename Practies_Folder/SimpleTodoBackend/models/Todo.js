// import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   completed: { type: Boolean, default: false },
// }, { timestamps: true });

// export default mongoose.model("Todo", todoSchema);

import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    text: String,
    completed: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
