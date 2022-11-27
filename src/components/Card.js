export default class Card {
  constructor(data, template, selectorsCard, handleOpenImage) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._selectors = selectorsCard;
    this._popupPhoto = document.querySelector(this._selectors.popupPhoto);
    this._popupPhotoImg = this._popupPhoto.querySelector(this._selectors.popupPhotoImg);
    this._popupPhotoText = this._popupPhoto.querySelector(this._selectors.popupPhotoText)
    this._handleOpenImage = handleOpenImage;
  }
  _getTemplate() {
    const cardElement = this._template.querySelector(this._selectors.card).cloneNode(true);
    this._cardTitle = cardElement.querySelector(this._selectors.text);
    this._cardImage = cardElement.querySelector(this._selectors.img);
    return cardElement;
  }
  _activateLike() {
    this._buttonLike.classList.toggle('element__like_active');
  }
  _deletePhoto() {
    this._element.remove();
  }
  _setCardEventListeners() {
    this._buttonDelete.addEventListener('click', () => this._deletePhoto());
    this._buttonLike.addEventListener('click', () => this._activateLike());
    this._element.querySelector(this._selectors.img).addEventListener('click', () => this._handleOpenImage(this._name, this._link));
  }
  createCard() {
    this._element = this._getTemplate();

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._buttonLike = this._element.querySelector(this._selectors.like);
    this._buttonDelete = this._element.querySelector(this._selectors.deleteBtn);

    this._setCardEventListeners();
    return this._element;
  }
}
