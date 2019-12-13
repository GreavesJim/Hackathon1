import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _drawPosts() {
  let template = "";
  let posts = store.State.posts;
  posts.forEach(p => (template += p.Template));
  console.log(posts);
  document.getElementById("posts").innerHTML = template;
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _drawPosts);
    _drawPosts();
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
      name: formData.name.value,
      input: formData.input.value
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
      await PostsService.editPostAsync(postId);
    } catch (error) {
      console.error(error);
    }
  }
  async deletePostAsync(postId) {
    if (!window.confirm("Delete post?")) {
      return;
    }
    await PostsService.deletePostAsync(postId);
    try {
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
