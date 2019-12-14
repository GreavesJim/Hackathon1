import JobsService from "../Services/JobsService.js";
import store from "../store.js";

//Private
function _drawJob() {
  let job = store.State.job;
  console.log(job);
  document.getElementById("job-title").innerHTML = `${job}`;
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("job", _drawJob);
    _drawJob();
  }

  async getJobAsync() {
    try {
      await JobsService.getJobAsync();
    } catch (error) {
      console.error(error);
    }
  }
}
