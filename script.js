let content = document.querySelector(".content");
let editButton = content.querySelector(".profile__edit-btn");
let closeButton = content.querySelector(".popup__close-btn");

function editPopUp() {
    let popUp = content.querySelector(".popup");
    popUp.classList.toggle("popup_opened");
}
editButton.addEventListener("click", editPopUp);
closeButton.addEventListener("click", editPopUp);

/* Пробовал лайки добать, но работатет только с первой публикацией, а если я использую querySelectorAll, то вообще не работает */

/* let like = content.querySelectorAll(".element__like");
function likeActivation() {
    like.classList.toggle("element__like_active");
}
like.addEventListener("click", likeActivation); */
