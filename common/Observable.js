import Observer from "../common/Observer";

class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    if (!(observer instanceof Observer)) throw Error("Observer가 아닙니다.");
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.notify());
  }
}

export default Observable;
