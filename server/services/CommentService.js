import mongoose from "mongoose";
import Comment from "../models/Comment";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Comment", Comment);

class CommentService {
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

const commentService = new CommentService();
export default commentService;
