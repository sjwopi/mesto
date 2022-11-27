export default class Section {
  constructor( { items, renderer }, selector ) {
    this._items = items;
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

