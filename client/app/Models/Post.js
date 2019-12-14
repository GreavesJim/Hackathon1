export default class Post {
  constructor(data) {
    this.article = data.article;
    this.username = data.username;
    this.title = data.title;
    this._id = data._id;
    this.word = data.word
  }
  // NOTE title is the random word the user must use; may have to refactor how to populate this

  get Template() {
    return `
        <div class="media pb-3 pr-3 pl-3">
            <div class="d-flex flex-column text-center">
            <i class="fas fa-caret-up" 
                onclick="app.postsController.upvote()"></i>
                <p class="m-0">##</p>
            <i
                class="fas fa-caret-down"
                onclick="app.postsController.downvote()"
                ></i>
            </div>
            <div class="media-body">
                <div class="m-0 pl-3">
                    <span>${this.title}</span>
                    <p class="text-primary m-0">${this.word}</p>
                    <p class="text-danger m-0">${this.username}</p>
                </div>
                <p class="m-0 pl-3">
                  ${this.article}
                </p>
                <button
                  class="btn btn-primary"
                  onclick="app.postsController.editPostAsync('${this._id}')"
                >
                  edit
                </button>
                <button
                  class="btn btn-danger"
                  onclick="app.postsController.deletePostAsync('${this._id}')"
                >
                  delete
                </button>
            </div>
        </div>
        `;
  }
}
