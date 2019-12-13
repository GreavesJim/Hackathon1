import GiphyService from "../Services/GiphysService.js";
import store from "../store.js";
import Giphy from "../Models/Giphy.js";

//Private

let template = "";
let giphy = store.State.giphy;
console.log(giphy);
document.getElementById(
  "play-giphy"
).innerHTML = template += `<video autoplay loop src="${this.data.data.image_mp4_url}"></video>`;

// TODO put connection point in and create template

// Public
export default class GiphyController {
  constructor() {
    console.log("hey from Controller", store.State.activeGiphy);
    GiphyService.connectGiphy();
  }

  async startGiphy() {
    try {
      await GiphyService.startGiphy();
    } catch (error) {
      console.error(error);
    }
  }
}
