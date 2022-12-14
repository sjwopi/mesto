export default class UserInfo {
  constructor({selectorUsername, selectorDescription, selectorAvatar}) {
    this._username = document.querySelector(selectorUsername);
    this._description = document.querySelector(selectorDescription);
    this._avatar = document.querySelector(selectorAvatar);
  }
  getUserInfo() {
    return { username: this._username.textContent, description: this._description.textContent, avatar: this._avatar.src }
  }
  setUserInfo(data) {
    this._username.textContent = data.username;
    this._description.textContent = data.description;
    this._avatar.src = data.avatar;
    this._userId = data.id;
  }
  renderAvatar(data) {
    this._avatar.src = data.avatar;
  }
}