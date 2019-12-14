import store from "../store.js";

// @ts-ignore
let jackDatabase = axios.create({
  baseURL: "http://localhost:3000/api/jobs",
});

class JobsService {
  constructor() {
  }
  async getJobAsync() {
    let res = await jackDatabase.get("");
    console.log("jobs from api", res);
    let jobs = res.data;
    //  NOTE need to determine file path
    store.commit("jobs", jobs);
    console.log("from jobs store", store.State.jobs);
    this.getActiveJobAsync()
  }
  async getActiveJobAsync() {

    let max = store.State.jobs.length
    let random = store.State.jobs[Math.floor(Math.random() * max)]
    console.log("from random", random);
    store.commit("activeJob", random)
    console.log("from activejob", store.State.activeJob);

  }
}

const service = new JobsService();
export default service;
