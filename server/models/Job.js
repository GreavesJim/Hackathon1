import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
