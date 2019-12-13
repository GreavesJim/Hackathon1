import PostsController from "./Controllers/PostsController.js";
import WordsController from "./Controllers/WordsController.js";

class App {
  postsController = new PostsController();
  wordsController = new WordsController();
}

window["app"] = new App();
