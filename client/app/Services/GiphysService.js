import store from "../store.js";
import Giphy from "../Models/Giphy.js";

// @ts-ignore
let _giphyAPI = axios.create({
  baseURL:
    "https://api.giphy.com/v1/gifs/random?api_key=bTA0RtS9RXmQa6KaxGJ8mGNP4ZWXZB5r&tag=&rating=PG-13",
  timeout: 3000
});

class GiphyService {
  async connectGiphy() {
    let res = await _giphyAPI.get("");
    let data = new Giphy(res.data.data);
    store.commit("giphy", data);
    console.log(data);
    console.log(store.State.giphy);
  }

  async startGiphy() {
    let res = store.State.giphy;
    console.log("Hello from giphy service", res);
    store.commit("activeGiphy", res);
    console.log("Giphy from the store", store.State.activeGiphy);
  }
}

const service = new GiphyService();
export default service;
