import PostsController from "./Controllers/PostsController.js";
import WordsController from "./Controllers/WordsController.js";
import GiphysController from "./Controllers/GiphysController.js";
class App {
  postsController = new PostsController();
  wordsController = new WordsController();
  giphysController = new GiphysController();
}

window["app"] = new App();
