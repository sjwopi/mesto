import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitBtn = this._popup.querySelector('.popup__save-form');
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
  close() {
    this._popupForm.reset();
    super.close();
  }
  loading(isLoading) {
    if (isLoading) {
      this._submitBtn.value = 'Сохранение...'
    } else {
      this._submitBtn.value = "Coздать";
    }
  }
}