export default class Card {
  constructor({data, userId, selectorTemplate, selectorsCard, handleOpenImage, handleSetLike, handleRemoveLike, handleDelete }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    
    this._cardId = data._id;
    this._userId = userId;
    this._cardOwnerId = data.owner._id;

    this._template = document.querySelector(selectorTemplate).content;
    this._selectors = selectorsCard;

    this._handleOpenImage = handleOpenImage;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDelete = handleDelete;
  }
  _getTemplate() {
    const cardElement = this._template.querySelector(this._selectors.card).cloneNode(true);
    this._cardTitle = cardElement.querySelector(this._selectors.text);
    this._cardImage = cardElement.querySelector(this._selectors.img);
    this._likesCount = cardElement.querySelector('.element__like-count')
    return cardElement;
  }
  
  _setCardEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleOpenImage(this._name, this._link));
    this._buttonDelete.addEventListener('click', () => this._handleDelete(this._cardId));
    this._buttonLike.addEventListener('click', () => {
      if (this._buttonLike.classList.contains('element__like_active')) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });
  }
  _isCardLiked() {
    if (this._likes.some((user) => {
      return this._userId == user._id;
    })) {
      this._buttonLike.classList.add('element__like_active');
    }
  }
  _hasDeleteBtn() {
    if (this._userId !== this._cardOwnerId) {
      this._buttonDelete.remove();
    }
  }
  createCard() {
    this._element = this._getTemplate();
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._buttonLike = this._element.querySelector(this._selectors.like);
    this._buttonDelete = this._element.querySelector(this._selectors.deleteBtn);

    this._hasDeleteBtn();
    this._isCardLiked();
    this._likesCount.textContent = this._likes.length;

    this._setCardEventListeners();
    return this._element;
  }
  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesCount.textContent = this._likes.length;
    this._buttonLike.classList.toggle('element__like_active');
  }
  deletePhoto() {
    this._element.remove();
    this._element = null;
  }
}
