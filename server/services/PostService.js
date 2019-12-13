import mongoose from "mongoose";
import Post from "../models/Post";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Post", Post);

class PostService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new ApiError("Invalid Id", 400)
    }
    return data;
  }
  async getPostByUserId(UserId) {
    return await _repository.find({ UserId })
  }
  async getPostByJobId(JobId) {
    return await _repository.find({ JobId })
  }
  async create(rawData) {
    return await _repository.create(rawData)
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, { new: true })
    if (!data) {
      throw new ApiError("Invalid Update Id", 400)
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id })
    if (!data) {
      throw new ApiError("Invalid Id", 400)
    }
  }
}

const postService = new PostService();
export default postService;
