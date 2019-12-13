import store from "../store.js";

let jackDatabase = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 3000
});

class PostsService {
  //delete function
  async deletePostAsync(postId) {
    jackDatabase.delete(`${postId}`);
  }
}

const service = new PostsService();
export default service;
