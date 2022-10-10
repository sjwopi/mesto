/* Проверка валидности инпутов */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
/* Изменение состояния кнопки отправки формы */
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-form_disabled');
  } else {
    buttonElement.classList.remove('popup__save-form_disabled');
  }
};
/* Спаны с ошибкой */
const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_invalid');
  if (inputElement.validationMessage === "Заполните это поле.") { errorElement.textContent = "Вы пропустили это поле." }
  else if (inputElement.validationMessage === "Введите URL-адрес.") { errorElement.textContent = "Введите адрес сайта." }
  else { errorElement.textContent = inputElement.validationMessage; }
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_invalid');
  errorElement.textContent = '';
};
/* Проверка валидности инпутов + вызовы ошибок*/
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-form');
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const resetValidationErrors = (popup) => {
  const inputErrorList = Array.from(popup.querySelectorAll('.popup__input'));
  inputErrorList.forEach((inputError) => {
    inputError.classList.remove('popup__input_invalid');
    popup.querySelector(`.${inputError.name}-error`).textContent = '';
  })
}

const enableValidation = (form) => {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  setEventListeners(form);
};
const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((formElement) => {
  enableValidation(formElement);
})