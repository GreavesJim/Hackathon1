import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema(
  {
    article: { type: String, required: true },
    postId: { type: ObjectId, ref: "Post", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;