import WordsService from "../Services/WordsService.js";
import store from "../store.js";

function _drawWords() {
  let template = ''
  let myWord = store.State.word
}

export default class WordsController {
  constructor() {
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