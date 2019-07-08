import View from "./View";

class EditPage extends View {
  render(model, route) {
    const { parent } = this;

    this.clearPage();
    this.changePageTitle("Edit Page");

    const view = parent.appendChild(document.createElement("div"));

    const titleEl = document.createElement("input");
    titleEl.setAttribute("class", "edit-title");
    titleEl.value = model.title;

    const contentEl = document.createElement("textarea");
    contentEl.setAttribute("class", "edit-content");
    contentEl.value = model.content;

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "수정 완료하기";
    buttonEl.onclick = () => {
      model.setTitle(titleEl.value);
      model.setContent(contentEl.value);
      route("article:detail");
    };

    view.appendChild(titleEl);
    view.appendChild(contentEl);
    view.appendChild(buttonEl);
  }
}

export default EditPage;
