import store from "../store.js";

let _giphyAPI = axios.create({
  baseURL:
    "https://api.giphy.com/v1/gifs/random?api_key=bTA0RtS9RXmQa6KaxGJ8mGNP4ZWXZB5r&tag=&rating=PG-13",
  timeout: 3000
});

class GiphyService {
  async connectGiphy() {
    let res = await _giphyAPI.get("");
    store.commit("giphy", res.data.data);
    console.log(res.data);
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
