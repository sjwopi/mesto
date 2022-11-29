import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhotoImg = this._popup.querySelector('.popup-card__img');
    this._popupPhotoText = this._popup.querySelector('.popup-card__text');
  }
  open(name, link) {
    this._popupPhotoText.textContent = name;
    this._popupPhotoImg.alt = name;
    this._popupPhotoImg.src = link;
    super.open();
  }
}