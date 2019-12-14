import GiphysController from "./Controllers/GiphysController.js";

class App {
  giphysController = new GiphysController();
}

window["app"] = new App();
