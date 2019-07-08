import View from "./View";

class DetailPage extends View {
  render(model, route) {
    const { parent } = this;

    this.clearPage();
    this.changePageTitle("Home Page");

    const view = parent.appendChild(document.createElement("div"));

    const titleEl = document.createElement("h1");
    titleEl.innerText = model.title;

    const contentEl = document.createElement("p");
    contentEl.innerText = model.content;

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "페이지 수정하러 가기";
    buttonEl.onclick = () => route("article:edit");

    view.appendChild(titleEl);
    view.appendChild(contentEl);
    view.appendChild(buttonEl);
  }
}

export default DetailPage;
