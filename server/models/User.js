import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true, unique: true, minlength: 5 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;
