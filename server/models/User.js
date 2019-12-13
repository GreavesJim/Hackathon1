import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true, unique: true, minlength: 5 },
    contact: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;
