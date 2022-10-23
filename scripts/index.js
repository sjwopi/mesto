import Card from './Card.js';
const selectors = {
    card: '.elements__list-item',
    img: '.element__img',
    text: '.element__text',
    like: '.element__like',
    deleteBtn: '.element__delete-btn',
    popupPhoto: '.popup-card',
    popupPhotoImg: '.popup-card__img',
    popupPhotoText: '.popup-card__text',
    popupPhotoCloseBtn: '.popup-card__close-btn'
}

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

const cardTemplate = document.querySelector('#card').content;
const elementsList = document.querySelector('.elements__list');


const popups = Array.from(document.querySelectorAll('.popup'))

const resetValidationErrors = (popup) => {
    const inputErrorList = Array.from(popup.querySelectorAll('.popup__input'));
    inputErrorList.forEach((inputError) => {
        inputError.classList.remove('popup__error_invalid');
        popup.querySelector(`.${inputError.name}-error`).textContent = '';
    })
}
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', setListenerForPopupCloseByEsc);
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', setListenerForPopupCloseByEsc);
    resetValidationErrors(popup);
}
function openPopupPhoto(obj) {
    const popup = obj._generatePopupPhoto();
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', setListenerForPopupCloseByEsc);
}

function closePopupPhoto(popupActive) {
    popupActive.classList.remove('popup_opened');
    document.removeEventListener('keydown', setListenerForPopupCloseByEsc);
}
function setListenerForPopupCloseByEsc(evt) {
    const popupActive = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopupPhoto(popupActive);
    }
}
/* Открытиепопапа РЕДАКТИРОВАНИЯ ПРОФИЛЯ */
function openPopupEditProfile() {
    nameInputEdit.value = lastName.textContent;
    jobInputEdit.value = lastDescription.textContent;
    openPopup(popupEditProfile);
}
/* Изенение информации в профиле */
function submitEditProfileForm() {
    lastName.textContent = nameInputEdit.value;
    lastDescription.textContent = jobInputEdit.value;
    closePopup(popupEditProfile);
}
/* Открытие попапа ДОБАВЛЕНИЯ ПУБЛИКАЦИИ*/
function openPopupAddCard() {
    openPopup(popupAddCard);
    popupAddCard.querySelector('.popup__form').reset();
}
function createCard(data) {
    const card = new Card(data, cardTemplate, selectors);
    const element = card._createCard();
    return element;
}
/* Добавление публикации на сайт */
function addNewPhoto() {
    const cardItem = createCard(nameInputAdd.value, linkInputAdd.value);
    elementsList.prepend(cardItem);
}
/* Отправка публикации*/
function submitAddCardForm() {
    addNewPhoto();
    closePopup(popupAddCard);
}

editButton.addEventListener('click', openPopupEditProfile);
closeButtonEdit.addEventListener('click', () => { closePopup(popupEditProfile); });
formElementEdit.addEventListener('submit', submitEditProfileForm);

addButton.addEventListener('click', openPopupAddCard);
closeButtonAdd.addEventListener('click', () => { closePopup(popupAddCard); });
formElementAdd.addEventListener('submit', submitAddCardForm);

initialCards.forEach(function (item) {
    const card = createCard(item);
    elementsList.append(card);
});

popups.forEach(function (popup) {
    popup.addEventListener('click', function (evt) {
        closePopup(evt.target)
    });
})
export { openPopupPhoto, closePopupPhoto }