/* Открытие попапа */
let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__edit-btn");
let closeButton = content.querySelector(".popup__close-btn");

function openPopUp() {
    let popUp = content.querySelector(".popup");
    popUp.classList.toggle("popup_opened");
}
editButton.addEventListener("click", openPopUp);
closeButton.addEventListener("click", openPopUp);

/* лайки  не вышло добавить, но как я понял это в следущих 2 спринтах будет*/

/* let like = content.querySelector(".element__like");
function likeActivation(id) {
    id.classList.toggle("element__like_active");
}
like.addEventListener("click", likeActivation(like.gitElementById)); */


/* Форма */
let formElement = content.querySelector(".form");

let saveButton = formElement.querySelector(".form__save");
let nameInput = formElement.querySelector(".form__name");
let jobInput = formElement.querySelector(".form__description");

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let newName = nameInput.value;
    let newDescription = jobInput.value;

    let lastName = content.querySelector(".profile__full-name");
    let lastDescription = content.querySelector(".profile__description");
    
    lastName.textContent = newName;
    lastDescription.textContent = newDescription;
    
    openPopUp();
}

formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', formSubmitHandler)
