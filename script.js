let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__edit-btn");
let closeButton = content.querySelector(".popup__close-btn");


function editPopUp() {
    let popUp = content.querySelector(".popup");
    popUp.classList.toggle("popup_opened");
}
editButton.addEventListener("click", editPopUp);
closeButton.addEventListener("click", editPopUp);
