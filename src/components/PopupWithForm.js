import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(inputItem => {
      this._inputValues[inputItem.name] = inputItem.value;
    });
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault()
      this._submitForm(this._getInputValues());
    })
  }
  _resetInputErrors(items) {
    let errors = Object.keys(items)
    errors.forEach((item) => {
      this._popupForm.querySelector(`.${item}-error`).textContent = '';
    })
  }
  close() {
    this._resetInputErrors(this._getInputValues());
    super.close();
  }
}