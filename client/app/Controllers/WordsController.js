import WordsService from "../Services/WordsService.js";
import store from "../store.js";

function _drawWords() {
  let template = ''
  let myWord = store.State.word.word
  document.getElementById("random-word").innerHTML = template += `${myWord}`
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
  async getDefinition(word) {

  }
}