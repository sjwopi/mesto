export default class Section {
  constructor( { renderer }, selector ) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }
  addItem(item) {
    this._container.prepend(item);
  }
  renderItems(cards) {
    cards.forEach((item) => this._renderer(item))
  }
}
