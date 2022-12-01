(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r);if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key,"string"),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var r,n;return r=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t);if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key,"string"),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._template=document.querySelector(r).content,this._selectors=n,this._handleOpenImage=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){var e=this._template.querySelector(this._selectors.card).cloneNode(!0);return this._cardTitle=e.querySelector(this._selectors.text),this._cardImage=e.querySelector(this._selectors.img),e}},{key:"_activateLike",value:function(){this._buttonLike.classList.toggle("element__like_active")}},{key:"_deletePhoto",value:function(){this._element.remove(),this._element=null}},{key:"_setCardEventListeners",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){return e._deletePhoto()})),this._buttonLike.addEventListener("click",(function(){return e._activateLike()})),this._element.querySelector(this._selectors.img).addEventListener("click",(function(){return e._handleOpenImage(e._name,e._link)}))}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._buttonLike=this._element.querySelector(this._selectors.like),this._buttonDelete=this._element.querySelector(this._selectors.deleteBtn),this._setCardEventListeners(),this._element}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===u(o)?o:String(o)),n)}var o}var s=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectors=t,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._selectors.inputSelector)),this._buttonSubmit=this._form.querySelector(this._selectors.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){e.classList.add(this._selectors.inputErrorClass),this._errorElement=this._form.querySelector(".".concat(e.name,"-error")),this._errorElement.classList.add(this._selectors.errorClass),this._errorElement.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){e.classList.remove(this._selectors.inputErrorClass),this._errorElement=this._form.querySelector(".".concat(e.name,"-error")),this._errorElement.classList.remove(this._selectors.errorClass),this._errorElement.textContent=""}},{key:"_toggleInputError",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonSubmit.classList.remove(this._selectors.inactiveButtonClass),this._buttonSubmit.disabled=!1):(this._buttonSubmit.classList.add(this._selectors.inactiveButtonClass),this._buttonSubmit.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(r){r.preventDefault(),e._toggleInputError(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function p(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var f=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=p(n="_handleCloseByEsc"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseByEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseByEsc)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._popup.querySelector(".popup__close-btn").addEventListener("click",(function(){e.close()}))}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===y(o)?o:String(o)),n)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=v(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},d.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function h(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhotoImg=t._popup.querySelector(".popup-card__img"),t._popupPhotoText=t._popup.querySelector(".popup-card__text"),t}return t=u,(r=[{key:"open",value:function(e,t){this._popupPhotoText.textContent=e,this._popupPhotoImg.alt=e,this._popupPhotoImg.src=t,d(b(u.prototype),"open",this).call(this)}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===g(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=E(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(o){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitForm=t,r._popupForm=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value,t.value=""})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;k(O(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"_resetInputErrors",value:function(e){var t=this;Object.keys(e).forEach((function(e){t._popupForm.querySelector(".".concat(e,"-error")).textContent=""}))}},{key:"close",value:function(){this._resetInputErrors(this._getInputValues()),k(O(u.prototype),"close",this).call(this)}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===C(o)?o:String(o)),n)}var o}var I=function(){function e(t){var r=t.selectorUsername,n=t.selectorDescription;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(r),this._description=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._username.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){this._username.textContent=e.username,this._description.textContent=e.description}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x={card:".elements__list-item",img:".element__img",text:".element__text",like:".element__like",deleteBtn:".element__delete-btn",popupPhoto:".popup-card",popupPhotoImg:".popup-card__img",popupPhotoText:".popup-card__text",popupPhotoCloseBtn:".popup-card__close-btn"},T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-form",inactiveButtonClass:"popup__save-form_disabled",inputErrorClass:"popup__input-error",errorClass:"popup__error_invalid"},B=document.querySelector(".popup-edit"),R=B.querySelector(".popup__form"),V=document.querySelector(".profile__edit-btn"),D=document.querySelector(".popup-add").querySelector(".popup__form"),F=document.querySelector(".profile__add-btn"),U=B.querySelector(".popup-edit__form"),A=U.querySelector(".popup-edit__input-name"),z=U.querySelector(".popup-edit__input-description"),M=new r({renderer:function(e){var t=X(e);M.addItem(t)}},".elements__list");M.renderItems([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}]);var N=new S(".popup-card");function G(e,t){N.open(e,t)}N.setEventListeners();var H=new s(T,R);H.enableValidation();var J=new I({selectorUsername:".profile__full-name",selectorDescription:".profile__description"}),K=new L(".popup-edit",(function(e){J.setUserInfo({username:e.username,description:e.description}),K.close()}));K.setEventListeners();var Q=new s(T,D);Q.enableValidation();var W=new L(".popup-add",(function(e){M.addItem(X({name:e.name,link:e.url})),W.close()}));function X(e){return new i(e,"#card",x,G).createCard()}W.setEventListeners(),V.addEventListener("click",(function(){H.resetValidation(),K.open();var e=J.getUserInfo();A.value=e.username,z.value=e.description})),F.addEventListener("click",(function(){Q.resetValidation(),W.open()}))})();