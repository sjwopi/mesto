import './index.css';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfimation.js';
import UserInfo from '../components/UserInfo.js';

import {
  selectorsValidate, selectorsCard, editButton,
  formEdit, nameInputEdit, descriptionInputEdit,
  addButton, formAdd, buttonEditAvatar, avatar, formAvatar
} from '../utils/constans.js';

const api = new Api({ 
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54/',
    headers: {
  authorization: 'e73982ce-3140-4f09-8668-b08c6beaa106',
  'Content-Type': 'application/json'
}});
let userId;

const userInfo = new UserInfo({ selectorUsername: '.profile__full-name', selectorDescription: '.profile__description', selectorAvatar: '.profile__avatar' })

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    section.renderItems(initialCards);
  })
  .catch(err => console.error(err))

const section = new Section({
  renderer: (item) => {
    section.addItem(createCard(item));
  }
}, '.elements__list');

const popupWithImage = new PopupWithImage('.popup-card');
popupWithImage.setEventListeners();
const validatorEdit = new FormValidator(selectorsValidate, formEdit);
validatorEdit.enableValidation();

const popupEditProfile = new PopupWithForm('.popup-edit', (profileData) => {
  popupEditProfile.loading(true);
  api.editUserInfo(profileData)
    .then((profileData) => {
      userInfo.setUserInfo(profileData);
      popupEditProfile.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      popupEditProfile.loading(false);
    });
});
popupEditProfile.setEventListeners();

const validatorAdd = new FormValidator(selectorsValidate, formAdd);
validatorAdd.enableValidation();

const popupAddCard = new PopupWithForm('.popup-add', (formData) => {
  popupAddCard.loading(true);
  api.createCard(formData)
    .then((formData) => {
      section.addItem(createCard(formData), true);
      popupAddCard.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      popupAddCard.loading(false);
    });
});
popupAddCard.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation('.popup-delete');
popupDeleteCard.setEventListeners();

function createCard(data) {
  const card = new Card({
    data: data,
    userId: userId,
    selectorTemplate: '#card',
    selectorsCard: selectorsCard,
    handleOpenImage: (name, link) => {
      popupWithImage.open(name, link)
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch(err => console.error(err))
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch(err => console.error(err))
    },
    handleDelete: (cardId) => {
      popupDeleteCard.open();
      popupDeleteCard.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            popupDeleteCard.close();
            card.deletePhoto();
          })
          .catch(err => console.error(err))
      });
    }
  });
  const element = card.createCard();
  return element;
}
const validatorAvatar = new FormValidator(selectorsValidate, formAvatar);
validatorAvatar.enableValidation();

const popupEditAvatar = new PopupWithForm('.popup-avatar', (data) => {
  popupEditAvatar.loading(true);
  api.editAvatar(data)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupEditAvatar.close();
    })
    .catch(err => console.error(err))
    .finally(() => {
      popupEditAvatar.loading(false);
    });
}
);
popupEditAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  validatorAvatar.resetValidation();
  popupEditAvatar.open();
});
editButton.addEventListener('click', function () {
  validatorEdit.resetValidation();
  popupEditProfile.open();
  const actualUserInfo = userInfo.getUserInfo();
  nameInputEdit.value = actualUserInfo.username;
  descriptionInputEdit.value = actualUserInfo.description;
});

addButton.addEventListener('click', function () {
  validatorAdd.resetValidation();
  popupAddCard.open();
});


