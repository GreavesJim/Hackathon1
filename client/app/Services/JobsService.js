import store from "../store.js";

// @ts-ignore
let jackDatabase = axios.create({
  baseURL: "http://localhost:3000/api/jobs",
  timeout: 3000
});

class JobsService {
  async getJobAsync() {
    let res = await jackDatabase.get();
    console.log(res);
    let job = res.name;
    //  NOTE need to determine file path
    store.commit("job", job);
  }
}

const service = new JobsService();
export default service;
