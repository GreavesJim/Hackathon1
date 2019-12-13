import store from "../store.js"

// @ts-ignore
let _wordsApiRandom = axios.create({
  baseURL: "https://wordsapiv1.p.mashape.com/words?random=true"
})
// @ts-ignore
let _wordsApi = axios.create({
  baseURL: "https://wordsapiv1.p.mashape.com/words"
})

class WordsService {
  async getWord() {
    let res = await _wordsApiRandom.get()
    console.log("from word", res);
    store.commit("word", res.data)
  }
  async getDefinition() {
    let res = await _wordsApi.get(store.State.word.word)
    console.log("word", res);
    store.commit("definition", res.data.results)
  }
}

const service = new WordsService();
export default service;