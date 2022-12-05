import './index.css';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfimation.js';
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
const avatar = document.querySelector('.profile__avatar');
const buttonEditAvatar = document.querySelector('.profile__avatar-btn');
const popupAvatar = document.querySelector('.popup-avatar');
const formAvatar = popupAvatar.querySelector('.popup__form');

const formElementEdit = popupEdit.querySelector('.popup-edit__form');
const nameInputEdit = formElementEdit.querySelector('.popup-edit__input-name');
const descriptionInputEdit = formElementEdit.querySelector('.popup-edit__input-description');

const api = new Api();
let userId;

const userInfo = new UserInfo({ selectorUsername: '.profile__full-name', selectorDescription: '.profile__description', selectorAvatar: '.profile__avatar' })

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo({ username: userData.name, description: userData.about, avatar: userData.avatar });
    userId = userData._id;
    section.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const section = new Section({
  renderer: (item) => {
    section.addItem(createCard(item));
  }
},
  '.elements__list');

const popupWithImage = new PopupWithImage('.popup-card');
popupWithImage.setEventListeners();
const validatorEdit = new FormValidator(selectorsValidate, formEdit);
validatorEdit.enableValidation();

const popupEditProfile = new PopupWithForm('.popup-edit', (profileData) => {
  popupEditProfile.loading(true);
  api.editUserInfo(profileData)
    .then((profileData) => {
      userInfo.setUserInfo({ username: profileData.name, description: profileData.about, avatar: profileData.avatar });
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditProfile.close();
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
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupAddCard.close();
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
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        });
    },
    handleDelete: (cardId) => {
      popupDeleteCard.open();
      popupDeleteCard.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            popupDeleteCard.close();
            card.deletePhoto();
          });
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
      avatar.src = data.avatar;
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditAvatar.close();
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


