/* export default class FormValidator {
  constructor(data, selectors) {
    this._inputElement = true;
  }
  _hasInvalidInput() {
    return this._inputList.some((this._inputElement) => {
      return !inputElement.validity.valid;
    });
  }
} */



/* Проверка валидности инпутов */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
/* Изменение состояния кнопки отправки формы */
const toggleButtonState = (obj, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};
/* Спаны с ошибкой */
const showInputError = (obj, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (obj, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
};
/* Проверка валидности инпутов + вызовы ошибок*/
const checkInputValidity = (obj, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(obj, formElement, inputElement);
  } else {
    hideInputError(obj, formElement, inputElement);
  }
};
const setEventListeners = (obj, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(obj, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(obj, formElement, inputElement);
      toggleButtonState(obj, inputList, buttonElement);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(obj, formElement);
  });
};
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-form',
  inactiveButtonClass: 'popup__save-form_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_invalid'
});
