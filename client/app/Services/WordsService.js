import store from "../store.js";

// @ts-ignore
let _wordsApiRandom = axios.create({
  baseURL: "https://wordsapiv1.p.rapidapi.com/words/?random=true",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "159f8ae7dbmshcb77305ee28c85fp18d00fjsn0ebaae29dd4e"
  }
});
class WordsService {
  async getWord() {
    let res = await _wordsApiRandom.get();
    store.commit("word", res.data);
  }
}

const service = new WordsService();
export default service;
