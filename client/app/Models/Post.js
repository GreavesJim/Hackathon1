export default class Post {
  constructor(data) {
    this.input = data.input;
    this.name = data.name;
    this.title = data.title;
    this._id = data._id;
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
                    <p class="text-danger m-0">${this.name}</p>
                </div>
                <p class="m-0 pl-3">
                  ${this.input}
                </p>
                <button
                  class="btn btn-primary"
                  onclick="app.postsController.editPostAsync(${this._id})"
                >
                  edit
                </button>
                <button
                  class="btn btn-danger"
                  onclick="app.postsController.deletePostAsync(${this._id})"
                >
                  delete
                </button>
            </div>
        </div>
        `;
  }
}
