import PostsController from "./Controllers/PostsController.js";

class App {
  postsController = new PostsController();
}

window["app"] = new App();
