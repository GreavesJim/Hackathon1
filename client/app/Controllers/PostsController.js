import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _drawPosts() {
  let template = "";
  let posts = store.State.posts;
  posts.forEach(p => (template += p.Template));
  document.getElementById("posts").innerHTML = template;
}

//Public
export default class PostsController {
  constructor() {
    _drawPosts();
    store.subscribe("posts", _drawPosts);
  }

  async getPostsAsync() {
    try {
      await PostsService.getPostsAsync();
    } catch (error) {
      console.error(error);
    }
  }
  async addPostAsync(event) {
    event.preventDefault();
    let formData = event.target;
    let newPost = {
      jobId: store.State.activeJob._id,
      username: formData.username.value,
      article: formData.article.value,
      title: store.State.activeJob.name
    };
    formData.reset();
    try {
      await PostsService.addPostAsync(newPost);
    } catch (error) {
      console.error(error);
    }
  }

  async editPostAsync(postId) {
    try {
      let change = {
        article: prompt("Change your post.")
      };
      await PostsService.editPostAsync(postId, change);
    } catch (error) {
      console.error(error);
    }
  }
  async deletePostAsync(postId) {
    if (!window.confirm("Delete post?")) {
      return;
    }
    try {
      await PostsService.deletePostAsync(postId);
    } catch (error) {
      console.error(error);
    }
    // swal({
    //   title: "Are you sure?",
    //   text:
    //     "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true
    // }).then(willDelete => {
    //   if (willDelete) {

    //     swal("Poof! Your imaginary file has been deleted!", {
    //       icon: "success"
    //     });
    //   } else {
    //     swal("Your imaginary file is safe!");
    //   }
    // });
  }
}
