import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submit = this._popup.querySelector('.popup-delete__btn');
  }

  submitCallback(func) {
    this._handleSubmit = func;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submit.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}