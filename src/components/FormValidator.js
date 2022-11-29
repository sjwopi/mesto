export default class FormValidator {
  constructor(selectorsValidate, form) {
    this._selectors = selectorsValidate;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._selectors.inputSelector));
    this._buttonSubmit = this._form.querySelector(this._selectors.submitButtonSelector);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._selectors.inputErrorClass);
    this._errorElement = this._form.querySelector(`.${inputElement.name}-error`);
    this._errorElement.classList.add(this._selectors.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }
  _hideInputError(inputElement) {
    inputElement.classList.remove(this._selectors.inputErrorClass);
    this._errorElement = this._form.querySelector(`.${inputElement.name}-error`);
    this._errorElement.classList.remove(this._selectors.errorClass);
    this._errorElement.textContent = '';
  }

  _toggleInputError(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
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
      inputElement.addEventListener('input', (evt) => {
        evt.preventDefault();
        this._toggleInputError(inputElement);
        this._toggleButtonState();
      })
    })
  }
  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
  resetError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}
