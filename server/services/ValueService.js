import mongoose from "mongoose";
import Post from "../models/Post";

const _repository = mongoose.model("Value", Value);

class ValueService {
  async getAll() {
    return await _repository.find({});
  }
}

const valueService = new ValueService();
export default valueService;
