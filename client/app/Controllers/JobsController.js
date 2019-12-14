import JobsService from "../Services/JobsService.js";
import store from "../store.js";

//Private
function _drawJob() {
  let job = store.State.activeJob.name;
  document.getElementById("job-title").innerHTML = `${job}`;
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("activeJob", _drawJob);

    this.getJobAsync();
  }

  async getJobAsync() {
    try {
      await JobsService.getJobAsync();
    } catch (error) {
      console.error(error);
    }
  }
  async getActiveJobAsync() {
    try {
      await JobsService.getActiveJobAsync();
    } catch (error) {
      console.error(error);
    }
  }
}
