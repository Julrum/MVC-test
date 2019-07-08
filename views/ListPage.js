import View from "./View";

const trFactory = () => document.createElement("tr");
const tdFactory = () => document.createElement("td");

class ListPage extends View {
  render(model, route) {
    const { parent } = this;

    this.clearPage();
    this.changePageTitle("List Page");

    const view = parent.appendChild(document.createElement("div"));

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // thead 생성
    const theadTr = trFactory();
    const td1 = tdFactory();
    td1.innerHTML = "ID";
    const td2 = tdFactory();
    td2.innerHTML = "Title";
    theadTr.appendChild(td1);
    theadTr.appendChild(td2);

    // tbody 생성
    model.forEach((article, index) => {
      const td1 = tdFactory();
      td1.innerHTML = index + 1;

      const td2 = tdFactory();
      td2.innerHTML = article.title;
      td2.onclick = () => {
        model.now = article;
        route("article:detail");
      };

      const tr = trFactory();
      tr.appendChild(td1);
      tr.appendChild(td2);

      tbody.appendChild(tr);
    });

    view.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    thead.appendChild(theadTr);
  }
}

export default ListPage;
