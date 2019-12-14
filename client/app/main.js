import PostsController from "./Controllers/PostsController.js";
import WordsController from "./Controllers/WordsController.js";
import GiphysController from "./Controllers/GiphysController.js";
import JobsController from "./Controllers/JobsController.js"
class App {
  postsController = new PostsController();
  wordsController = new WordsController();
  giphysController = new GiphysController();
  jobsController = new JobsController()
}

window["app"] = new App();
