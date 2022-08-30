let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__edit-btn");
let closeButton = content.querySelector(".popup__close-btn")

function editPopUp() {
    let popUp = content.querySelector(".popup");
    popUp.classList.toggle("popup_opened");
}
editButton.addEventListener("click", editPopUp);
closeButton.addEventListener("click", editPopUp);


/* let content = document.querySelector('.content');
    editText.setAttribute("style", "opacity: 1;")

let addButton = container.querySelector('.')

if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add('form__submit-btn_disabled');
} else {
    resetButton.removeAttribute("disabled", true);
    resetButton.classList.remove('form__submit-btn_disabled');

} */