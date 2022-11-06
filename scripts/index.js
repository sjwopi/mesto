import {initialCards} from './constans.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const selectorsCard = {
  card: '.elements__list-item',
  img: '.element__img',
  text: '.element__text',
  like: '.element__like',
  deleteBtn: '.element__delete-btn',
  popupPhoto: '.popup-card',
  popupPhotoImg: '.popup-card__img',
  popupPhotoText: '.popup-card__text',
  popupPhotoCloseBtn: '.popup-card__close-btn'
};
const selectorsValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-form',
  inactiveButtonClass: 'popup__save-form_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_invalid'
};

const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-btn');
const addButton = content.querySelector('.profile__add-btn');
const lastName = content.querySelector('.profile__full-name');
const lastDescription = content.querySelector('.profile__description');

const popupEditProfile = document.querySelector('.popup-edit');
const closeButtonEdit = popupEditProfile.querySelector('.popup-edit__close-btn');
const formElementEdit = popupEditProfile.querySelector('.popup-edit__form');
const nameInputEdit = formElementEdit.querySelector('.popup-edit__input-name');
const jobInputEdit = formElementEdit.querySelector('.popup-edit__input-description');
const formEdit = popupEditProfile.querySelector('.popup__form');

const popupAddCard = document.querySelector('.popup-add');
const closeButtonAdd = popupAddCard.querySelector('.popup-add__close-btn');
const formElementAdd = popupAddCard.querySelector('.popup-add__form');
const nameInputAdd = formElementAdd.querySelector('.popup-add__input-name');
const linkInputAdd = formElementAdd.querySelector('.popup-add__input-link');
const formAdd = popupAddCard.querySelector('.popup__form');

const cardTemplate = document.querySelector('#card').content;
const elementsList = document.querySelector('.elements__list');


const popups = Array.from(document.querySelectorAll('.popup'))

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', setListenerForPopupCloseByEsc);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', setListenerForPopupCloseByEsc);
}

function setListenerForPopupCloseByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}
/* Открытиепопапа РЕДАКТИРОВАНИЯ ПРОФИЛЯ */
function openPopupEditProfile() {
  validatorEdit.resetError();
  nameInputEdit.value = lastName.textContent;
  jobInputEdit.value = lastDescription.textContent;
  openPopup(popupEditProfile);
}
/* Изенение информации в профиле */
function submitEditProfileForm(evt) {
  evt.preventDefault();
  lastName.textContent = nameInputEdit.value;
  lastDescription.textContent = jobInputEdit.value;
  closePopup(popupEditProfile);
}
/* Открытие попапа ДОБАВЛЕНИЯ ПУБЛИКАЦИИ*/
function openPopupAddCard() {
  validatorAdd.resetError();
  openPopup(popupAddCard);
}
/* Открытие публикации */
function handleOpenImage(name, link) {
  this._popupPhotoImg.src = link;
  this._popupPhotoText.textContent = name;
  openPopup(this._popupPhoto);
}
function createCard(data) {
  const card = new Card(data, cardTemplate, selectorsCard, handleOpenImage);
  const element = card.createCard();
  return element;
}
/* Добавление публикации на сайт */
function addNewPhoto() {
  const name = nameInputAdd.value;
  const link = linkInputAdd.value;
  const cardItem = createCard({ name, link });
  elementsList.prepend(cardItem);
}
/* Отправка публикации*/
function submitAddCardForm(evt) {
  evt.preventDefault();
  addNewPhoto();
  closePopup(popupAddCard);
}

editButton.addEventListener('click', openPopupEditProfile);
closeButtonEdit.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup(popupEditProfile);
});
formElementEdit.addEventListener('submit', submitEditProfileForm);

addButton.addEventListener('click', openPopupAddCard);
closeButtonAdd.addEventListener('click', () => { closePopup(popupAddCard); });
formElementAdd.addEventListener('submit', submitAddCardForm);

document.querySelector(selectorsCard.popupPhotoCloseBtn).addEventListener('click', () => closePopup(document.querySelector('.popup_opened')));

initialCards.forEach(function (item) {
  const card = createCard(item);
  elementsList.append(card);
});

popups.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target)
    }
  });
})

const validatorAdd = new FormValidator(selectorsValidate, formAdd);
validatorAdd.enableValidation();
const validatorEdit = new FormValidator(selectorsValidate, formEdit);
validatorEdit.enableValidation();


export { openPopup }