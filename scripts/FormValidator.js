export default class FormValidator {
  constructor(selectorsValidate, form) {
    this._selectors = selectorsValidate;
    this._form = form;
    this._inputList = this._form.querySelectorAll(this._selectors.inputSelector);
    this._buttonSubmit = this._form.querySelector(this._selectors.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }
  _showInputError() {
    this._inputElement.classList.add(this._selectors.inputErrorClass);
    this._errorElement.classList.add(this._selectors.errorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
  }
  _hideInputError() {
    this._inputElement.classList.remove(this._selectors.inputErrorClass);
    this._errorElement.classList.remove(this._selectors.errorClass);
    this._errorElement.textContent = '';
  }

  _toggleInputError() {
    this._errorElement = this._form.querySelector(`.${this._inputElement.name}-error`);
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  _toggleButtonState() {
    if (!this._form.checkValidity()) {
      this._buttonSubmit.classList.add(this._selectors.inactiveButtonClass);
      this._buttonSubmit.disabled = true;
    } else {
      this._buttonSubmit.classList.remove(this._selectors.inactiveButtonClass);
      this._buttonSubmit.disabled = false;
    }
  }
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      this._inputElement.addEventListener('input', (evt) => {
        evt.preventDefault();
        this._toggleInputError();
        this._toggleButtonState();
      })
    })
  }
  resetValidation() {
    this._toggleButtonState();
  }
}
