import WordsService from "../Services/WordsService.js";
import store from "../store.js";

function _drawWords() {
  let template1 = ''
  let template2 = ''
  let myWord = store.State.word.word
  if (store.State.word.results) {
    let myDef = store.State.word.results[0].definition
    document.getElementById("random-word").innerHTML = template1 += `${myWord}`
    document.getElementById("definition").innerHTML = template2 += `${myWord}: ${myDef}`
  } else {
    document.getElementById("random-word").innerHTML = template1 += `${myWord}`
  }
}

export default class WordsController {
  constructor() {
    store.subscribe("word", _drawWords)
    this.getWord()
  }
  async getWord() {
    try {
      await WordsService.getWord()
    } catch (error) {
      console.error(error);
    }
  }

}