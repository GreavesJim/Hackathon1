import store from "../store.js"

// @ts-ignore
let _wordsApiRandom = axios.create({
  baseURL: "https://wordsapiv1.p.rapidapi.com/words/?random=true",
  headers: {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "159f8ae7dbmshcb77305ee28c85fp18d00fjsn0ebaae29dd4e"
	}
})
// @ts-ignore
let _wordsApi = axios.create({
  baseURL: "https://wordsapiv1.p.rapidapi.com/words",
  headers: {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "159f8ae7dbmshcb77305ee28c85fp18d00fjsn0ebaae29dd4e"
	}
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