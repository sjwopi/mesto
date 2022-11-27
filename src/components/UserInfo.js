export default class UserInfo {
  constructor({selectorUsername, selectorDescription}) {
    this._username = document.querySelector(selectorUsername);
    this._description = document.querySelector(selectorDescription);
  }
  getUserInfo() {
    return { username: this._username.textContent, description: this._description.textContent }
  }
  setUserInfo(data) {
    this._username.textContent = data.username;
    this._description.textContent = data.description;
  }
}