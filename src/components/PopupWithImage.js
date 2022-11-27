import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhotoImg = this._popup.querySelector('.popup-card__img');
    this._popupPhotoText = this._popup.querySelector('.popup-card__text');
  }
  open(item) {
    this._popupPhotoText.textContent = item.name;
    this._popupPhotoImg.alt = item.name;
    this._popupPhotoImg.src = item.link;
    super.open();
  }
}