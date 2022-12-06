export default class Api {
  constructor() {
    this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-54/';
    this._headers = {
      authorization: 'e73982ce-3140-4f09-8668-b08c6beaa106',
      'Content-Type': 'application/json'
    }
  }
  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
  }
  createCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: data.name, link: data.url })
    })
      .then(res => this._getResponse(res));
  }
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._getResponse(res))
  }

  setLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
  }

  editUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name: data.username, about: data.description })
    })
      .then(res => this._getResponse(res));
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: data.urlavatar })
    })
      .then((res) => this._getResponse(res))
  }
}
