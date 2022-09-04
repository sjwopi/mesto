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

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', openPopUp);
formElement.addEventListener('submit', formSubmitHandler);

/* let like = content.querySelector(".element__like");
function likeActivation(id) {
    id.classList.toggle("element__like_active");
}
like.addEventListener("click", likeActivation(like.gitElementById)); */