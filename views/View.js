class View {
  constructor(parent) {
    this.parent = parent;
  }

  clearPage() {
    document.getElementById("app").innerHTML = "";
  }

  changePageTitle(newTitle) {
    document.getElementById("pageTitle").innerHTML = newTitle;
  }

  render() {
    throw Error("Method is not implemented");
  }
}

export default View;
