import Model from "./Model";

class Article extends Model {
  constructor(title, content) {
    super();
    this.title = title;
    this.content = content;
  }

  setTitle(title) {
    this.title = title;
    this.notifyObservers();
  }

  setContent(content) {
    this.content = content;
    this.notifyObservers();
  }
}

class Articles extends Model {
  constructor() {
    super();
    this.list = [
      new Article("Hey Dude 1", "This is content of the page"),
      new Article("Hey Dude 2", "This is content of the page"),
      new Article("Hey Dude 3", "This is content of the page"),
      new Article("Hey Dude 4", "This is content of the page"),
      new Article("Hey Dude 5", "This is content of the page")
    ];
    this.now = this.list[0];
  }
}

export default new Articles();
