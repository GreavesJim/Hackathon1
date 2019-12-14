export default class Giphy {
  constructor(data) {
    this.giph = data.embed_url;
  }

  get Template() {
    return `
    <iframe src="${this.giph}"></iframe
    `;
  }
}
