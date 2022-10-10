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
const resetValidationErrors = (popup) => {
  const inputErrorList = Array.from(popup.querySelectorAll('.popup__input'));
  inputErrorList.forEach((inputError) => {
    inputError.classList.remove('popup__error_invalid');
    popup.querySelector(`.${inputError.name}-error`).textContent = '';
  })
}
const enableValidation = (obj) => {
  console.log(obj.formSelector)
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(obj, formElement);
  });
};
/* Если честно, мне кажется, я неправильно понял, что тут делать с обьектом, но ничего другого мне в голову не пришло */
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-form',
  inactiveButtonClass: 'popup__save-form_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_invalid'
});
