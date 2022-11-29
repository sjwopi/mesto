import './index.css';
import {initialCards} from '../utils/constans.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js'

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
const popupEdit = document.querySelector('.popup-edit');
const formEdit = popupEdit.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-btn');
const popupAdd = document.querySelector('.popup-add');
const formAdd = popupAdd.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-btn');

const formElementEdit = popupEdit.querySelector('.popup-edit__form');
const nameInputEdit = formElementEdit.querySelector('.popup-edit__input-name');
const descriptionInputEdit = formElementEdit.querySelector('.popup-edit__input-description');

const section = new Section(
  {renderer: (item) => {
    const card = createCard(item);
    section.addItem(card);}},
  '.elements__list');
section.renderItems(initialCards);

const popupWithImage = new PopupWithImage('.popup-card');
popupWithImage.setEventListeners();
function handleOpenImage(name, link) {
  popupWithImage.open(name, link)
}
const validatorEdit = new FormValidator(selectorsValidate, formEdit);
validatorEdit.enableValidation();
const userInfo = new UserInfo({selectorUsername: '.profile__full-name', selectorDescription: '.profile__description'})
const popupEditProfile = new PopupWithForm('.popup-edit', (profileData) => {
    userInfo.setUserInfo({
      username: profileData.username,
      description: profileData.description
    });
    validatorEdit.enableValidation();
    popupEditProfile.close();});
popupEditProfile.setEventListeners();


const validatorAdd = new FormValidator(selectorsValidate, formAdd);
validatorAdd.enableValidation();
const popupAddCard = new PopupWithForm('.popup-add', (formData) => {
    section.addItem(createCard({
      name: formData.name,
      link: formData.url
    }));
    validatorAdd.enableValidation();
    popupAddCard.close();
  });
popupAddCard.setEventListeners();



function createCard(data) {
  const card = new Card(data, '#card', selectorsCard, handleOpenImage);
  const element = card.createCard();
  return element;
}
editButton.addEventListener('click', function () {
  popupEditProfile.open();
  const actualUserInfo = userInfo.getUserInfo();
  nameInputEdit.value = actualUserInfo.username;
  descriptionInputEdit.value = actualUserInfo.description;
});

addButton.addEventListener('click', function () {
  popupAddCard.open();
});
