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

const editButton = document.querySelector('.profile__edit-btn');
const formEdit = document.forms['edit-form'];
const nameInputEdit = formEdit.querySelector('.popup-edit__input-name');
const descriptionInputEdit = formEdit.querySelector('.popup-edit__input-description');

const addButton = document.querySelector('.profile__add-btn');
const formAdd = document.forms['add-form'];

const buttonEditAvatar = document.querySelector('.profile__avatar-btn');
const avatar = document.querySelector('.profile__avatar');
const formAvatar = document.forms['avatar-form'];

export { selectorsValidate, selectorsCard, editButton,
  formEdit, nameInputEdit, descriptionInputEdit,
  addButton, formAdd, buttonEditAvatar, avatar, formAvatar }


