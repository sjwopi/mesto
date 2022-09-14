const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-btn');
const addButton = content.querySelector('.profile__add-btn');
const lastName = content.querySelector('.profile__full-name');
const lastDescription = content.querySelector('.profile__description');

const popUpEdit = document.querySelector('.popup-edit');
const closeButtonEdit = popUpEdit.querySelector('.popup-edit__close-btn');
const formElementEdit = popUpEdit.querySelector('.popup-edit__form');
const nameInputEdit = formElementEdit.querySelector('.popup-edit__input-name');
const jobInputEdit = formElementEdit.querySelector('.popup-edit__input-description');

const popUpAdd = document.querySelector('.popup-add');
const closeButtonAdd = popUpAdd.querySelector('.popup-add__close-btn');
const formElementAdd = popUpAdd.querySelector('.popup-add__form');
const nameInputAdd = formElementAdd.querySelector('.popup-add__input-name');
const linkInputAdd = formElementAdd.querySelector('.popup-add__input-link');

const popUpPhoto = document.querySelector('.popup-card');
const popUpPhotoCloseBtn = popUpPhoto.querySelector('.popup-card__close-btn');

const cardTemplate = document.querySelector('#card').content;
const elementsList = document.querySelector('.elements__list');


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
function openPopUpEdit() {
  nameInputEdit.value = lastName.textContent;
  jobInputEdit.value = lastDescription.textContent;
  openPopup(popUpEdit);
}

/* Изенение информации в профиле */
function formSubmitEdit(evt) {
  evt.preventDefault();
  lastName.textContent = nameInputEdit.value;
  lastDescription.textContent = jobInputEdit.value;
  closePopup(popUpEdit);
}

/* Открытие и закрытие попапа ДОБАВЛЕНИЯ ПУБЛИКАЦИИ*/
function openPopUpAdd() {
  nameInputAdd.value = '';
  linkInputAdd.value = '';
  openPopup(popUpAdd);
}

/* Считывалка событий на кнопках лайка и удаления */
function checkEvent(cardItem) {
  cardItem.querySelector('.element__img').addEventListener('click', openPhoto);

  const likeButton = cardItem.querySelector('.element__like');
  likeButton.addEventListener('click', activateLike);

  const deleteButton = cardItem.querySelector('.element__delete-btn');
  deleteButton.addEventListener('click', deletePhoto);
}
/* Создание карточки */
function createCard(name, link) {
  const card = cardTemplate.querySelector('.elements__list-item').cloneNode(true);
  card.querySelector('.element__text').textContent = name;
  card.querySelector('.element__img').src = link;
  checkEvent(card);
  return card;
}
/* Добавление публикации на сайт */
function addNewPhoto() {
  const cardItem = createCard(nameInputAdd.value, linkInputAdd.value);
  elementsList.prepend(cardItem);
}
/* Отправка публикации*/
function formSubmitAdd(evt) {
  evt.preventDefault();
  addNewPhoto();
  closePopup(popUpAdd);
}
/* Открытие публикации */
function openPhoto(evt) {
  evt.preventDefault();
  openPopup(popUpPhoto);

  if (popUpPhoto.classList.contains('popup_opened')) {
    popUpPhoto.querySelector('.popup-card__text').textContent = evt.target.parentElement.querySelector('.element__text').textContent;
    popUpPhoto.querySelector('.popup-card__img').src = evt.target.src;
    popUpPhoto.querySelector('.popup-card__img').alt = evt.target.parentElement.querySelector('.element__text').textContent;
  }
}
/* Удаление публикации */
function deletePhoto(evt) {
  evt.preventDefault();
  let elementTarget = evt.target.closest('.elements__list-item');
  elementTarget.remove();
}


editButton.addEventListener('click', openPopUpEdit);
closeButtonEdit.addEventListener('click', function() { closePopup(popUpEdit); });
formElementEdit.addEventListener('submit', formSubmitEdit);

addButton.addEventListener('click', openPopUpAdd);
closeButtonAdd.addEventListener('click', () => { closePopup(popUpAdd); });
formElementAdd.addEventListener('submit', formSubmitAdd);

popUpPhotoCloseBtn.addEventListener('click', () => { closePopup(popUpPhoto); });

for (let i = initialCards.length - 1; i >= 0; i--) {
  const cardItem = createCard(initialCards[i].name, initialCards[i].link);
  elementsList.append(cardItem);
}