import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Post = new Schema(
  {
    article: { type: String, required: true },
    username: { type: String, required: true },
    title: { type: String, required: true },
    jobId: { type: ObjectId, ref: "Job", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;
