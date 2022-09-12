let content = document.querySelector('.content');

let editButton = content.querySelector('.profile__edit-btn');
let lastName = content.querySelector('.profile__full-name');
let lastDescription = content.querySelector('.profile__description');

let popUp = document.querySelector('.popup');
let closeButton = popUp.querySelector('.popup__close-btn');
let formElement = popUp.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');


function openPopUp() {
    nameInput.value = lastName.textContent;
    jobInput.value = lastDescription.textContent;
    popUp.classList.toggle('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    lastName.textContent = nameInput.value;
    lastDescription.textContent = jobInput.value;;
    openPopUp();
}
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
let card = document.querySelector('#card').content;
let elementsList = document.querySelector('.elements__list');

function addPhoto(name, link) {
    let cardItem = card.querySelector('.elements__list-item').cloneNode(true);

    cardItem.querySelector('.element__img').src = link;
    cardItem.querySelector('.element__text').textContent = name;

    elementsList.append(cardItem);
}
for (let i = 0; i < initialCards.length; i++) {
    addPhoto(initialCards[i].name, initialCards[i].link);
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', openPopUp);
formElement.addEventListener('submit', formSubmitHandler);
