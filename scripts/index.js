const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-btn');
const addButton = content.querySelector('.profile__add-btn');
const lastName = content.querySelector('.profile__full-name');
const lastDescription = content.querySelector('.profile__description');

const popupEditProfile = document.querySelector('.popup-edit');
const popupContainerEdit = popupEditProfile.querySelector('.popup__container');
const closeButtonEdit = popupEditProfile.querySelector('.popup-edit__close-btn');
const formElementEdit = popupEditProfile.querySelector('.popup-edit__form');
const nameInputEdit = formElementEdit.querySelector('.popup-edit__input-name');
const jobInputEdit = formElementEdit.querySelector('.popup-edit__input-description');

const popupAddCard = document.querySelector('.popup-add');
const popupContainerAdd = popupAddCard.querySelector('.popup__container');
const closeButtonAdd = popupAddCard.querySelector('.popup-add__close-btn');
const formElementAdd = popupAddCard.querySelector('.popup-add__form');
const nameInputAdd = formElementAdd.querySelector('.popup-add__input-name');
const linkInputAdd = formElementAdd.querySelector('.popup-add__input-link');

const popupPhoto = document.querySelector('.popup-card');
const popupPhotoCloseBtn = popupPhoto.querySelector('.popup-card__close-btn');

const cardTemplate = document.querySelector('#card').content;
const elementsList = document.querySelector('.elements__list');

/* Закрытие попапа по нажатию вне его границах */
const popupArray = Array.from(document.querySelectorAll('.popup'))
popupArray.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    item = evt.target;
    closePopup(item)
  });
  document.addEventListener('keydown', function(evt) {
    if (evt.key = 'Escape') {closePopup(popup)}
  })
});

function activateLike(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('element__like_active');
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
/* Открытие и закрытие попапа РЕДАКТИРОВАНИЯ ПРОФИЛЯ */
function openPopupEditProfile() {
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
/* Открытие и закрытие попапа ДОБАВЛЕНИЯ ПУБЛИКАЦИИ*/
function openPopupAddCard() {
  nameInputAdd.value = '';
  linkInputAdd.value = '';
  openPopup(popupAddCard);
}
/* Считывалка событий на кнопках лайка и удаления */
function setCardEventListeners(cardItem) {
  cardItem.querySelector('.element__img').addEventListener('click', openPhoto);

  const likeButton = cardItem.querySelector('.element__like');
  likeButton.addEventListener('click', activateLike);

  const deleteButton = cardItem.querySelector('.element__delete-btn');
  deleteButton.addEventListener('click', deletePhoto);
}
/* Создание карточки */
function createCard(name, link) {
  const card = cardTemplate.querySelector('.elements__list-item').cloneNode(true);
  const cardImg = card.querySelector('.element__img');
  card.querySelector('.element__text').textContent = name;
  cardImg.src = link;
  cardImg.alt = name;
  setCardEventListeners(card);
  return card;
}
/* Добавление публикации на сайт */
function addNewPhoto() {
  const cardItem = createCard(nameInputAdd.value, linkInputAdd.value);
  elementsList.prepend(cardItem);
}
/* Отправка публикации*/
function submitAddCardForm(evt) {
  evt.preventDefault();
  addNewPhoto();
  closePopup(popupAddCard);
}
/* Открытие публикации */
function openPhoto(evt) {
  evt.preventDefault();
  openPopup(popupPhoto);
  const popupPhotoText = evt.target.parentElement.querySelector('.element__text').textContent;
  const popupPhotoImg = popupPhoto.querySelector('.popup-card__img');
  popupPhoto.querySelector('.popup-card__text').textContent = popupPhotoText;
  popupPhotoImg.alt = popupPhotoText;
  popupPhotoImg.src = evt.target.src;
}
/* Удаление публикации */
function deletePhoto(evt) {
  evt.preventDefault();
  let elementTarget = evt.target.closest('.elements__list-item');
  elementTarget.remove();
}

editButton.addEventListener('click', openPopupEditProfile);
closeButtonEdit.addEventListener('click', function () { closePopup(popupEditProfile); });
formElementEdit.addEventListener('submit', submitEditProfileForm);

addButton.addEventListener('click', openPopupAddCard);
closeButtonAdd.addEventListener('click', () => { closePopup(popupAddCard); });
formElementAdd.addEventListener('submit', submitAddCardForm);

popupPhotoCloseBtn.addEventListener('click', () => { closePopup(popupPhoto); });
initialCards.forEach(function (item) {
  const cardItem = createCard(item.name, item.link);
  elementsList.append(cardItem);
});



