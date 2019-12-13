export default class Giphy {
  constructor(data) {
    this.title = data.title;
    this.id = data.id;
    this.giph = data.data.image_mp4_url;
  }

  get Template() {
    return;
  }
}
