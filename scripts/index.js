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


let initialCards = [
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

function likeActivation(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('element__like_active');
}


/* Открытие и закрытие попапа РЕДАКТИРОВАНИЯ ПРОФИЛЯ */
function openPopUpEdit() {
  nameInputEdit.value = lastName.textContent;
  jobInputEdit.value = lastDescription.textContent;
  popUpEdit.classList.toggle('popup_opened');
}

/* Изенение информации в профиле */
function formSubmitEdit(evt) {
  evt.preventDefault();
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
function formSubmitAdd(evt) {
  evt.preventDefault();
  initialCards.push({ name: nameInputAdd.value, link: linkInputAdd.value });
  addPhoto();
  openPopUpAdd();
}
/* Добавление публикации на сайт */
function addPhoto() {
  while (elementsList.firstChild) {
    elementsList.removeChild(elementsList.lastChild);
  }
  for (let i = initialCards.length - 1; i >= 0; i--) {
    let cardItem = card.querySelector('.elements__list-item').cloneNode(true);
    cardItem.querySelector('.element__text').textContent = initialCards[i].name;
    cardItem.querySelector('.element__img').src = initialCards[i].link;
    elementsList.append(cardItem);
    /* Считыватели событий на кнопках лайка и удаления */
    const likeButton = cardItem.querySelector('.element__like');
    likeButton.addEventListener('click', likeActivation);
    const deleteButton = cardItem.querySelector('.element__delete-btn');
    deleteButton.addEventListener('click', deletePhoto);
  }
}

/* Удаление публикации */
function deletePhoto (evt) {
  evt.preventDefault();
  /* Из массива */
  let elementTarget = evt.target.parentElement;
  initialCards = initialCards.filter(function(item){
    return item.link !== elementTarget.querySelector('.element__img').src;
  });
  
  /* Из профиля */
  addPhoto();
}


editButton.addEventListener('click', openPopUpEdit);
closeButtonEdit.addEventListener('click', openPopUpEdit);
formElementEdit.addEventListener('submit', formSubmitEdit);

addButton.addEventListener('click', openPopUpAdd);
closeButtonAdd.addEventListener('click', openPopUpAdd);
formElementAdd.addEventListener('submit', formSubmitAdd);

addPhoto();