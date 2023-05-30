/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Neonderthaw-Regular.ttf */ "./src/fonts/Neonderthaw-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"NeonFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n  z-index: 30;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home > img,\n#hours > img {\n  width: 350px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n.carousel {\n  width: 70vw;\n  height: 70vh;\n  position: relative;\n}\n\n.carousel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: 1000ms opacity ease-in-out;\n  /* transition-delay: 200ms; */\n  animation: slide-out 1000ms;\n}\n\n.slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide[data-active] {\n  opacity: 1;\n  z-index: 1;\n  animation: slide-in 1000ms;\n}\n\n.carousel-button {\n  position: absolute;\n  background: none;\n  border: none;\n  font-size: 3rem;\n  top: 50%;\n  z-index: 2;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.carousel-button:focus {\n  outline: 1px solid rgb(255, 1, 213);\n}\n\n.carousel-button.prev {\n  left: -6rem;\n}\n\n.carousel-button.next {\n  right: -6rem;\n}\n\n.carousel-nav {\n  position: absolute;\n  inset: 0;\n  transform: translateY(90%);\n  z-index: 20;\n}\n\n.carousel-circle {\n  border: none;\n  background-color: white;\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n@keyframes grow-shrink {\n  0% {\n    width: 20px;\n    background-color: white;\n  }\n  10% {\n    background-color: rgb(255, 146, 237);\n  }\n  50% {\n    width: 60px;\n    background-color: rgb(255, 1, 213);\n  }\n  90% {\n    background-color: rgb(255, 146, 237);\n\n  }\n  100% {\n    width: 20px;\n    background-color: white;\n  }\n}\n\n.carousel-circle[data-active] {\n  animation: grow-shrink 3000ms ease-in-out 0ms forwards;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #home,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,+DAA8D;EAC9D,kBAAkB;AACpB;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,mCAAmC;EACnC,sCAAsC;EACtC,YAAY;AACd;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,QAAQ;EACR,sCAAsC;EACtC,WAAW;EACX,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;;;;EAIE,YAAY;EACZ,wEAAwE;AAC1E;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,iBAAiB;EACjB,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA,uBAAuB;;AAEvB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,sCAAsC;EACtC,6BAA6B;EAC7B,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,UAAU;EACV,UAAU;EACV,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,QAAQ;EACR,UAAU;EACV,2BAA2B;EAC3B,+BAA+B;EAC/B,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;;EAEE,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,0BAA0B;EAC1B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,WAAW;IACX,uBAAuB;EACzB;EACA;IACE,oCAAoC;EACtC;EACA;IACE,WAAW;IACX,kCAAkC;EACpC;EACA;IACE,oCAAoC;;EAEtC;EACA;IACE,WAAW;IACX,uBAAuB;EACzB;AACF;;AAEA;EACE,sDAAsD;AACxD;;AAEA,mDAAmD;AACnD;EACE;IACE,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;;IAEE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;EACb;;EAEA;;IAEE,UAAU;EACZ;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kCAAkC;IAClC,uBAAuB;IACvB,+CAA+C;IAC/C,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF","sourcesContent":["@font-face {\n  font-family: \"NeonFont\";\n  src: url(\"./fonts/Neonderthaw-Regular.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n  z-index: 30;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home > img,\n#hours > img {\n  width: 350px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n.carousel {\n  width: 70vw;\n  height: 70vh;\n  position: relative;\n}\n\n.carousel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: 1000ms opacity ease-in-out;\n  /* transition-delay: 200ms; */\n  animation: slide-out 1000ms;\n}\n\n.slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide[data-active] {\n  opacity: 1;\n  z-index: 1;\n  animation: slide-in 1000ms;\n}\n\n.carousel-button {\n  position: absolute;\n  background: none;\n  border: none;\n  font-size: 3rem;\n  top: 50%;\n  z-index: 2;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.carousel-button:focus {\n  outline: 1px solid rgb(255, 1, 213);\n}\n\n.carousel-button.prev {\n  left: -6rem;\n}\n\n.carousel-button.next {\n  right: -6rem;\n}\n\n.carousel-nav {\n  position: absolute;\n  inset: 0;\n  transform: translateY(90%);\n  z-index: 20;\n}\n\n.carousel-circle {\n  border: none;\n  background-color: white;\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n@keyframes grow-shrink {\n  0% {\n    width: 20px;\n    background-color: white;\n  }\n  10% {\n    background-color: rgb(255, 146, 237);\n  }\n  50% {\n    width: 60px;\n    background-color: rgb(255, 1, 213);\n  }\n  90% {\n    background-color: rgb(255, 146, 237);\n\n  }\n  100% {\n    width: 20px;\n    background-color: white;\n  }\n}\n\n.carousel-circle[data-active] {\n  animation: grow-shrink 3000ms ease-in-out 0ms forwards;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #home,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/images/github-mark-white.png":
/*!******************************************!*\
  !*** ./src/images/github-mark-white.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/github-mark-white.png");

/***/ }),

/***/ "./src/images/neon-coffee-sign.jpg":
/*!*****************************************!*\
  !*** ./src/images/neon-coffee-sign.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/neon-coffee-sign.jpg");

/***/ }),

/***/ "./src/images/pink-coffee-slogan.jpg":
/*!*******************************************!*\
  !*** ./src/images/pink-coffee-slogan.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/pink-coffee-slogan.jpg");

/***/ }),

/***/ "./src/images/slider-1.jpg":
/*!*********************************!*\
  !*** ./src/images/slider-1.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/slider-1.jpg");

/***/ }),

/***/ "./src/images/slider-2.jpg":
/*!*********************************!*\
  !*** ./src/images/slider-2.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/slider-2.jpg");

/***/ }),

/***/ "./src/images/slider-3.jpg":
/*!*********************************!*\
  !*** ./src/images/slider-3.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/slider-3.jpg");

/***/ }),

/***/ "./src/images/slider-4.jpg":
/*!*********************************!*\
  !*** ./src/images/slider-4.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/slider-4.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


const Carousel = function () {
  const parent = document.querySelector("#images-section");

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  carousel.setAttribute("data-carousel", "");
  parent.appendChild(carousel);

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("carousel-button", "prev");
  prevBtn.innerHTML = "&#8678;";
  prevBtn.setAttribute("data-carousel-button", "prev");
  carousel.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("carousel-button", "next");
  nextBtn.innerHTML = "&#8680;";
  nextBtn.setAttribute("data-carousel-button", "next");
  carousel.appendChild(nextBtn);

  const list = document.createElement("ul");
  list.setAttribute("id", "carousel-list");
  list.setAttribute("data-slides", "");
  carousel.appendChild(list);

  _constants__WEBPACK_IMPORTED_MODULE_0__.imagePaths.forEach((img) => {
    const li = document.createElement("li");
    if (img.first !== undefined) {
      li.setAttribute(img.first, "");
    }
    li.classList.add("slide");
    const image = document.createElement("img");
    image.setAttribute("src", img.src);
    image.setAttribute("alt", img.alt);
    li.appendChild(image);
    list.appendChild(li);
  });

  // Nav bar

  const nav = document.createElement("div");
  nav.classList.add("carousel-nav");
  carousel.appendChild(nav);

  const circle1 = document.createElement("button");
  circle1.classList.add("carousel-circle");
  circle1.setAttribute("slide", "1");
  circle1.setAttribute("data-active", "true");
  nav.appendChild(circle1);

  const circle2 = document.createElement("button");
  circle2.classList.add("carousel-circle");
  circle2.setAttribute("slide", "1");
  nav.appendChild(circle2);

  const circle3 = document.createElement("button");
  circle3.classList.add("carousel-circle");
  circle3.setAttribute("slide", "1");
  nav.appendChild(circle3);

  const circle4 = document.createElement("button");
  circle4.classList.add("carousel-circle");
  circle4.setAttribute("slide", "1");
  nav.appendChild(circle4);

  // Change slide on timing

  function changeSlides() {
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + 1;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    const circles = document.querySelector(".carousel-nav");
    const activeCircle = circles.querySelector("[data-active]");

    circles.children[newIndex].dataset.active = true;
    delete activeCircle.dataset.active;
  }

  changeSlides();
  let intervalID;

  function startInterval() {
    clearInterval(intervalID);
    intervalID = setInterval(changeSlides, 3000);
  };

  function stopInterval() {
    clearInterval(intervalID);
  };

  startInterval()

  // Change slide with button

  const buttons = document.querySelectorAll("[data-carousel-button]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      stopInterval();
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = document.querySelector("[data-slides]");

      const activeSlide = slides.querySelector("[data-active]");

      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) {
        newIndex = slides.children.length - 1;
      }
      if (newIndex >= slides.children.length) {
        newIndex = 0;
      }

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
      console.log(slides.children[newIndex].dataset);
      setTimeout(startInterval, 3000)
    });
  });

  return carousel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/github-mark-white.png */ "./src/images/github-mark-white.png");



const Footer = function () {
  const parent = document.querySelector("#parent");

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  parent.appendChild(footer);

  const github = new Image();
  github.src = _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  github.setAttribute('id', 'github-logo')
  github.setAttribute("alt", "github logo");
  footer.appendChild(github);

  const username = document.createElement("p");
  username.setAttribute("id", "username");
  username.innerHTML = `<a href="https://github.com/edensalt/restaurant-page">@edensalt</a>`;
  footer.appendChild(username);

  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/mobile_nav.js":
/*!**************************************!*\
  !*** ./src/components/mobile_nav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ "./src/navigation/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./src/style.css");



const mobileNav = function () {
  const parent = document.querySelector("#mobile-menu-div");

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "mobile-menu-popup");

  const menu = document.createElement("button");
  menu.setAttribute("id", "menu-link-mobile");
  menu.innerHTML = "Menu";
  menu.classList.add("link");
  menu.addEventListener("click", function () {
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__.toMenuMobile)();
  });

  const about = document.createElement("button");
  about.setAttribute("id", "about-link-mobile");
  about.innerHTML = "About";
  about.classList.add("link");
  about.addEventListener("click", function () {
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__.toAboutMobile)();
  });

  const hours = document.createElement("button");
  hours.innerHTML = "Hours";
  hours.classList.add("link", "hours-link-mobile");
  hours.addEventListener("click", function () {
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__.toHoursMobile)();
  });

  const contact = document.createElement("button");
  contact.setAttribute("id", "contact-link-mobile");
  contact.innerHTML = "Contact";
  contact.classList.add("link");
  contact.addEventListener("click", function () {
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__.toContactMobile)();
  });

  parent.appendChild(menuDiv);
  menuDiv.appendChild(menu);
  menuDiv.appendChild(about);
  menuDiv.appendChild(hours);
  menuDiv.appendChild(contact);

  return menuDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileNav);


/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _navigation_to_mobile_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/to_mobile_nav */ "./src/navigation/to_mobile_nav.js");



const NavBar = function () {
  const parent = document.querySelector("#parent");

  const navBar = document.createElement("div");
  navBar.setAttribute("id", "navbar");

  const logo = document.createElement("h1");
  logo.setAttribute("id", "logo-link");
  logo.innerHTML = "Neon Cafe";
  logo.classList.add("link");

  const menu = document.createElement("button");
  menu.setAttribute("id", "menu-link");
  menu.innerHTML = "Menu";
  menu.classList.add("link");

  const about = document.createElement("button");
  about.setAttribute("id", "about-link");
  about.innerHTML = "About";
  about.classList.add("link");

  const hours = document.createElement("button");
  hours.setAttribute("id", "hours-link");
  hours.innerHTML = "Hours";
  hours.classList.add("link");

  const contact = document.createElement("button");
  contact.setAttribute("id", "contact-link");
  contact.innerHTML = "Contact";
  contact.classList.add("link");

  const mobileMenuDiv = document.createElement("div");
  mobileMenuDiv.setAttribute("id", "mobile-menu-div");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "36");
  svg.setAttribute("viewBox", "0 96 960 960");
  svg.setAttribute("width", "36");
  svg.setAttribute("id", "menu-svg");
  svg.classList.add("closed");
  svg.setAttribute("fill", "white");
  svg.innerHTML =
    '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';

  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "page-content");

  parent.appendChild(navBar);
  navBar.appendChild(menu);
  navBar.appendChild(about);
  navBar.appendChild(logo);
  navBar.appendChild(hours);
  navBar.appendChild(contact);
  navBar.appendChild(mobileMenuDiv);
  mobileMenuDiv.appendChild(svg);
  parent.appendChild(pageContent);
  (0,_navigation_to_mobile_nav__WEBPACK_IMPORTED_MODULE_1__.toMobileNav)();

  return navBar;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutUsText": () => (/* binding */ aboutUsText),
/* harmony export */   "coffeeMenu": () => (/* binding */ coffeeMenu),
/* harmony export */   "foodMenu": () => (/* binding */ foodMenu),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "imagePaths": () => (/* binding */ imagePaths)
/* harmony export */ });
/* harmony import */ var _images_slider_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/slider-1.jpg */ "./src/images/slider-1.jpg");
/* harmony import */ var _images_slider_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/slider-2.jpg */ "./src/images/slider-2.jpg");
/* harmony import */ var _images_slider_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/slider-3.jpg */ "./src/images/slider-3.jpg");
/* harmony import */ var _images_slider_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/slider-4.jpg */ "./src/images/slider-4.jpg");






const aboutUsText = `Welcome to Neon Cafe, where creativity and community come together over a cup of expertly-crafted coffee and homemade pastries.
<br />
<br />

Our cafe was founded with the vision of providing a welcoming and inspiring environment for people to gather, connect, and indulge in their passion for great coffee. Whether you're looking to work on a project, catch up with friends, or simply relax with a good book, our space is designed to accommodate your needs.
<br />
<br />

But Neon Cafe is more than just a place to enjoy a cup of coffee. We want to foster a culture of creativity, where people can come together to share their ideas and inspirations. That's why we offer a range of events and activities, from open mic nights to art shows, to bring together the local creative community.
<br />
<br />

Of course, at the heart of our cafe is our commitment to quality. We take pride in serving only the best coffee, sourced from the finest beans and expertly prepared by our skilled baristas. And our pastries are made fresh each day, using only the finest ingredients.
<br />
<br />

We believe that great coffee, delicious food, and a welcoming atmosphere are essential ingredients for a fulfilling cafe experience. Come join us at Neon Cafe and see for yourself what makes us different.`;

const coffeeMenu = [
  {
    item: "Espresso Macchiato",
    price: "$3.50",
    description:
      "A shot of espresso with a dollop of foamed milk on top for a strong, bold flavor.",
  },
  {
    item: "Cortado",
    price: "$4.50",
    description:
      "A Spanish-style drink with a shot of espresso and an equal amount of steamed milk, perfect for those who want a stronger taste than a latte.",
  },
  {
    item: "Vanilla Latte",
    price: "$5.50",
    description:
      "A classic latte with a touch of vanilla syrup, a sweet and creamy option.",
  },
  {
    item: "Pourover",
    price: "$5.00",
    description:
      "Freshly brewed coffee made to order using a pour-over method, allowing for a full-bodied and flavorful cup.",
  },
  {
    item: "Mocha",
    price: "$6.50",
    description:
      "A latte with chocolate syrup, perfect for those with a sweet tooth.",
  },
  {
    item: "Nitro Cold Brew",
    price: "$5.00",
    description:
      "A smooth and creamy coffee with a foamy head that's infused with nitrogen for a unique taste and texture.",
  },
];

const foodMenu = [
  {
    item: "Croissant",
    price: "$3.50",
    description:
      "A classic French pastry made with layers of buttery dough, perfect for breakfast or a snack.",
  },
  {
    item: "Blueberry Muffin",
    price: "$4.00",
    description:
      "A moist and fluffy muffin loaded with fresh blueberries, a sweet and fruity treat.",
  },
  {
    item: "Cinnamon Roll",
    price: "$4.50",
    description:
      "A soft and fluffy roll filled with cinnamon and sugar and topped with a creamy icing, a comforting and indulgent treat.",
  },
  {
    item: "Chocolate Croissant",
    price: "$4.00",
    description:
      "A flaky croissant filled with rich chocolate, perfect for a sweet and decadent breakfast or snack.",
  },
  {
    item: "Bagel",
    price: "$3.50",
    description:
      "A chewy, freshly-baked bagel with your choice of toppings such as cream cheese, butter, or jam.",
  },
  {
    item: "Lemon Poppyseed Scone",
    price: "$4.00",
    description:
      "A tender scone with a bright lemon flavor and a pop of crunch from poppyseeds, a perfect breakfast or tea-time treat.",
  },
];

const hours = [
  { dayOfWeek: "Monday - Thursday", hours: "6:00am - 10:00pm" },
  { dayOfWeek: "Friday - Saturday", hours: "7:00am - 12:00pm" },
  { dayOfWeek: "Sunday", hours: "7:00am - 10:00pm" },
];

const imagePaths = [
  {src: _images_slider_1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], alt: 'man holding a coffee cup', first: 'data-active'},
  {src: _images_slider_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], alt: 'cappuccino in front of a neon E sign'},
  {src: _images_slider_3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], alt: 'woman drinking coffee in front of a neon sign'},
  {src: _images_slider_4_jpg__WEBPACK_IMPORTED_MODULE_3__["default"], alt: 'espresso in a dimly lit room'},
];

/***/ }),

/***/ "./src/navigation/index.js":
/*!*********************************!*\
  !*** ./src/navigation/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toAbout": () => (/* reexport safe */ _to_about__WEBPACK_IMPORTED_MODULE_2__.toAbout),
/* harmony export */   "toAboutMobile": () => (/* reexport safe */ _to_about__WEBPACK_IMPORTED_MODULE_2__.toAboutMobile),
/* harmony export */   "toContact": () => (/* reexport safe */ _to_contact__WEBPACK_IMPORTED_MODULE_4__.toContact),
/* harmony export */   "toContactMobile": () => (/* reexport safe */ _to_contact__WEBPACK_IMPORTED_MODULE_4__.toContactMobile),
/* harmony export */   "toHome": () => (/* reexport safe */ _to_home__WEBPACK_IMPORTED_MODULE_0__.toHome),
/* harmony export */   "toHomeMobile": () => (/* reexport safe */ _to_home__WEBPACK_IMPORTED_MODULE_0__.toHomeMobile),
/* harmony export */   "toHours": () => (/* reexport safe */ _to_hours__WEBPACK_IMPORTED_MODULE_3__.toHours),
/* harmony export */   "toHoursMobile": () => (/* reexport safe */ _to_hours__WEBPACK_IMPORTED_MODULE_3__.toHoursMobile),
/* harmony export */   "toMenu": () => (/* reexport safe */ _to_menu__WEBPACK_IMPORTED_MODULE_1__.toMenu),
/* harmony export */   "toMenuMobile": () => (/* reexport safe */ _to_menu__WEBPACK_IMPORTED_MODULE_1__.toMenuMobile)
/* harmony export */ });
/* harmony import */ var _to_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_home */ "./src/navigation/to_home.js");
/* harmony import */ var _to_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to_menu */ "./src/navigation/to_menu.js");
/* harmony import */ var _to_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to_about */ "./src/navigation/to_about.js");
/* harmony import */ var _to_hours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to_hours */ "./src/navigation/to_hours.js");
/* harmony import */ var _to_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to_contact */ "./src/navigation/to_contact.js");







/***/ }),

/***/ "./src/navigation/to_about.js":
/*!************************************!*\
  !*** ./src/navigation/to_about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toAbout": () => (/* binding */ toAbout),
/* harmony export */   "toAboutMobile": () => (/* binding */ toAboutMobile)
/* harmony export */ });
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about */ "./src/pages/about.js");


const toAbout = function () {
    const aboutBtn = document.querySelector('#about-link')
    aboutBtn.addEventListener('click', function() {
        ;(0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
};

const toAboutMobile = function () {
    (0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const menuBtn = document.querySelector("#menu-svg");
    const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);

};



/***/ }),

/***/ "./src/navigation/to_contact.js":
/*!**************************************!*\
  !*** ./src/navigation/to_contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toContact": () => (/* binding */ toContact),
/* harmony export */   "toContactMobile": () => (/* binding */ toContactMobile)
/* harmony export */ });
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");


const toContact = function () {
    const contactBtn = document.querySelector('#contact-link');
    contactBtn.addEventListener('click', function() {
        (0,_pages_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
};

const toContactMobile = function () {
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const menuBtn = document.querySelector("#menu-svg");
    const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);

};



/***/ }),

/***/ "./src/navigation/to_home.js":
/*!***********************************!*\
  !*** ./src/navigation/to_home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toHome": () => (/* binding */ toHome),
/* harmony export */   "toHomeMobile": () => (/* binding */ toHomeMobile)
/* harmony export */ });
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homepage */ "./src/pages/homepage.js");


const toHome = function () {
    const homeBtn = document.querySelector('#logo-link');
    homeBtn.addEventListener('click', function() {
        (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
};

const toHomeMobile = function () {
    (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const menuBtn = document.querySelector("#menu-svg");
    const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);

};



/***/ }),

/***/ "./src/navigation/to_hours.js":
/*!************************************!*\
  !*** ./src/navigation/to_hours.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toHours": () => (/* binding */ toHours),
/* harmony export */   "toHoursMobile": () => (/* binding */ toHoursMobile)
/* harmony export */ });
/* harmony import */ var _pages_hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/hours */ "./src/pages/hours.js");


const toHours = function () {
    const hoursBtn = document.querySelector('#hours-link')
    hoursBtn.addEventListener('click', function() {
        ;(0,_pages_hours__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
};

const toHoursMobile = function () {
    (0,_pages_hours__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const menuBtn = document.querySelector("#menu-svg");
    const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);

};



/***/ }),

/***/ "./src/navigation/to_menu.js":
/*!***********************************!*\
  !*** ./src/navigation/to_menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toMenu": () => (/* binding */ toMenu),
/* harmony export */   "toMenuMobile": () => (/* binding */ toMenuMobile)
/* harmony export */ });
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");


const toMenu = function () {
  const menuBtn = document.querySelector("#menu-link");
  menuBtn.addEventListener("click", function () {
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};

const toMenuMobile = function () {
    console.log('render page!')
    ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const menuBtn = document.querySelector("#menu-svg");
    const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);

};




/***/ }),

/***/ "./src/navigation/to_mobile_nav.js":
/*!*****************************************!*\
  !*** ./src/navigation/to_mobile_nav.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toMobileNav": () => (/* binding */ toMobileNav)
/* harmony export */ });
/* harmony import */ var _components_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/mobile_nav */ "./src/components/mobile_nav.js");


const toMobileNav = function () {
  const menuBtn = document.querySelector("#menu-svg");
  menuBtn.addEventListener("click", function () {
    (0,_components_mobile_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (menuBtn.classList.contains("closed")) {
      (0,_components_mobile_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
      menuBtn.innerHTML =
        '<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>';
      menuBtn.classList.remove("closed");
      menuBtn.classList.add("open");
    } else {
      const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);
    }
  });
};




/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


const AboutPage = function () {
  const content = document.querySelector("#page-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.setAttribute("id", "about");
  content.appendChild(container);

  const subtitle = document.createElement("h2");
  subtitle.innerHTML = "About Us";
  container.appendChild(subtitle);

  const para = document.createElement("p");
  para.innerHTML = _constants__WEBPACK_IMPORTED_MODULE_0__.aboutUsText;
  container.appendChild(para);

  const images = document.createElement("section");
  images.setAttribute("id", "holder");
  images.setAttribute("aria-label", "Photos of the coffee shop")
  container.appendChild(images);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ContactPage = function () {
  const content = document.querySelector("#page-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.setAttribute("id", "contact");
  content.appendChild(container);

  const subtitle = document.createElement("h2");
  subtitle.innerHTML = "Contact us";
  container.appendChild(subtitle);

  const phone = document.createElement("p");
  phone.innerHTML = `<a href="tel:+1-555-555-5555">555-555-5555</a>`;
  container.appendChild(phone);

  const email = document.createElement("p");
  email.innerHTML = `<a href="mailto:hello@neoncoffee.com"</a>hello@neoncoffee.com</a>`;
  container.appendChild(email);

  const address = document.createElement("p");
  address.innerHTML = "100 Amazing St, Awesome City, ST";
  container.appendChild(address);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);


/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/carousel */ "./src/components/carousel.js");
/* harmony import */ var _images_neon_coffee_sign_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/neon-coffee-sign.jpg */ "./src/images/neon-coffee-sign.jpg");



const HomePage = function () {
  const content = document.querySelector("#page-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.setAttribute("id", "home");
  content.appendChild(container);

  // Testing only - remove when done

  const imagesSection = document.createElement("section");
  imagesSection.setAttribute("id", "images-section");
  imagesSection.setAttribute("aria-label", "rotating images of coffee shop");
  container.appendChild(imagesSection);

  (0,_components_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const coffeeImg = new Image();
  coffeeImg.src = _images_neon_coffee_sign_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
  coffeeImg.setAttribute("alt", "neon coffee sign");
  coffeeImg.classList.add("flicker");
  coffeeImg.addEventListener("load", () => {
    setTimeout(() => {
      coffeeImg.classList.remove("flicker");
    }, 1800);
  });
  container.appendChild(coffeeImg);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ }),

/***/ "./src/pages/hours.js":
/*!****************************!*\
  !*** ./src/pages/hours.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _images_pink_coffee_slogan_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pink-coffee-slogan.jpg */ "./src/images/pink-coffee-slogan.jpg");



const HoursPage = function () {
  
  const content = document.querySelector("#page-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.setAttribute("id", "hours");
  content.appendChild(container);

  const leftCol = document.createElement('div');
  container.appendChild(leftCol);

  const subtitle = document.createElement("h2");
  subtitle.innerHTML = "Our Hours";
  leftCol.appendChild(subtitle);

  const schedule = document.createElement("ul");
  leftCol.appendChild(schedule);

  _constants__WEBPACK_IMPORTED_MODULE_0__.hours.forEach((day, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('day');
    itemDiv.dataset.index = index;

    const dayOfWeek = document.createElement('h3');
    dayOfWeek.textContent = day.dayOfWeek;

    const hours = document.createElement('p');
    hours.textContent = day.hours;

    itemDiv.appendChild(dayOfWeek);
    itemDiv.appendChild(hours);

    schedule.appendChild(itemDiv);

  })

  const signImg = new Image();
    signImg.src = _images_pink_coffee_slogan_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
    signImg.setAttribute("alt", "neon coffee sign");
    signImg.classList.add('flicker');
    signImg.addEventListener('load', () => {
          setTimeout(() => {
            signImg.classList.remove('flicker');
          }, 1800);
    });
    container.appendChild(signImg);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoursPage);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


const MenuPage = function () {
  
  const content = document.querySelector("#page-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.setAttribute("id", "menu");
  content.appendChild(container);

  // Coffee menu

  const leftCol = document.createElement('div');
  container.appendChild(leftCol);

  const coffeeSubtitle = document.createElement("h2");
  coffeeSubtitle.innerHTML = "Our Coffee Menu";
  leftCol.appendChild(coffeeSubtitle);

  const coffeeList = document.createElement("ul");
  leftCol.appendChild(coffeeList);

  _constants__WEBPACK_IMPORTED_MODULE_0__.coffeeMenu.forEach((offering, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');
    itemDiv.dataset.index = index;

    const itemName = document.createElement('h3');
    itemName.textContent = offering.item;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = offering.price;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = offering.description;

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(itemDescription);

    coffeeList.appendChild(itemDiv);

  })

  //Food menu

  const rightCol = document.createElement('div');
  container.appendChild(rightCol);

  const foodSubtitle = document.createElement("h2");
  foodSubtitle.innerHTML = "Our Food Menu";
  rightCol.appendChild(foodSubtitle);

  const foodList = document.createElement("ul");
  rightCol.appendChild(foodList);

  _constants__WEBPACK_IMPORTED_MODULE_0__.foodMenu.forEach((offering, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');
    itemDiv.dataset.index = index;

    const itemName = document.createElement('h3');
    itemName.textContent = offering.item;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = offering.price;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = offering.description;

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(itemDescription);

    foodList.appendChild(itemDiv);

  })

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);


/***/ }),

/***/ "./src/fonts/Neonderthaw-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Neonderthaw-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e8de259f213935670a3.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homepage */ "./src/pages/homepage.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "./src/navigation/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");







const parent = document.createElement("div");
parent.setAttribute("id", "parent");
document.body.appendChild(parent);


(0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_pages_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();

(0,_navigation__WEBPACK_IMPORTED_MODULE_3__.toMenu)();
(0,_navigation__WEBPACK_IMPORTED_MODULE_3__.toHome)();
(0,_navigation__WEBPACK_IMPORTED_MODULE_3__.toAbout)();
(0,_navigation__WEBPACK_IMPORTED_MODULE_3__.toHours)();
(0,_navigation__WEBPACK_IMPORTED_MODULE_3__.toContact)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFB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QUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwwREFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFFTixtREFBTTtBQUNOLG1EQUFNO0FBQ04sb0RBQU87QUFDUCxvREFBTztBQUNQLHNEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvcGluay1jb2ZmZWUtc2xvZ2FuLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci0xLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci0yLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci0zLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci00LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlX25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uL3RvX2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9faG91cnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9fbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19tb2JpbGVfbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvdXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05lb25kZXJ0aGF3LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmxpY2tlciB7XFxuICBhbmltYXRpb24tbmFtZTogZmxpY2tlcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5saW5rIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBtYXJnaW46IGluaXRpYWw7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaG9tZXBhZ2Uge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbiNuYXZiYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHotaW5kZXg6IDMwO1xcbn1cXG5cXG4jbmF2YmFyID4gKiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyID4gKjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2JpbGUtbWVudS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbWVudS1zdmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG59XFxuXFxuI3BhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbmgyLFxcbmgzLFxcbmg0LFxcbnAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxufVxcblxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSA+IGltZyxcXG4jaG91cnMgPiBpbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5kYXkge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbiNob3VycyxcXG4jbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWVudSA+IGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbn1cXG5cXG4jZ2l0aHViLWxvZ28ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4vKiBGb3IgaW1hZ2UgY2Fyb3VzZWwgKi9cXG5cXG4uY2Fyb3VzZWwge1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJvdXNlbCA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMTAwMG1zIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XFxuICAvKiB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtczsgKi9cXG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IDEwMDBtcztcXG59XFxuXFxuLnNsaWRlID4gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlW2RhdGEtYWN0aXZlXSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uOmhvdmVyLFxcbi5jYXJvdXNlbC1idXR0b246Zm9jdXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMjU1LCAxLCAyMTMpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLnByZXYge1xcbiAgbGVmdDogLTZyZW07XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24ubmV4dCB7XFxuICByaWdodDogLTZyZW07XFxufVxcblxcbi5jYXJvdXNlbC1uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3ctc2hyaW5rIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ2LCAyMzcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICB9XFxuICA5MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDYsIDIzNyk7XFxuXFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlW2RhdGEtYWN0aXZlXSB7XFxuICBhbmltYXRpb246IGdyb3ctc2hyaW5rIDMwMDBtcyBlYXNlLWluLW91dCAwbXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IG9yIGxlc3MgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjcGFnZS1jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLmxpbmsge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjbWVudSxcXG4gICNob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjbWVudSA+IGRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgI2hvbWUsXFxuICAjaG91cnMgPiBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgI21lbnUtc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtZGl2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDQ1cHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSg5NSwgOTUsIDk1LCAwLjQyNyk7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwID4gYnV0dG9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsK0RBQThEO0VBQzlELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1Isc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JB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QUVFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QiwrQ0FBK0M7SUFDL0MsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05lb25kZXJ0aGF3LVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXIge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmZsaWNrZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaWNrZXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogLTEwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ubGluayB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAgbWFyZ2luOiBpbml0aWFsO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhvbWVwYWdlIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Mik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICB6LWluZGV4OiAzMDtcXG59XFxuXFxuI25hdmJhciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI25hdmJhciA+ICo6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbW9iaWxlLW1lbnUtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI21lbnUtc3ZnIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZW9uRm9udFxcXCI7XFxufVxcblxcbiNwYWdlLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcbn1cXG5cXG5oMixcXG5oMyxcXG5oNCxcXG5wIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVxcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDIge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbn1cXG5cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUgPiBpbWcsXFxuI2hvdXJzID4gaW1nIHtcXG4gIHdpZHRoOiAzNTBweDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uZGF5IHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jaG91cnMsXFxuI21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21lbnUgPiBkaXYge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3R0b206IDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUyKTtcXG59XFxuXFxuI2dpdGh1Yi1sb2dvIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLyogRm9yIGltYWdlIGNhcm91c2VsICovXFxuXFxuLmNhcm91c2VsIHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDEwMDBtcyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xcbiAgLyogdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7ICovXFxuICBhbmltYXRpb246IHNsaWRlLW91dCAxMDAwbXM7XFxufVxcblxcbi5zbGlkZSA+IGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zbGlkZVtkYXRhLWFjdGl2ZV0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlcixcXG4uY2Fyb3VzZWwtYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDI1NSwgMSwgMjEzKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbi5wcmV2IHtcXG4gIGxlZnQ6IC02cmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLm5leHQge1xcbiAgcmlnaHQ6IC02cmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmNhcm91c2VsLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBncm93LXNocmluayB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NiwgMjM3KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ2LCAyMzcpO1xcblxcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmNhcm91c2VsLWNpcmNsZVtkYXRhLWFjdGl2ZV0ge1xcbiAgYW5pbWF0aW9uOiBncm93LXNocmluayAzMDAwbXMgZWFzZS1pbi1vdXQgMG1zIGZvcndhcmRzO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyeSBmb3Igc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBsZXNzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3BhZ2UtY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbi5saW5rIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgI21lbnUsXFxuICAjaG91cnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI21lbnUgPiBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNob21lLFxcbiAgI2hvdXJzID4gaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gICNtZW51LXN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LWRpdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA0NXB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoOTUsIDk1LCA5NSwgMC40MjcpO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCA+IGJ1dHRvbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9naXRodWItbWFyay13aGl0ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9uZW9uLWNvZmZlZS1zaWduLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BpbmstY29mZmVlLXNsb2dhbi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zbGlkZXItMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zbGlkZXItMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zbGlkZXItMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zbGlkZXItNC5qcGdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGltYWdlUGF0aHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IENhcm91c2VsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlcy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuICBjYXJvdXNlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIsIFwiXCIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuXG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcmV2QnRuLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1idXR0b25cIiwgXCJwcmV2XCIpO1xuICBwcmV2QnRuLmlubmVySFRNTCA9IFwiJiM4Njc4O1wiO1xuICBwcmV2QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWwtYnV0dG9uXCIsIFwicHJldlwiKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG5cbiAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWJ1dHRvblwiLCBcIm5leHRcIik7XG4gIG5leHRCdG4uaW5uZXJIVE1MID0gXCImIzg2ODA7XCI7XG4gIG5leHRCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbC1idXR0b25cIiwgXCJuZXh0XCIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChuZXh0QnRuKTtcblxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2Fyb3VzZWwtbGlzdFwiKTtcbiAgbGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlc1wiLCBcIlwiKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgaW1hZ2VQYXRocy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpZiAoaW1nLmZpcnN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxpLnNldEF0dHJpYnV0ZShpbWcuZmlyc3QsIFwiXCIpO1xuICAgIH1cbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcuc3JjKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgaW1nLmFsdCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICAvLyBOYXYgYmFyXG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1uYXZcIik7XG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgY2lyY2xlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNpcmNsZTEuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNpcmNsZVwiKTtcbiAgY2lyY2xlMS5zZXRBdHRyaWJ1dGUoXCJzbGlkZVwiLCBcIjFcIik7XG4gIGNpcmNsZTEuc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgXCJ0cnVlXCIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY2lyY2xlMSk7XG5cbiAgY29uc3QgY2lyY2xlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNpcmNsZTIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNpcmNsZVwiKTtcbiAgY2lyY2xlMi5zZXRBdHRyaWJ1dGUoXCJzbGlkZVwiLCBcIjFcIik7XG4gIG5hdi5hcHBlbmRDaGlsZChjaXJjbGUyKTtcblxuICBjb25zdCBjaXJjbGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2lyY2xlMy5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtY2lyY2xlXCIpO1xuICBjaXJjbGUzLnNldEF0dHJpYnV0ZShcInNsaWRlXCIsIFwiMVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNpcmNsZTMpO1xuXG4gIGNvbnN0IGNpcmNsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaXJjbGU0LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jaXJjbGVcIik7XG4gIGNpcmNsZTQuc2V0QXR0cmlidXRlKFwic2xpZGVcIiwgXCIxXCIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY2lyY2xlNCk7XG5cbiAgLy8gQ2hhbmdlIHNsaWRlIG9uIHRpbWluZ1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVNsaWRlcygpIHtcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2xpZGVzXVwiKTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHNsaWRlcy5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWN0aXZlXVwiKTtcblxuICAgIGxldCBuZXdJbmRleCA9IFsuLi5zbGlkZXMuY2hpbGRyZW5dLmluZGV4T2YoYWN0aXZlU2xpZGUpICsgMTtcbiAgICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggPj0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgbmV3SW5kZXggPSAwO1xuICAgIH1cblxuICAgIHNsaWRlcy5jaGlsZHJlbltuZXdJbmRleF0uZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgIGRlbGV0ZSBhY3RpdmVTbGlkZS5kYXRhc2V0LmFjdGl2ZTtcblxuICAgIGNvbnN0IGNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLW5hdlwiKTtcbiAgICBjb25zdCBhY3RpdmVDaXJjbGUgPSBjaXJjbGVzLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hY3RpdmVdXCIpO1xuXG4gICAgY2lyY2xlcy5jaGlsZHJlbltuZXdJbmRleF0uZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgIGRlbGV0ZSBhY3RpdmVDaXJjbGUuZGF0YXNldC5hY3RpdmU7XG4gIH1cblxuICBjaGFuZ2VTbGlkZXMoKTtcbiAgbGV0IGludGVydmFsSUQ7XG5cbiAgZnVuY3Rpb24gc3RhcnRJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgIGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChjaGFuZ2VTbGlkZXMsIDMwMDApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHN0b3BJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICB9O1xuXG4gIHN0YXJ0SW50ZXJ2YWwoKVxuXG4gIC8vIENoYW5nZSBzbGlkZSB3aXRoIGJ1dHRvblxuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2Fyb3VzZWwtYnV0dG9uXVwiKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN0b3BJbnRlcnZhbCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gYnV0dG9uLmRhdGFzZXQuY2Fyb3VzZWxCdXR0b24gPT09IFwibmV4dFwiID8gMSA6IC0xO1xuICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNsaWRlc11cIik7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gc2xpZGVzLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hY3RpdmVdXCIpO1xuXG4gICAgICBsZXQgbmV3SW5kZXggPSBbLi4uc2xpZGVzLmNoaWxkcmVuXS5pbmRleE9mKGFjdGl2ZVNsaWRlKSArIG9mZnNldDtcbiAgICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgbmV3SW5kZXggPSBzbGlkZXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdJbmRleCA+PSBzbGlkZXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIG5ld0luZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgc2xpZGVzLmNoaWxkcmVuW25ld0luZGV4XS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICBkZWxldGUgYWN0aXZlU2xpZGUuZGF0YXNldC5hY3RpdmU7XG4gICAgICBjb25zb2xlLmxvZyhzbGlkZXMuY2hpbGRyZW5bbmV3SW5kZXhdLmRhdGFzZXQpO1xuICAgICAgc2V0VGltZW91dChzdGFydEludGVydmFsLCAzMDAwKVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gY2Fyb3VzZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdpdEh1YkxvZ28gZnJvbSAnLi4vaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZydcblxuY29uc3QgRm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhcmVudFwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWIuc3JjID0gZ2l0SHViTG9nbztcbiAgZ2l0aHViLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxvZ28nKVxuICBnaXRodWIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiZ2l0aHViIGxvZ29cIik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWIpO1xuXG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXNlcm5hbWVcIik7XG4gIHVzZXJuYW1lLmlubmVySFRNTCA9IGA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VkZW5zYWx0L3Jlc3RhdXJhbnQtcGFnZVwiPkBlZGVuc2FsdDwvYT5gO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgeyB0b0Fib3V0TW9iaWxlLCB0b0NvbnRhY3RNb2JpbGUsIHRvSG91cnNNb2JpbGUsIHRvTWVudU1vYmlsZSB9IGZyb20gXCIuLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbW9iaWxlTmF2ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcblxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vYmlsZS1tZW51LXBvcHVwXCIpO1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1saW5rLW1vYmlsZVwiKTtcbiAgbWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRvTWVudU1vYmlsZSgpO1xuICB9KTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXQtbGluay1tb2JpbGVcIik7XG4gIGFib3V0LmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9BYm91dE1vYmlsZSgpO1xuICB9KTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvdXJzLmlubmVySFRNTCA9IFwiSG91cnNcIjtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcImxpbmtcIiwgXCJob3Vycy1saW5rLW1vYmlsZVwiKTtcbiAgaG91cnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0b0hvdXJzTW9iaWxlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1saW5rLW1vYmlsZVwiKTtcbiAgY29udGFjdC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRvQ29udGFjdE1vYmlsZSgpO1xuICB9KTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICByZXR1cm4gbWVudURpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vYmlsZU5hdjtcbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgdG9Nb2JpbGVOYXYgfSBmcm9tIFwiLi4vbmF2aWdhdGlvbi90b19tb2JpbGVfbmF2XCI7XG5cbmNvbnN0IE5hdkJhciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJlbnRcIik7XG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2QmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2YmFyXCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvLWxpbmtcIik7XG4gIGxvZ28uaW5uZXJIVE1MID0gXCJOZW9uIENhZmVcIjtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtbGlua1wiKTtcbiAgbWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXQtbGlua1wiKTtcbiAgYWJvdXQuaW5uZXJIVE1MID0gXCJBYm91dFwiO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvdXJzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cnMtbGlua1wiKTtcbiAgaG91cnMuaW5uZXJIVE1MID0gXCJIb3Vyc1wiO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbGlua1wiKTtcbiAgY29udGFjdC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcblxuICBjb25zdCBtb2JpbGVNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9iaWxlTWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vYmlsZS1tZW51LWRpdlwiKTtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjM2XCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgOTYgOTYwIDk2MFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzZcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtc3ZnXCIpO1xuICBzdmcuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcbiAgc3ZnLmlubmVySFRNTCA9XG4gICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuXG4gIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYWdlLWNvbnRlbnRcIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChtb2JpbGVNZW51RGl2KTtcbiAgbW9iaWxlTWVudURpdi5hcHBlbmRDaGlsZChzdmcpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xuICB0b01vYmlsZU5hdigpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJpbXBvcnQgaW1hZ2UxIGZyb20gJy4uL2ltYWdlcy9zbGlkZXItMS5qcGcnO1xuaW1wb3J0IGltYWdlMiBmcm9tICcuLi9pbWFnZXMvc2xpZGVyLTIuanBnJztcbmltcG9ydCBpbWFnZTMgZnJvbSAnLi4vaW1hZ2VzL3NsaWRlci0zLmpwZyc7XG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4uL2ltYWdlcy9zbGlkZXItNC5qcGcnO1xuXG5cbmV4cG9ydCBjb25zdCBhYm91dFVzVGV4dCA9IGBXZWxjb21lIHRvIE5lb24gQ2FmZSwgd2hlcmUgY3JlYXRpdml0eSBhbmQgY29tbXVuaXR5IGNvbWUgdG9nZXRoZXIgb3ZlciBhIGN1cCBvZiBleHBlcnRseS1jcmFmdGVkIGNvZmZlZSBhbmQgaG9tZW1hZGUgcGFzdHJpZXMuXG48YnIgLz5cbjxiciAvPlxuXG5PdXIgY2FmZSB3YXMgZm91bmRlZCB3aXRoIHRoZSB2aXNpb24gb2YgcHJvdmlkaW5nIGEgd2VsY29taW5nIGFuZCBpbnNwaXJpbmcgZW52aXJvbm1lbnQgZm9yIHBlb3BsZSB0byBnYXRoZXIsIGNvbm5lY3QsIGFuZCBpbmR1bGdlIGluIHRoZWlyIHBhc3Npb24gZm9yIGdyZWF0IGNvZmZlZS4gV2hldGhlciB5b3UncmUgbG9va2luZyB0byB3b3JrIG9uIGEgcHJvamVjdCwgY2F0Y2ggdXAgd2l0aCBmcmllbmRzLCBvciBzaW1wbHkgcmVsYXggd2l0aCBhIGdvb2QgYm9vaywgb3VyIHNwYWNlIGlzIGRlc2lnbmVkIHRvIGFjY29tbW9kYXRlIHlvdXIgbmVlZHMuXG48YnIgLz5cbjxiciAvPlxuXG5CdXQgTmVvbiBDYWZlIGlzIG1vcmUgdGhhbiBqdXN0IGEgcGxhY2UgdG8gZW5qb3kgYSBjdXAgb2YgY29mZmVlLiBXZSB3YW50IHRvIGZvc3RlciBhIGN1bHR1cmUgb2YgY3JlYXRpdml0eSwgd2hlcmUgcGVvcGxlIGNhbiBjb21lIHRvZ2V0aGVyIHRvIHNoYXJlIHRoZWlyIGlkZWFzIGFuZCBpbnNwaXJhdGlvbnMuIFRoYXQncyB3aHkgd2Ugb2ZmZXIgYSByYW5nZSBvZiBldmVudHMgYW5kIGFjdGl2aXRpZXMsIGZyb20gb3BlbiBtaWMgbmlnaHRzIHRvIGFydCBzaG93cywgdG8gYnJpbmcgdG9nZXRoZXIgdGhlIGxvY2FsIGNyZWF0aXZlIGNvbW11bml0eS5cbjxiciAvPlxuPGJyIC8+XG5cbk9mIGNvdXJzZSwgYXQgdGhlIGhlYXJ0IG9mIG91ciBjYWZlIGlzIG91ciBjb21taXRtZW50IHRvIHF1YWxpdHkuIFdlIHRha2UgcHJpZGUgaW4gc2VydmluZyBvbmx5IHRoZSBiZXN0IGNvZmZlZSwgc291cmNlZCBmcm9tIHRoZSBmaW5lc3QgYmVhbnMgYW5kIGV4cGVydGx5IHByZXBhcmVkIGJ5IG91ciBza2lsbGVkIGJhcmlzdGFzLiBBbmQgb3VyIHBhc3RyaWVzIGFyZSBtYWRlIGZyZXNoIGVhY2ggZGF5LCB1c2luZyBvbmx5IHRoZSBmaW5lc3QgaW5ncmVkaWVudHMuXG48YnIgLz5cbjxiciAvPlxuXG5XZSBiZWxpZXZlIHRoYXQgZ3JlYXQgY29mZmVlLCBkZWxpY2lvdXMgZm9vZCwgYW5kIGEgd2VsY29taW5nIGF0bW9zcGhlcmUgYXJlIGVzc2VudGlhbCBpbmdyZWRpZW50cyBmb3IgYSBmdWxmaWxsaW5nIGNhZmUgZXhwZXJpZW5jZS4gQ29tZSBqb2luIHVzIGF0IE5lb24gQ2FmZSBhbmQgc2VlIGZvciB5b3Vyc2VsZiB3aGF0IG1ha2VzIHVzIGRpZmZlcmVudC5gO1xuXG5leHBvcnQgY29uc3QgY29mZmVlTWVudSA9IFtcbiAge1xuICAgIGl0ZW06IFwiRXNwcmVzc28gTWFjY2hpYXRvXCIsXG4gICAgcHJpY2U6IFwiJDMuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzaG90IG9mIGVzcHJlc3NvIHdpdGggYSBkb2xsb3Agb2YgZm9hbWVkIG1pbGsgb24gdG9wIGZvciBhIHN0cm9uZywgYm9sZCBmbGF2b3IuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkNvcnRhZG9cIixcbiAgICBwcmljZTogXCIkNC41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIFNwYW5pc2gtc3R5bGUgZHJpbmsgd2l0aCBhIHNob3Qgb2YgZXNwcmVzc28gYW5kIGFuIGVxdWFsIGFtb3VudCBvZiBzdGVhbWVkIG1pbGssIHBlcmZlY3QgZm9yIHRob3NlIHdobyB3YW50IGEgc3Ryb25nZXIgdGFzdGUgdGhhbiBhIGxhdHRlLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJWYW5pbGxhIExhdHRlXCIsXG4gICAgcHJpY2U6IFwiJDUuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBjbGFzc2ljIGxhdHRlIHdpdGggYSB0b3VjaCBvZiB2YW5pbGxhIHN5cnVwLCBhIHN3ZWV0IGFuZCBjcmVhbXkgb3B0aW9uLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJQb3Vyb3ZlclwiLFxuICAgIHByaWNlOiBcIiQ1LjAwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkZyZXNobHkgYnJld2VkIGNvZmZlZSBtYWRlIHRvIG9yZGVyIHVzaW5nIGEgcG91ci1vdmVyIG1ldGhvZCwgYWxsb3dpbmcgZm9yIGEgZnVsbC1ib2RpZWQgYW5kIGZsYXZvcmZ1bCBjdXAuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIk1vY2hhXCIsXG4gICAgcHJpY2U6IFwiJDYuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBsYXR0ZSB3aXRoIGNob2NvbGF0ZSBzeXJ1cCwgcGVyZmVjdCBmb3IgdGhvc2Ugd2l0aCBhIHN3ZWV0IHRvb3RoLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJOaXRybyBDb2xkIEJyZXdcIixcbiAgICBwcmljZTogXCIkNS4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNtb290aCBhbmQgY3JlYW15IGNvZmZlZSB3aXRoIGEgZm9hbXkgaGVhZCB0aGF0J3MgaW5mdXNlZCB3aXRoIG5pdHJvZ2VuIGZvciBhIHVuaXF1ZSB0YXN0ZSBhbmQgdGV4dHVyZS5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb29kTWVudSA9IFtcbiAge1xuICAgIGl0ZW06IFwiQ3JvaXNzYW50XCIsXG4gICAgcHJpY2U6IFwiJDMuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBjbGFzc2ljIEZyZW5jaCBwYXN0cnkgbWFkZSB3aXRoIGxheWVycyBvZiBidXR0ZXJ5IGRvdWdoLCBwZXJmZWN0IGZvciBicmVha2Zhc3Qgb3IgYSBzbmFjay5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQmx1ZWJlcnJ5IE11ZmZpblwiLFxuICAgIHByaWNlOiBcIiQ0LjAwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgbW9pc3QgYW5kIGZsdWZmeSBtdWZmaW4gbG9hZGVkIHdpdGggZnJlc2ggYmx1ZWJlcnJpZXMsIGEgc3dlZXQgYW5kIGZydWl0eSB0cmVhdC5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQ2lubmFtb24gUm9sbFwiLFxuICAgIHByaWNlOiBcIiQ0LjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc29mdCBhbmQgZmx1ZmZ5IHJvbGwgZmlsbGVkIHdpdGggY2lubmFtb24gYW5kIHN1Z2FyIGFuZCB0b3BwZWQgd2l0aCBhIGNyZWFteSBpY2luZywgYSBjb21mb3J0aW5nIGFuZCBpbmR1bGdlbnQgdHJlYXQuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkNob2NvbGF0ZSBDcm9pc3NhbnRcIixcbiAgICBwcmljZTogXCIkNC4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGZsYWt5IGNyb2lzc2FudCBmaWxsZWQgd2l0aCByaWNoIGNob2NvbGF0ZSwgcGVyZmVjdCBmb3IgYSBzd2VldCBhbmQgZGVjYWRlbnQgYnJlYWtmYXN0IG9yIHNuYWNrLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJCYWdlbFwiLFxuICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2hld3ksIGZyZXNobHktYmFrZWQgYmFnZWwgd2l0aCB5b3VyIGNob2ljZSBvZiB0b3BwaW5ncyBzdWNoIGFzIGNyZWFtIGNoZWVzZSwgYnV0dGVyLCBvciBqYW0uXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkxlbW9uIFBvcHB5c2VlZCBTY29uZVwiLFxuICAgIHByaWNlOiBcIiQ0LjAwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgdGVuZGVyIHNjb25lIHdpdGggYSBicmlnaHQgbGVtb24gZmxhdm9yIGFuZCBhIHBvcCBvZiBjcnVuY2ggZnJvbSBwb3BweXNlZWRzLCBhIHBlcmZlY3QgYnJlYWtmYXN0IG9yIHRlYS10aW1lIHRyZWF0LlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGhvdXJzID0gW1xuICB7IGRheU9mV2VlazogXCJNb25kYXkgLSBUaHVyc2RheVwiLCBob3VyczogXCI2OjAwYW0gLSAxMDowMHBtXCIgfSxcbiAgeyBkYXlPZldlZWs6IFwiRnJpZGF5IC0gU2F0dXJkYXlcIiwgaG91cnM6IFwiNzowMGFtIC0gMTI6MDBwbVwiIH0sXG4gIHsgZGF5T2ZXZWVrOiBcIlN1bmRheVwiLCBob3VyczogXCI3OjAwYW0gLSAxMDowMHBtXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbWFnZVBhdGhzID0gW1xuICB7c3JjOiBpbWFnZTEsIGFsdDogJ21hbiBob2xkaW5nIGEgY29mZmVlIGN1cCcsIGZpcnN0OiAnZGF0YS1hY3RpdmUnfSxcbiAge3NyYzogaW1hZ2UyLCBhbHQ6ICdjYXBwdWNjaW5vIGluIGZyb250IG9mIGEgbmVvbiBFIHNpZ24nfSxcbiAge3NyYzogaW1hZ2UzLCBhbHQ6ICd3b21hbiBkcmlua2luZyBjb2ZmZWUgaW4gZnJvbnQgb2YgYSBuZW9uIHNpZ24nfSxcbiAge3NyYzogaW1hZ2U0LCBhbHQ6ICdlc3ByZXNzbyBpbiBhIGRpbWx5IGxpdCByb29tJ30sXG5dOyIsImV4cG9ydCB7IHRvSG9tZSwgdG9Ib21lTW9iaWxlIH0gZnJvbSAnLi90b19ob21lJztcbmV4cG9ydCB7IHRvTWVudSwgdG9NZW51TW9iaWxlIH0gZnJvbSAnLi90b19tZW51JztcbmV4cG9ydCB7IHRvQWJvdXQsIHRvQWJvdXRNb2JpbGUgfSBmcm9tICcuL3RvX2Fib3V0JztcbmV4cG9ydCB7IHRvSG91cnMsIHRvSG91cnNNb2JpbGUgfSBmcm9tICcuL3RvX2hvdXJzJztcbmV4cG9ydCB7IHRvQ29udGFjdCwgdG9Db250YWN0TW9iaWxlIH0gZnJvbSAnLi90b19jb250YWN0JztcbiIsImltcG9ydCBBYm91dFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XG5cbmNvbnN0IHRvQWJvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtbGluaycpXG4gICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgQWJvdXRQYWdlKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHRvQWJvdXRNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgQWJvdXRQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9BYm91dCwgdG9BYm91dE1vYmlsZSB9OyIsImltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi4vcGFnZXMvY29udGFjdFwiO1xuXG5jb25zdCB0b0NvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LWxpbmsnKTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIENvbnRhY3RQYWdlKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHRvQ29udGFjdE1vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBDb250YWN0UGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvQ29udGFjdCwgdG9Db250YWN0TW9iaWxlIH0iLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2hvbWVwYWdlXCI7XG5cbmNvbnN0IHRvSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28tbGluaycpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgSG9tZVBhZ2UoKTtcbiAgICB9KVxufTtcblxuY29uc3QgdG9Ib21lTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIEhvbWVQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9Ib21lLCB0b0hvbWVNb2JpbGUgfTsiLCJpbXBvcnQgSG91cnNQYWdlIGZyb20gXCIuLi9wYWdlcy9ob3Vyc1wiO1xuXG5jb25zdCB0b0hvdXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhvdXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJzLWxpbmsnKVxuICAgIGhvdXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIEhvdXJzUGFnZSgpO1xuICAgIH0pXG59O1xuXG5jb25zdCB0b0hvdXJzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIEhvdXJzUGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvSG91cnMsIHRvSG91cnNNb2JpbGV9OyIsImltcG9ydCBNZW51UGFnZSBmcm9tIFwiLi4vcGFnZXMvbWVudVwiO1xuXG5jb25zdCB0b01lbnUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtbGlua1wiKTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIE1lbnVQYWdlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgdG9NZW51TW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXIgcGFnZSEnKVxuICAgIE1lbnVQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9NZW51LCB0b01lbnVNb2JpbGUgfTtcbiIsImltcG9ydCBtb2JpbGVOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9iaWxlX25hdlwiO1xuXG5jb25zdCB0b01vYmlsZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2JpbGVOYXYoKTtcbiAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgIG1vYmlsZU5hdigpO1xuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIm0yNDkgODQ5LTQyLTQyIDIzMS0yMzEtMjMxLTIzMSA0Mi00MiAyMzEgMjMxIDIzMS0yMzEgNDIgNDItMjMxIDIzMSAyMzEgMjMxLTQyIDQyLTIzMS0yMzEtMjMxIDIzMVpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlZFwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHRvTW9iaWxlTmF2IH07XG4iLCJpbXBvcnQgeyBhYm91dFVzVGV4dCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQWJvdXRQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgVXNcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEuaW5uZXJIVE1MID0gYWJvdXRVc1RleHQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaW1hZ2VzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9sZGVyXCIpO1xuICBpbWFnZXMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlBob3RvcyBvZiB0aGUgY29mZmVlIHNob3BcIilcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlcyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcbiIsImNvbnN0IENvbnRhY3RQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgc3VidGl0bGUuaW5uZXJIVE1MID0gXCJDb250YWN0IHVzXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGhvbmUuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJ0ZWw6KzEtNTU1LTU1NS01NTU1XCI+NTU1LTU1NS01NTU1PC9hPmA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZW1haWwuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJtYWlsdG86aGVsbG9AbmVvbmNvZmZlZS5jb21cIjwvYT5oZWxsb0BuZW9uY29mZmVlLmNvbTwvYT5gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjEwMCBBbWF6aW5nIFN0LCBBd2Vzb21lIENpdHksIFNUXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG4iLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2Fyb3VzZWxcIjtcbmltcG9ydCBjb2ZmZWVJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBUZXN0aW5nIG9ubHkgLSByZW1vdmUgd2hlbiBkb25lXG5cbiAgY29uc3QgaW1hZ2VzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBpbWFnZXNTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2VzLXNlY3Rpb25cIik7XG4gIGltYWdlc1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcInJvdGF0aW5nIGltYWdlcyBvZiBjb2ZmZWUgc2hvcFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlc1NlY3Rpb24pO1xuXG4gIENhcm91c2VsKCk7XG5cbiAgY29uc3QgY29mZmVlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvZmZlZUltZy5zcmMgPSBjb2ZmZWVJbWFnZTtcbiAgY29mZmVlSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIm5lb24gY29mZmVlIHNpZ25cIik7XG4gIGNvZmZlZUltZy5jbGFzc0xpc3QuYWRkKFwiZmxpY2tlclwiKTtcbiAgY29mZmVlSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvZmZlZUltZy5jbGFzc0xpc3QucmVtb3ZlKFwiZmxpY2tlclwiKTtcbiAgICB9LCAxODAwKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVJbWcpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCB7IGhvdXJzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNpZ25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3BpbmstY29mZmVlLXNsb2dhbi5qcGdcIlxuXG5jb25zdCBIb3Vyc1BhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJzXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiT3VyIEhvdXJzXCI7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcblxuICBob3Vycy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgaXRlbURpdi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBjb25zdCBkYXlPZldlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRheU9mV2Vlay50ZXh0Q29udGVudCA9IGRheS5kYXlPZldlZWs7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IGRheS5ob3VycztcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZGF5T2ZXZWVrKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG4gIH0pXG5cbiAgY29uc3Qgc2lnbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHNpZ25JbWcuc3JjID0gc2lnbkltYWdlO1xuICAgIHNpZ25JbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibmVvbiBjb2ZmZWUgc2lnblwiKTtcbiAgICBzaWduSW1nLmNsYXNzTGlzdC5hZGQoJ2ZsaWNrZXInKTtcbiAgICBzaWduSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzaWduSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaWNrZXInKTtcbiAgICAgICAgICB9LCAxODAwKTtcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lnbkltZyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJzUGFnZTtcbiIsImltcG9ydCB7IGNvZmZlZU1lbnUsIGZvb2RNZW51IH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBNZW51UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtY29udGVudFwiKTtcblxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIC8vIENvZmZlZSBtZW51XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3QgY29mZmVlU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvZmZlZVN1YnRpdGxlLmlubmVySFRNTCA9IFwiT3VyIENvZmZlZSBNZW51XCI7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoY29mZmVlU3VidGl0bGUpO1xuXG4gIGNvbnN0IGNvZmZlZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoY29mZmVlTGlzdCk7XG5cbiAgY29mZmVlTWVudS5mb3JFYWNoKChvZmZlcmluZywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtRGl2LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG9mZmVyaW5nLml0ZW07XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gb2ZmZXJpbmcucHJpY2U7XG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2ZmZXJpbmcuZGVzY3JpcHRpb247XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgY29mZmVlTGlzdC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICB9KVxuXG4gIC8vRm9vZCBtZW51XG5cbiAgY29uc3QgcmlnaHRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29sKTtcblxuICBjb25zdCBmb29kU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGZvb2RTdWJ0aXRsZS5pbm5lckhUTUwgPSBcIk91ciBGb29kIE1lbnVcIjtcbiAgcmlnaHRDb2wuYXBwZW5kQ2hpbGQoZm9vZFN1YnRpdGxlKTtcblxuICBjb25zdCBmb29kTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcmlnaHRDb2wuYXBwZW5kQ2hpbGQoZm9vZExpc3QpO1xuXG4gIGZvb2RNZW51LmZvckVhY2goKG9mZmVyaW5nLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW1EaXYuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gb2ZmZXJpbmcuaXRlbTtcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBvZmZlcmluZy5wcmljZTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvZmZlcmluZy5kZXNjcmlwdGlvbjtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICBmb29kTGlzdC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51UGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvaG9tZXBhZ2UnO1xuaW1wb3J0IHsgdG9NZW51LCB0b0hvbWUsIHRvQWJvdXQsIHRvSG91cnMsIHRvQ29udGFjdCB9IGZyb20gJy4vbmF2aWdhdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG5cbmNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wYXJlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYXJlbnRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XG5cblxuTmF2QmFyKCk7XG5Ib21lUGFnZSgpO1xuRm9vdGVyKCk7XG5cbnRvTWVudSgpO1xudG9Ib21lKCk7XG50b0Fib3V0KCk7XG50b0hvdXJzKCk7XG50b0NvbnRhY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=