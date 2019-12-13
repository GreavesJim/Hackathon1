export default class Post {
  constructor(data) {
    this.title = data.title;
  }

  get Template() {
    return this.title;
  }
}
