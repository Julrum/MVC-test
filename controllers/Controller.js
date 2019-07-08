import Observer from "../common/Observer";

function isDomNode(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}
//DOM 계층 구조에서 나온다. DOM 노드이면 True를 반환한다.

class Controller extends Observer {
  constructor(parent) {
    super(); //부모 오브젝트 함수를 호출하기 위해 사용
    if (!isDomNode(parent)) throw Error("parent가 DomNode가 아닙니다.");
    this.parent = parent;
  }

  notify() {
    this.render(); //template method pattern, render()는 자식인 ArticleController에서 나왔다.
  }
}

export default Controller;
//모듈에서 함수, 객체, 원시 값을 내보낼 때 사용
