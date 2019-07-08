import Controller from "./controllers/Controller";
import ArticleController from "./controllers/ArticleController";

class App {
  constructor() {
    //class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드
    this.routes = new Map();
    this.route = this.route.bind(this);
  }

  addController(path, controller) {
    if (!(controller instanceof Controller))
      throw Error("Controller가 아닙니다.");
    this.routes.set(path, controller);
  }

  route(nextPath) {
    const [path, action] = nextPath.split(":");
    const controller = this.routes.get(path);
    if (!controller) throw Error(`${path}에 대응하는 Controller가 없습니다.`);
    if (!controller[action])
      throw Error(`${nextPath}에 대응하는 Controller가 없습니다.`);
    controller[action]();
  }
}

const parent = document.getElementById("app");
const app = new App();
const articleController = new ArticleController(parent, app.route);
app.addController("article", articleController);
app.route("article:list");
