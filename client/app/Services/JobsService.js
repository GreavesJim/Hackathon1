import store from "../store.js";

// @ts-ignore
let jackDatabase = axios.create({
  baseURL: "http://localhost:3000/api/jobs"
});

class JobsService {
  constructor() {}
  async getJobAsync() {
    let res = await jackDatabase.get("");
    let jobs = res.data;
    //  NOTE need to determine file path
    store.commit("jobs", jobs);
    this.getActiveJobAsync();
  }
  async getActiveJobAsync() {
    let max = store.State.jobs.length;
    let random = store.State.jobs[Math.floor(Math.random() * max)];
    store.commit("activeJob", random);
  }
}

const service = new JobsService();
export default service;
