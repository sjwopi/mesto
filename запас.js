/* Открытие и закрытие попапа РЕДАКТИРОВАНИЯ ПРОФИЛЯ */
function openPopUpEdit() {
    nameInputEdit.value = lastName.textContent;
    jobInputEdit.value = lastDescription.textContent;
    popUpEdit.classList.toggle('popup_opened');
  }
  
  /* Изенение информации в профиле */
  function formSubmitEdit() {
    lastName.textContent = nameInputEdit.value;
    lastDescription.textContent = jobInputEdit.value;
    openPopUpEdit();
  }
  
  /* Открытие и закрытие попапа ДОБАВЛЕНИЯ ПУБЛИКАЦИИ*/
  function openPopUpAdd() {
    nameInputAdd.value = '';
    linkInputAdd.value = '';
    popUpAdd.classList.toggle('popup_opened');
  }
  
  /* Добавление публикации в массив */
  function formSubmitAdd() {
    initialCards.push({ name: nameInputAdd.value, link: linkInputAdd.value});
    addPhoto(nameInputAdd.value, linkInputAdd.value)
    openPopUpAdd();
  }
  /* Добавление публикации на страничку */
  function addPhoto(name, link) {
    let cardItem = card.querySelector('.elements__list-item').cloneNode(true);
    cardItem.querySelector('.element__img').src = link;
    cardItem.querySelector('.element__text').textContent = name;
    elementsList.prepend(cardItem);
    /* Считыватели событий на кнопках лайка и удаления */
    const likeButton = elementsList.querySelector('.element__like');
    likeButton.addEventListener('click', likeActivation);
    const deleteButton = elementsList.querySelector('.element__delete-btn');
    deleteButton.addEventListener('click', deletePhoto)
  }
  /* Удаление публикации */
  function deletePhoto (evt) {
    evt.preventDefault();
    /* Из массива */
    let elementTarget = evt.target.parentElement;
    initialCards = initialCards.filter(function(item){
      console.log(item.link);
      console.log(elementTarget.querySelector('.element__img').src)
      console.log(item.link !== elementTarget.querySelector('.element__img').src)
      return item.link !== elementTarget.querySelector('.element__img').src;
    });
    
    /* Из профиля */
    for (let i = initialCards.length-1; i >= 0; i--) {
      addPhoto(initialCards[i].name, initialCards[i].link);
    }
  }
  function likeActivation(evt) {
    evt.target.classList.toggle('element__like_active');
  }
  
  
  for (let i = initialCards.length-1; i >= 0; i--) {
    addPhoto(initialCards[i].name, initialCards[i].link);
  }














  
  /* Открытие и закрытие попапа РЕДАКТИРОВАНИЯ ПРОФИЛЯ */
function openPopUpEdit() {
  nameInputEdit.value = lastName.textContent;
  jobInputEdit.value = lastDescription.textContent;
  popUpEdit.classList.toggle('popup_opened');
}
/* Изенение информации в профиле */
function formSubmitEdit() {
  lastName.textContent = nameInputEdit.value;
  lastDescription.textContent = jobInputEdit.value;
  openPopUpEdit();
}
editButton.addEventListener('click', openPopUpEdit);
closeButtonEdit.addEventListener('click', openPopUpEdit);
formElementEdit.addEventListener('submit', formSubmitEdit);










const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-btn');
const addButton = content.querySelector('.profile__add-btn');
const lastName = content.querySelector('.profile__full-name');
const lastDescription = content.querySelector('.profile__description');

const popUpEdit = document.querySelector('.popup-edit');
const closeButtonEdit = popUpEdit.querySelector('.popup-edit__close-btn');
const formElementEdit = popUpEdit.querySelector('.popup-edit__form');
const nameInputEdit = formElementEdit.querySelector('.popup-edit__input_type_name');
const jobInputEdit = formElementEdit.querySelector('.popup-edit__input_type_description');

const popUpAdd = document.querySelector('.popup-add');
const closeButtonAdd = popUpAdd.querySelector('.popup-add__close-btn');
const formElementAdd = popUpAdd.querySelector('.popup-add__form');
const nameInputAdd = formElementAdd.querySelector('.popup-add__input_type_name');
const linkInputAdd = formElementAdd.querySelector('.popup-add__input_type_link');

const card = document.querySelector('#card').content;
const elementsList = document.querySelector('.elements__list');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function addPhoto(name, link) {
  let cardItem = card.querySelector('.elements__list-item').cloneNode(true);
  cardItem.querySelector('.element__img').src = link;
  cardItem.querySelector('.element__text').textContent = name;
  elementsList.prepend(cardItem);
  const likeButton = elementsList.querySelector('.element__like');
  likeButton.addEventListener('click', likeActivation);
}

function openPopUpEdit() {
  nameInputEdit.value = lastName.textContent;
  jobInputEdit.value = lastDescription.textContent;
  popUpEdit.classList.toggle('popup_opened');
}
function formSubmitEdit(evt) {
  evt.preventDefault();
  lastName.textContent = nameInputEdit.value;
  lastDescription.textContent = jobInputEdit.value;
  openPopUpEdit();
}

function openPopUpAdd() {
  nameInputAdd.value = '';
  linkInputAdd.value = '';
  popUpAdd.classList.toggle('popup_opened');
}
function formSubmitAdd(evt) {
  evt.preventDefault();
  initialCards.push({ name: nameInputAdd.value, link: linkInputAdd.value });
  addPhoto(nameInputAdd.value, linkInputAdd.value)
  openPopUpAdd();
}
function likeActivation(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('element__like_active');
}

editButton.addEventListener('click', openPopUpEdit);
closeButtonEdit.addEventListener('click', openPopUpEdit);
formElementEdit.addEventListener('submit', formSubmitEdit);

addButton.addEventListener('click', openPopUpAdd);
closeButtonAdd.addEventListener('click', openPopUpAdd);
formElementAdd.addEventListener('submit', formSubmitAdd);

for (let i = initialCards.length - 1; i >= 0; i--) {
  addPhoto(initialCards[i].name, initialCards[i].link);
}