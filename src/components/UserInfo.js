export default class UserInfo {
  constructor({selectorUsername, selectorDescription, selectorAvatar}) {
    this._username = document.querySelector(selectorUsername);
    this._description = document.querySelector(selectorDescription);
    this._avatar = document.querySelector(selectorAvatar);
  }
  getUserInfo() {
    return { username: this._username.textContent, description: this._description.textContent, avatar: this._avatar.src }
  }
  setUserInfo({ name, about, avatar, _id}) {
    this._username.textContent = name;
    this._description.textContent = about;
    this._avatar.src = avatar;
    this._userId = _id;
  }
}