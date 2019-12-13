import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
let jackDatabase = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 3000
});

class PostsService {
  async getPostsAsync() {
    let res = await jackDatabase.get();
    let posts = res.data.map(post => new Post(post));
    store.commit("posts", posts);
    // NOTE need to determine commit path
  }
  async addPostAsync(newPost) {
    let res = await jackDatabase.post("", newPost);
    console.log(newPost);
    this.getPostsAsync;
  }

  async editPostAsync(postId) {
    let editPost = store.State.posts.find(post => postId == post._id);
    console.log("post to be edited", editPost);
    await jackDatabase.put(`${postId}`);
    this.getPostsAsync;
  }

  async deletePostAsync(postId) {
    let deletePost = store.State.posts.find(post => postId == post._id);
    console.log("post to delete", deletePost);
    await jackDatabase.delete(`${postId}`);
    this.getPostsAsync;
  }
}

const service = new PostsService();
export default service;
