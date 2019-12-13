export default class Post {
  constructor(data) {
    this.input = data.input;
    this.name = data.name;
  }

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
                <p class="text-danger m-0 pl-3">${this.name}</p>
                <p class="m-0 pl-3">
                  ${this.input}
                </p>
                <button
                  class="btn btn-primary"
                  onclick="app.postsController.editPostAsync()"
                >
                  edit
                </button>
                <button
                  class="btn btn-danger"
                  onclick="app.postsController.deletePostAsync()"
                >
                  delete
                </button>
            </div>
        </div>
        `;
  }
}
