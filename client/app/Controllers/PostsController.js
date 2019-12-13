import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _drawPosts() {
  let template = "";
  let posts = store.State.posts;
  posts.forEach(p => (template += p.Template));
  console.log(posts);
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _drawPosts);
    _drawPosts();
  }

  async deletePostAsync(postId) {
    PostsService.deletePostAsync(postId);
  }
}
