import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
let jackDatabase = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000
});

class PostsService {
  constructor() {
    this.getPostsAsync();
  }
  async getPostsAsync() {
    let res = await jackDatabase.get("posts");
    let posts = res.data.map(post => new Post(post));
    store.commit("posts", posts);
    // NOTE need to determine commit path
  }
  async addPostAsync(newPost) {
    let res = await jackDatabase.post("posts", newPost);
    this.getPostsAsync();
  }

  async editPostAsync(postId, change) {
    debugger;
    let editPost = store.State.posts.find(post => postId == post._id);
    await jackDatabase.put("posts/" + `${postId}`, change);
    this.getPostsAsync();
  }

  async deletePostAsync(postId) {
    let deletePost = store.State.posts.find(post => postId == post._id);
    await jackDatabase.delete("posts/" + `${postId}`);
    this.getPostsAsync();
  }
}

const service = new PostsService();
export default service;
