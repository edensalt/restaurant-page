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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"NeonFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n  z-index: 30;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home > img,\n#hours > img {\n  width: 350px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n.carousel {\n  width: 70vw;\n  height: 70vh;\n  position: relative;\n}\n\n.carousel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: 1000ms opacity ease-in-out;\n  animation: slide-out 1000ms;\n}\n\n.slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide[data-active] {\n  opacity: 1;\n  z-index: 1;\n  animation: slide-in 1000ms;\n}\n\n.carousel-button {\n  position: absolute;\n  background: none;\n  border: none;\n  font-size: 3rem;\n  top: 50%;\n  z-index: 2;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.carousel-button:focus {\n  outline: 1px solid rgb(255, 1, 213);\n}\n\n.carousel-button.prev {\n  left: -6rem;\n}\n\n.carousel-button.next {\n  right: -6rem;\n}\n\n.carousel-nav {\n  position: absolute;\n  inset: 0;\n  transform: translateY(90%);\n  z-index: 20;\n}\n\n.carousel-circle {\n  border: none;\n  background-color: white;\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.carousel-circle:hover {\n  cursor: pointer;\n}\n\n@keyframes grow-shrink {\n  0% {\n    width: 20px;\n    background-color: white;\n  }\n  10% {\n    background-color: rgb(255, 146, 237);\n  }\n  50% {\n    width: 30px;\n    background-color: rgb(255, 1, 213);\n  }\n  90% {\n    background-color: rgb(255, 146, 237);\n\n  }\n  100% {\n    width: 20px;\n    background-color: white;\n  }\n}\n\n.carousel-circle[data-active] {\n  animation: grow-shrink 2800ms ease-in-out;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #home,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"NeonFont\";\n  src: url(\"./fonts/Neonderthaw-Regular.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n  z-index: 30;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home > img,\n#hours > img {\n  width: 350px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n.carousel {\n  width: 70vw;\n  height: 70vh;\n  position: relative;\n}\n\n.carousel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: 1000ms opacity ease-in-out;\n  animation: slide-out 1000ms;\n}\n\n.slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide[data-active] {\n  opacity: 1;\n  z-index: 1;\n  animation: slide-in 1000ms;\n}\n\n.carousel-button {\n  position: absolute;\n  background: none;\n  border: none;\n  font-size: 3rem;\n  top: 50%;\n  z-index: 2;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.carousel-button:focus {\n  outline: 1px solid rgb(255, 1, 213);\n}\n\n.carousel-button.prev {\n  left: -6rem;\n}\n\n.carousel-button.next {\n  right: -6rem;\n}\n\n.carousel-nav {\n  position: absolute;\n  inset: 0;\n  transform: translateY(90%);\n  z-index: 20;\n}\n\n.carousel-circle {\n  border: none;\n  background-color: white;\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.carousel-circle:hover {\n  cursor: pointer;\n}\n\n@keyframes grow-shrink {\n  0% {\n    width: 20px;\n    background-color: white;\n  }\n  10% {\n    background-color: rgb(255, 146, 237);\n  }\n  50% {\n    width: 30px;\n    background-color: rgb(255, 1, 213);\n  }\n  90% {\n    background-color: rgb(255, 146, 237);\n\n  }\n  100% {\n    width: 20px;\n    background-color: white;\n  }\n}\n\n.carousel-circle[data-active] {\n  animation: grow-shrink 2800ms ease-in-out;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #home,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
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
      
      const circles = document.querySelector(".carousel-nav");
    const activeCircle = circles.querySelector("[data-active]");

    circles.children[newIndex].dataset.active = true;
    delete activeCircle.dataset.active;

      setTimeout(startInterval, 0)
    });

    // Change slides with circles

   

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZ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Q0Q7QUFDbUM7QUFDbEM7OztBQUd6QztBQUNBO0FBQ0E7OztBQUdBLDhEQUFNO0FBQ04sMkRBQVE7QUFDUiw4REFBTTs7QUFFTixtREFBTTtBQUNOLG1EQUFNO0FBQ04sb0RBQU87QUFDUCxvREFBTztBQUNQLHNEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvcGluay1jb2ZmZWUtc2xvZ2FuLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci0xLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci0yLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci0zLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3NsaWRlci00LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlX25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uL3RvX2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9faG91cnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9fbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19tb2JpbGVfbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvdXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05lb25kZXJ0aGF3LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmxpY2tlciB7XFxuICBhbmltYXRpb24tbmFtZTogZmxpY2tlcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5saW5rIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBtYXJnaW46IGluaXRpYWw7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaG9tZXBhZ2Uge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbiNuYXZiYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHotaW5kZXg6IDMwO1xcbn1cXG5cXG4jbmF2YmFyID4gKiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyID4gKjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2JpbGUtbWVudS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbWVudS1zdmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG59XFxuXFxuI3BhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbmgyLFxcbmgzLFxcbmg0LFxcbnAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxufVxcblxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSA+IGltZyxcXG4jaG91cnMgPiBpbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5kYXkge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbiNob3VycyxcXG4jbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWVudSA+IGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbn1cXG5cXG4jZ2l0aHViLWxvZ28ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4vKiBGb3IgaW1hZ2UgY2Fyb3VzZWwgKi9cXG5cXG4uY2Fyb3VzZWwge1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJvdXNlbCA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMTAwMG1zIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHNsaWRlLW91dCAxMDAwbXM7XFxufVxcblxcbi5zbGlkZSA+IGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbi5zbGlkZVtkYXRhLWFjdGl2ZV0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDEwMDBtcztcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlcixcXG4uY2Fyb3VzZWwtYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDI1NSwgMSwgMjEzKTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbi5wcmV2IHtcXG4gIGxlZnQ6IC02cmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLm5leHQge1xcbiAgcmlnaHQ6IC02cmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmNhcm91c2VsLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNhcm91c2VsLWNpcmNsZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3Jvdy1zaHJpbmsge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuICAxMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDYsIDIzNyk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gIH1cXG4gIDkwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NiwgMjM3KTtcXG5cXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5jYXJvdXNlbC1jaXJjbGVbZGF0YS1hY3RpdmVdIHtcXG4gIGFuaW1hdGlvbjogZ3Jvdy1zaHJpbmsgMjgwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyeSBmb3Igc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBsZXNzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3BhZ2UtY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbi5saW5rIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgI21lbnUsXFxuICAjaG91cnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI21lbnUgPiBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNob21lLFxcbiAgI2hvdXJzID4gaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gICNtZW51LXN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LWRpdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA0NXB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoOTUsIDk1LCA5NSwgMC40MjcpO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCA+IGJ1dHRvbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtEQUE4RDtFQUM5RCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7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QUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsK0NBQStDO0lBQy9DLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZW9uRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9OZW9uZGVydGhhdy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mbGlja2VyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlja2VyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IC0xMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmxpbmsge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIG1hcmdpbjogaW5pdGlhbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ob21lcGFnZSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuI25hdmJhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgei1pbmRleDogMzA7XFxufVxcblxcbiNuYXZiYXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXZiYXIgPiAqOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vYmlsZS1tZW51LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNtZW51LXN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVvbkZvbnRcXFwiO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNob21lID4gaW1nLFxcbiNob3VycyA+IGltZyB7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmRheSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI2hvdXJzLFxcbiNtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtZW51ID4gZGl2IHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm90dG9tOiAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Mik7XFxufVxcblxcbiNnaXRodWItbG9nbyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi8qIEZvciBpbWFnZSBjYXJvdXNlbCAqL1xcblxcbi5jYXJvdXNlbCB7XFxuICB3aWR0aDogNzB2dztcXG4gIGhlaWdodDogNzB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcm91c2VsID4gdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAxMDAwbXMgb3BhY2l0eSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IDEwMDBtcztcXG59XFxuXFxuLnNsaWRlID4gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlW2RhdGEtYWN0aXZlXSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uOmhvdmVyLFxcbi5jYXJvdXNlbC1idXR0b246Zm9jdXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMjU1LCAxLCAyMTMpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLnByZXYge1xcbiAgbGVmdDogLTZyZW07XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24ubmV4dCB7XFxuICByaWdodDogLTZyZW07XFxufVxcblxcbi5jYXJvdXNlbC1uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBncm93LXNocmluayB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0NiwgMjM3KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQ2LCAyMzcpO1xcblxcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmNhcm91c2VsLWNpcmNsZVtkYXRhLWFjdGl2ZV0ge1xcbiAgYW5pbWF0aW9uOiBncm93LXNocmluayAyODAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IG9yIGxlc3MgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjcGFnZS1jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLmxpbmsge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjbWVudSxcXG4gICNob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjbWVudSA+IGRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgI2hvbWUsXFxuICAjaG91cnMgPiBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgI21lbnUtc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtZGl2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDQ1cHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSg5NSwgOTUsIDk1LCAwLjQyNyk7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwID4gYnV0dG9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGluay1jb2ZmZWUtc2xvZ2FuLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0yLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0zLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci00LmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW1hZ2VQYXRocyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2VzLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gIGNhcm91c2VsLnNldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWxcIiwgXCJcIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjYXJvdXNlbCk7XG5cbiAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByZXZCdG4uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWJ1dHRvblwiLCBcInByZXZcIik7XG4gIHByZXZCdG4uaW5uZXJIVE1MID0gXCImIzg2Nzg7XCI7XG4gIHByZXZCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbC1idXR0b25cIiwgXCJwcmV2XCIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChwcmV2QnRuKTtcblxuICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtYnV0dG9uXCIsIFwibmV4dFwiKTtcbiAgbmV4dEJ0bi5pbm5lckhUTUwgPSBcIiYjODY4MDtcIjtcbiAgbmV4dEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsLWJ1dHRvblwiLCBcIm5leHRcIik7XG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKG5leHRCdG4pO1xuXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJvdXNlbC1saXN0XCIpO1xuICBsaXN0LnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVzXCIsIFwiXCIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChsaXN0KTtcblxuICBpbWFnZVBhdGhzLmZvckVhY2goKGltZykgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGlmIChpbWcuZmlyc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGkuc2V0QXR0cmlidXRlKGltZy5maXJzdCwgXCJcIik7XG4gICAgfVxuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVwiKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZy5zcmMpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBpbWcuYWx0KTtcbiAgICBsaS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuXG4gIC8vIE5hdiBiYXJcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLW5hdlwiKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBjaXJjbGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2lyY2xlMS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtY2lyY2xlXCIpO1xuICBjaXJjbGUxLnNldEF0dHJpYnV0ZShcInNsaWRlXCIsIFwiMVwiKTtcbiAgY2lyY2xlMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBcInRydWVcIik7XG4gIG5hdi5hcHBlbmRDaGlsZChjaXJjbGUxKTtcblxuICBjb25zdCBjaXJjbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2lyY2xlMi5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtY2lyY2xlXCIpO1xuICBjaXJjbGUyLnNldEF0dHJpYnV0ZShcInNsaWRlXCIsIFwiMVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNpcmNsZTIpO1xuXG4gIGNvbnN0IGNpcmNsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaXJjbGUzLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jaXJjbGVcIik7XG4gIGNpcmNsZTMuc2V0QXR0cmlidXRlKFwic2xpZGVcIiwgXCIxXCIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY2lyY2xlMyk7XG5cbiAgY29uc3QgY2lyY2xlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNpcmNsZTQuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNpcmNsZVwiKTtcbiAgY2lyY2xlNC5zZXRBdHRyaWJ1dGUoXCJzbGlkZVwiLCBcIjFcIik7XG4gIG5hdi5hcHBlbmRDaGlsZChjaXJjbGU0KTtcblxuICAvLyBDaGFuZ2Ugc2xpZGUgb24gdGltaW5nXG5cbiAgZnVuY3Rpb24gY2hhbmdlU2xpZGVzKCkge1xuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zbGlkZXNdXCIpO1xuICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gc2xpZGVzLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hY3RpdmVdXCIpO1xuXG4gICAgbGV0IG5ld0luZGV4ID0gWy4uLnNsaWRlcy5jaGlsZHJlbl0uaW5kZXhPZihhY3RpdmVTbGlkZSkgKyAxO1xuICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ID0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGlmIChuZXdJbmRleCA+PSBzbGlkZXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBuZXdJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgc2xpZGVzLmNoaWxkcmVuW25ld0luZGV4XS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgZGVsZXRlIGFjdGl2ZVNsaWRlLmRhdGFzZXQuYWN0aXZlO1xuXG4gICAgY29uc3QgY2lyY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtbmF2XCIpO1xuICAgIGNvbnN0IGFjdGl2ZUNpcmNsZSA9IGNpcmNsZXMucXVlcnlTZWxlY3RvcihcIltkYXRhLWFjdGl2ZV1cIik7XG5cbiAgICBjaXJjbGVzLmNoaWxkcmVuW25ld0luZGV4XS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgZGVsZXRlIGFjdGl2ZUNpcmNsZS5kYXRhc2V0LmFjdGl2ZTtcbiAgfVxuXG4gIGNoYW5nZVNsaWRlcygpO1xuICBsZXQgaW50ZXJ2YWxJRDtcblxuICBmdW5jdGlvbiBzdGFydEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGNoYW5nZVNsaWRlcywgMzAwMCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3RvcEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gIH07XG5cbiAgc3RhcnRJbnRlcnZhbCgpXG5cbiAgLy8gQ2hhbmdlIHNsaWRlIHdpdGggYnV0dG9uXG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jYXJvdXNlbC1idXR0b25dXCIpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3RvcEludGVydmFsKCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBidXR0b24uZGF0YXNldC5jYXJvdXNlbEJ1dHRvbiA9PT0gXCJuZXh0XCIgPyAxIDogLTE7XG4gICAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2xpZGVzXVwiKTtcblxuICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSBzbGlkZXMucXVlcnlTZWxlY3RvcihcIltkYXRhLWFjdGl2ZV1cIik7XG5cbiAgICAgIGxldCBuZXdJbmRleCA9IFsuLi5zbGlkZXMuY2hpbGRyZW5dLmluZGV4T2YoYWN0aXZlU2xpZGUpICsgb2Zmc2V0O1xuICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICBuZXdJbmRleCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0luZGV4ID49IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgbmV3SW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMuY2hpbGRyZW5bbmV3SW5kZXhdLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSBhY3RpdmVTbGlkZS5kYXRhc2V0LmFjdGl2ZTtcbiAgICAgIFxuICAgICAgY29uc3QgY2lyY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtbmF2XCIpO1xuICAgIGNvbnN0IGFjdGl2ZUNpcmNsZSA9IGNpcmNsZXMucXVlcnlTZWxlY3RvcihcIltkYXRhLWFjdGl2ZV1cIik7XG5cbiAgICBjaXJjbGVzLmNoaWxkcmVuW25ld0luZGV4XS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgZGVsZXRlIGFjdGl2ZUNpcmNsZS5kYXRhc2V0LmFjdGl2ZTtcblxuICAgICAgc2V0VGltZW91dChzdGFydEludGVydmFsLCAwKVxuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIHNsaWRlcyB3aXRoIGNpcmNsZXNcblxuICAgXG5cbiAgfSk7XG5cbiAgcmV0dXJuIGNhcm91c2VsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBnaXRIdWJMb2dvIGZyb20gJy4uL2ltYWdlcy9naXRodWItbWFyay13aGl0ZS5wbmcnXG5cbmNvbnN0IEZvb3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJlbnRcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0aHViLnNyYyA9IGdpdEh1YkxvZ287XG4gIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1sb2dvJylcbiAgZ2l0aHViLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImdpdGh1YiBsb2dvXCIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcblxuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVzZXJuYW1lXCIpO1xuICB1c2VybmFtZS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9lZGVuc2FsdC9yZXN0YXVyYW50LXBhZ2VcIj5AZWRlbnNhbHQ8L2E+YDtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgdG9BYm91dE1vYmlsZSwgdG9Db250YWN0TW9iaWxlLCB0b0hvdXJzTW9iaWxlLCB0b01lbnVNb2JpbGUgfSBmcm9tIFwiLi4vbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IG1vYmlsZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG5cbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2JpbGUtbWVudS1wb3B1cFwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtbGluay1tb2JpbGVcIik7XG4gIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0b01lbnVNb2JpbGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LWxpbmstbW9iaWxlXCIpO1xuICBhYm91dC5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICBhYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRvQWJvdXRNb2JpbGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob3Vycy5pbm5lckhUTUwgPSBcIkhvdXJzXCI7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIFwiaG91cnMtbGluay1tb2JpbGVcIik7XG4gIGhvdXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9Ib3Vyc01vYmlsZSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbGluay1tb2JpbGVcIik7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0b0NvbnRhY3RNb2JpbGUoKTtcbiAgfSk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChob3Vycyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVOYXY7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHRvTW9iaWxlTmF2IH0gZnJvbSBcIi4uL25hdmlnYXRpb24vdG9fbW9iaWxlX25hdlwiO1xuXG5jb25zdCBOYXZCYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyZW50XCIpO1xuXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhclwiKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nby1saW5rXCIpO1xuICBsb2dvLmlubmVySFRNTCA9IFwiTmVvbiBDYWZlXCI7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWxpbmtcIik7XG4gIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LWxpbmtcIik7XG4gIGFib3V0LmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob3Vycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJzLWxpbmtcIik7XG4gIGhvdXJzLmlubmVySFRNTCA9IFwiSG91cnNcIjtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWxpbmtcIik7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgbW9iaWxlTWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vYmlsZU1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2JpbGUtbWVudS1kaXZcIik7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzNlwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDk2IDk2MCA5NjBcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjM2XCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LXN2Z1wiKTtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG4gIHN2Zy5pbm5lckhUTUwgPVxuICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcblxuICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhZ2VDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFnZS1jb250ZW50XCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dCk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudURpdik7XG4gIG1vYmlsZU1lbnVEaXYuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbiAgdG9Nb2JpbGVOYXYoKTtcblxuICByZXR1cm4gbmF2QmFyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IGltYWdlMSBmcm9tICcuLi9pbWFnZXMvc2xpZGVyLTEuanBnJztcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vaW1hZ2VzL3NsaWRlci0yLmpwZyc7XG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uL2ltYWdlcy9zbGlkZXItMy5qcGcnO1xuaW1wb3J0IGltYWdlNCBmcm9tICcuLi9pbWFnZXMvc2xpZGVyLTQuanBnJztcblxuXG5leHBvcnQgY29uc3QgYWJvdXRVc1RleHQgPSBgV2VsY29tZSB0byBOZW9uIENhZmUsIHdoZXJlIGNyZWF0aXZpdHkgYW5kIGNvbW11bml0eSBjb21lIHRvZ2V0aGVyIG92ZXIgYSBjdXAgb2YgZXhwZXJ0bHktY3JhZnRlZCBjb2ZmZWUgYW5kIGhvbWVtYWRlIHBhc3RyaWVzLlxuPGJyIC8+XG48YnIgLz5cblxuT3VyIGNhZmUgd2FzIGZvdW5kZWQgd2l0aCB0aGUgdmlzaW9uIG9mIHByb3ZpZGluZyBhIHdlbGNvbWluZyBhbmQgaW5zcGlyaW5nIGVudmlyb25tZW50IGZvciBwZW9wbGUgdG8gZ2F0aGVyLCBjb25uZWN0LCBhbmQgaW5kdWxnZSBpbiB0aGVpciBwYXNzaW9uIGZvciBncmVhdCBjb2ZmZWUuIFdoZXRoZXIgeW91J3JlIGxvb2tpbmcgdG8gd29yayBvbiBhIHByb2plY3QsIGNhdGNoIHVwIHdpdGggZnJpZW5kcywgb3Igc2ltcGx5IHJlbGF4IHdpdGggYSBnb29kIGJvb2ssIG91ciBzcGFjZSBpcyBkZXNpZ25lZCB0byBhY2NvbW1vZGF0ZSB5b3VyIG5lZWRzLlxuPGJyIC8+XG48YnIgLz5cblxuQnV0IE5lb24gQ2FmZSBpcyBtb3JlIHRoYW4ganVzdCBhIHBsYWNlIHRvIGVuam95IGEgY3VwIG9mIGNvZmZlZS4gV2Ugd2FudCB0byBmb3N0ZXIgYSBjdWx0dXJlIG9mIGNyZWF0aXZpdHksIHdoZXJlIHBlb3BsZSBjYW4gY29tZSB0b2dldGhlciB0byBzaGFyZSB0aGVpciBpZGVhcyBhbmQgaW5zcGlyYXRpb25zLiBUaGF0J3Mgd2h5IHdlIG9mZmVyIGEgcmFuZ2Ugb2YgZXZlbnRzIGFuZCBhY3Rpdml0aWVzLCBmcm9tIG9wZW4gbWljIG5pZ2h0cyB0byBhcnQgc2hvd3MsIHRvIGJyaW5nIHRvZ2V0aGVyIHRoZSBsb2NhbCBjcmVhdGl2ZSBjb21tdW5pdHkuXG48YnIgLz5cbjxiciAvPlxuXG5PZiBjb3Vyc2UsIGF0IHRoZSBoZWFydCBvZiBvdXIgY2FmZSBpcyBvdXIgY29tbWl0bWVudCB0byBxdWFsaXR5LiBXZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgb25seSB0aGUgYmVzdCBjb2ZmZWUsIHNvdXJjZWQgZnJvbSB0aGUgZmluZXN0IGJlYW5zIGFuZCBleHBlcnRseSBwcmVwYXJlZCBieSBvdXIgc2tpbGxlZCBiYXJpc3Rhcy4gQW5kIG91ciBwYXN0cmllcyBhcmUgbWFkZSBmcmVzaCBlYWNoIGRheSwgdXNpbmcgb25seSB0aGUgZmluZXN0IGluZ3JlZGllbnRzLlxuPGJyIC8+XG48YnIgLz5cblxuV2UgYmVsaWV2ZSB0aGF0IGdyZWF0IGNvZmZlZSwgZGVsaWNpb3VzIGZvb2QsIGFuZCBhIHdlbGNvbWluZyBhdG1vc3BoZXJlIGFyZSBlc3NlbnRpYWwgaW5ncmVkaWVudHMgZm9yIGEgZnVsZmlsbGluZyBjYWZlIGV4cGVyaWVuY2UuIENvbWUgam9pbiB1cyBhdCBOZW9uIENhZmUgYW5kIHNlZSBmb3IgeW91cnNlbGYgd2hhdCBtYWtlcyB1cyBkaWZmZXJlbnQuYDtcblxuZXhwb3J0IGNvbnN0IGNvZmZlZU1lbnUgPSBbXG4gIHtcbiAgICBpdGVtOiBcIkVzcHJlc3NvIE1hY2NoaWF0b1wiLFxuICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIGEgZG9sbG9wIG9mIGZvYW1lZCBtaWxrIG9uIHRvcCBmb3IgYSBzdHJvbmcsIGJvbGQgZmxhdm9yLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJDb3J0YWRvXCIsXG4gICAgcHJpY2U6IFwiJDQuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBTcGFuaXNoLXN0eWxlIGRyaW5rIHdpdGggYSBzaG90IG9mIGVzcHJlc3NvIGFuZCBhbiBlcXVhbCBhbW91bnQgb2Ygc3RlYW1lZCBtaWxrLCBwZXJmZWN0IGZvciB0aG9zZSB3aG8gd2FudCBhIHN0cm9uZ2VyIHRhc3RlIHRoYW4gYSBsYXR0ZS5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiVmFuaWxsYSBMYXR0ZVwiLFxuICAgIHByaWNlOiBcIiQ1LjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2xhc3NpYyBsYXR0ZSB3aXRoIGEgdG91Y2ggb2YgdmFuaWxsYSBzeXJ1cCwgYSBzd2VldCBhbmQgY3JlYW15IG9wdGlvbi5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiUG91cm92ZXJcIixcbiAgICBwcmljZTogXCIkNS4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJGcmVzaGx5IGJyZXdlZCBjb2ZmZWUgbWFkZSB0byBvcmRlciB1c2luZyBhIHBvdXItb3ZlciBtZXRob2QsIGFsbG93aW5nIGZvciBhIGZ1bGwtYm9kaWVkIGFuZCBmbGF2b3JmdWwgY3VwLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJNb2NoYVwiLFxuICAgIHByaWNlOiBcIiQ2LjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgbGF0dGUgd2l0aCBjaG9jb2xhdGUgc3lydXAsIHBlcmZlY3QgZm9yIHRob3NlIHdpdGggYSBzd2VldCB0b290aC5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiTml0cm8gQ29sZCBCcmV3XCIsXG4gICAgcHJpY2U6IFwiJDUuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzbW9vdGggYW5kIGNyZWFteSBjb2ZmZWUgd2l0aCBhIGZvYW15IGhlYWQgdGhhdCdzIGluZnVzZWQgd2l0aCBuaXRyb2dlbiBmb3IgYSB1bmlxdWUgdGFzdGUgYW5kIHRleHR1cmUuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZm9vZE1lbnUgPSBbXG4gIHtcbiAgICBpdGVtOiBcIkNyb2lzc2FudFwiLFxuICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2xhc3NpYyBGcmVuY2ggcGFzdHJ5IG1hZGUgd2l0aCBsYXllcnMgb2YgYnV0dGVyeSBkb3VnaCwgcGVyZmVjdCBmb3IgYnJlYWtmYXN0IG9yIGEgc25hY2suXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkJsdWViZXJyeSBNdWZmaW5cIixcbiAgICBwcmljZTogXCIkNC4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIG1vaXN0IGFuZCBmbHVmZnkgbXVmZmluIGxvYWRlZCB3aXRoIGZyZXNoIGJsdWViZXJyaWVzLCBhIHN3ZWV0IGFuZCBmcnVpdHkgdHJlYXQuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkNpbm5hbW9uIFJvbGxcIixcbiAgICBwcmljZTogXCIkNC41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNvZnQgYW5kIGZsdWZmeSByb2xsIGZpbGxlZCB3aXRoIGNpbm5hbW9uIGFuZCBzdWdhciBhbmQgdG9wcGVkIHdpdGggYSBjcmVhbXkgaWNpbmcsIGEgY29tZm9ydGluZyBhbmQgaW5kdWxnZW50IHRyZWF0LlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJDaG9jb2xhdGUgQ3JvaXNzYW50XCIsXG4gICAgcHJpY2U6IFwiJDQuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBmbGFreSBjcm9pc3NhbnQgZmlsbGVkIHdpdGggcmljaCBjaG9jb2xhdGUsIHBlcmZlY3QgZm9yIGEgc3dlZXQgYW5kIGRlY2FkZW50IGJyZWFrZmFzdCBvciBzbmFjay5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQmFnZWxcIixcbiAgICBwcmljZTogXCIkMy41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNoZXd5LCBmcmVzaGx5LWJha2VkIGJhZ2VsIHdpdGggeW91ciBjaG9pY2Ugb2YgdG9wcGluZ3Mgc3VjaCBhcyBjcmVhbSBjaGVlc2UsIGJ1dHRlciwgb3IgamFtLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJMZW1vbiBQb3BweXNlZWQgU2NvbmVcIixcbiAgICBwcmljZTogXCIkNC4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHRlbmRlciBzY29uZSB3aXRoIGEgYnJpZ2h0IGxlbW9uIGZsYXZvciBhbmQgYSBwb3Agb2YgY3J1bmNoIGZyb20gcG9wcHlzZWVkcywgYSBwZXJmZWN0IGJyZWFrZmFzdCBvciB0ZWEtdGltZSB0cmVhdC5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBob3VycyA9IFtcbiAgeyBkYXlPZldlZWs6IFwiTW9uZGF5IC0gVGh1cnNkYXlcIiwgaG91cnM6IFwiNjowMGFtIC0gMTA6MDBwbVwiIH0sXG4gIHsgZGF5T2ZXZWVrOiBcIkZyaWRheSAtIFNhdHVyZGF5XCIsIGhvdXJzOiBcIjc6MDBhbSAtIDEyOjAwcG1cIiB9LFxuICB7IGRheU9mV2VlazogXCJTdW5kYXlcIiwgaG91cnM6IFwiNzowMGFtIC0gMTA6MDBwbVwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VQYXRocyA9IFtcbiAge3NyYzogaW1hZ2UxLCBhbHQ6ICdtYW4gaG9sZGluZyBhIGNvZmZlZSBjdXAnLCBmaXJzdDogJ2RhdGEtYWN0aXZlJ30sXG4gIHtzcmM6IGltYWdlMiwgYWx0OiAnY2FwcHVjY2lubyBpbiBmcm9udCBvZiBhIG5lb24gRSBzaWduJ30sXG4gIHtzcmM6IGltYWdlMywgYWx0OiAnd29tYW4gZHJpbmtpbmcgY29mZmVlIGluIGZyb250IG9mIGEgbmVvbiBzaWduJ30sXG4gIHtzcmM6IGltYWdlNCwgYWx0OiAnZXNwcmVzc28gaW4gYSBkaW1seSBsaXQgcm9vbSd9LFxuXTsiLCJleHBvcnQgeyB0b0hvbWUsIHRvSG9tZU1vYmlsZSB9IGZyb20gJy4vdG9faG9tZSc7XG5leHBvcnQgeyB0b01lbnUsIHRvTWVudU1vYmlsZSB9IGZyb20gJy4vdG9fbWVudSc7XG5leHBvcnQgeyB0b0Fib3V0LCB0b0Fib3V0TW9iaWxlIH0gZnJvbSAnLi90b19hYm91dCc7XG5leHBvcnQgeyB0b0hvdXJzLCB0b0hvdXJzTW9iaWxlIH0gZnJvbSAnLi90b19ob3Vycyc7XG5leHBvcnQgeyB0b0NvbnRhY3QsIHRvQ29udGFjdE1vYmlsZSB9IGZyb20gJy4vdG9fY29udGFjdCc7XG4iLCJpbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xuXG5jb25zdCB0b0Fib3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0LWxpbmsnKVxuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIEFib3V0UGFnZSgpO1xuICAgIH0pXG59O1xuXG5jb25zdCB0b0Fib3V0TW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIEFib3V0UGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvQWJvdXQsIHRvQWJvdXRNb2JpbGUgfTsiLCJpbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2NvbnRhY3RcIjtcblxuY29uc3QgdG9Db250YWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1saW5rJyk7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBDb250YWN0UGFnZSgpO1xuICAgIH0pXG59O1xuXG5jb25zdCB0b0NvbnRhY3RNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgQ29udGFjdFBhZ2UoKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXN2Z1wiKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG59O1xuXG5leHBvcnQgeyB0b0NvbnRhY3QsIHRvQ29udGFjdE1vYmlsZSB9IiwiaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuLi9wYWdlcy9ob21lcGFnZVwiO1xuXG5jb25zdCB0b0hvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvLWxpbmsnKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIEhvbWVQYWdlKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHRvSG9tZU1vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBIb21lUGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvSG9tZSwgdG9Ib21lTW9iaWxlIH07IiwiaW1wb3J0IEhvdXJzUGFnZSBmcm9tIFwiLi4vcGFnZXMvaG91cnNcIjtcblxuY29uc3QgdG9Ib3VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBob3Vyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3Vycy1saW5rJylcbiAgICBob3Vyc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBIb3Vyc1BhZ2UoKTtcbiAgICB9KVxufTtcblxuY29uc3QgdG9Ib3Vyc01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBIb3Vyc1BhZ2UoKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXN2Z1wiKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG59O1xuXG5leHBvcnQgeyB0b0hvdXJzLCB0b0hvdXJzTW9iaWxlfTsiLCJpbXBvcnQgTWVudVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcblxuY29uc3QgdG9NZW51ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWxpbmtcIik7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBNZW51UGFnZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvTWVudU1vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIHBhZ2UhJylcbiAgICBNZW51UGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvTWVudSwgdG9NZW51TW9iaWxlIH07XG4iLCJpbXBvcnQgbW9iaWxlTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL21vYmlsZV9uYXZcIjtcblxuY29uc3QgdG9Nb2JpbGVOYXYgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbW9iaWxlTmF2KCk7XG4gICAgaWYgKG1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICBtb2JpbGVOYXYoKTtcbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJtMjQ5IDg0OS00Mi00MiAyMzEtMjMxLTIzMS0yMzEgNDItNDIgMjMxIDIzMSAyMzEtMjMxIDQyIDQyLTIzMSAyMzEgMjMxIDIzMS00MiA0Mi0yMzEtMjMxLTIzMSAyMzFaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZWRcIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyB0b01vYmlsZU5hdiB9O1xuIiwiaW1wb3J0IHsgYWJvdXRVc1RleHQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEFib3V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIkFib3V0IFVzXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhLmlubmVySFRNTCA9IGFib3V0VXNUZXh0O1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGltYWdlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbGRlclwiKTtcbiAgaW1hZ2VzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJQaG90b3Mgb2YgdGhlIGNvZmZlZSBzaG9wXCIpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZXMpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2U7XG4iLCJjb25zdCBDb250YWN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdCB1c1wiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBob25lLmlubmVySFRNTCA9IGA8YSBocmVmPVwidGVsOisxLTU1NS01NTUtNTU1NVwiPjU1NS01NTUtNTU1NTwvYT5gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsLmlubmVySFRNTCA9IGA8YSBocmVmPVwibWFpbHRvOmhlbGxvQG5lb25jb2ZmZWUuY29tXCI8L2E+aGVsbG9AbmVvbmNvZmZlZS5jb208L2E+YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gXCIxMDAgQW1hemluZyBTdCwgQXdlc29tZSBDaXR5LCBTVFwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuIiwiaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL2Nhcm91c2VsXCI7XG5pbXBvcnQgY29mZmVlSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9uZW9uLWNvZmZlZS1zaWduLmpwZ1wiO1xuXG5jb25zdCBIb21lUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgLy8gVGVzdGluZyBvbmx5IC0gcmVtb3ZlIHdoZW4gZG9uZVxuXG4gIGNvbnN0IGltYWdlc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaW1hZ2VzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlcy1zZWN0aW9uXCIpO1xuICBpbWFnZXNTZWN0aW9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJyb3RhdGluZyBpbWFnZXMgb2YgY29mZmVlIHNob3BcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZXNTZWN0aW9uKTtcblxuICBDYXJvdXNlbCgpO1xuXG4gIGNvbnN0IGNvZmZlZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb2ZmZWVJbWcuc3JjID0gY29mZmVlSW1hZ2U7XG4gIGNvZmZlZUltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJuZW9uIGNvZmZlZSBzaWduXCIpO1xuICBjb2ZmZWVJbWcuY2xhc3NMaXN0LmFkZChcImZsaWNrZXJcIik7XG4gIGNvZmZlZUltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2ZmZWVJbWcuY2xhc3NMaXN0LnJlbW92ZShcImZsaWNrZXJcIik7XG4gICAgfSwgMTgwMCk7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlSW1nKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgeyBob3VycyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBzaWduSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9waW5rLWNvZmZlZS1zbG9nYW4uanBnXCJcblxuY29uc3QgSG91cnNQYWdlID0gZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3Vyc1wiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGxlZnRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb2wpO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIk91ciBIb3Vyc1wiO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGVmdENvbC5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG5cbiAgaG91cnMuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGl0ZW1EaXYuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkYXlPZldlZWsudGV4dENvbnRlbnQgPSBkYXkuZGF5T2ZXZWVrO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnMudGV4dENvbnRlbnQgPSBkYXkuaG91cnM7XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGRheU9mV2Vlayk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICBzY2hlZHVsZS5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICB9KVxuXG4gIGNvbnN0IHNpZ25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzaWduSW1nLnNyYyA9IHNpZ25JbWFnZTtcbiAgICBzaWduSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIm5lb24gY29mZmVlIHNpZ25cIik7XG4gICAgc2lnbkltZy5jbGFzc0xpc3QuYWRkKCdmbGlja2VyJyk7XG4gICAgc2lnbkltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2lnbkltZy5jbGFzc0xpc3QucmVtb3ZlKCdmbGlja2VyJyk7XG4gICAgICAgICAgfSwgMTgwMCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZ25JbWcpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3Vyc1BhZ2U7XG4iLCJpbXBvcnQgeyBjb2ZmZWVNZW51LCBmb29kTWVudSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgTWVudVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBDb2ZmZWUgbWVudVxuXG4gIGNvbnN0IGxlZnRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb2wpO1xuXG4gIGNvbnN0IGNvZmZlZVN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb2ZmZWVTdWJ0aXRsZS5pbm5lckhUTUwgPSBcIk91ciBDb2ZmZWUgTWVudVwiO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKGNvZmZlZVN1YnRpdGxlKTtcblxuICBjb25zdCBjb2ZmZWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKGNvZmZlZUxpc3QpO1xuXG4gIGNvZmZlZU1lbnUuZm9yRWFjaCgob2ZmZXJpbmcsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbURpdi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBvZmZlcmluZy5pdGVtO1xuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IG9mZmVyaW5nLnByaWNlO1xuXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9mZmVyaW5nLmRlc2NyaXB0aW9uO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICAgIGNvZmZlZUxpc3QuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cbiAgfSlcblxuICAvL0Zvb2QgbWVudVxuXG4gIGNvbnN0IHJpZ2h0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodENvbCk7XG5cbiAgY29uc3QgZm9vZFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBmb29kU3VidGl0bGUuaW5uZXJIVE1MID0gXCJPdXIgRm9vZCBNZW51XCI7XG4gIHJpZ2h0Q29sLmFwcGVuZENoaWxkKGZvb2RTdWJ0aXRsZSk7XG5cbiAgY29uc3QgZm9vZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHJpZ2h0Q29sLmFwcGVuZENoaWxkKGZvb2RMaXN0KTtcblxuICBmb29kTWVudS5mb3JFYWNoKChvZmZlcmluZywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtRGl2LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG9mZmVyaW5nLml0ZW07XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gb2ZmZXJpbmcucHJpY2U7XG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2ZmZXJpbmcuZGVzY3JpcHRpb247XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgZm9vZExpc3QuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cbiAgfSlcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL2hvbWVwYWdlJztcbmltcG9ydCB7IHRvTWVudSwgdG9Ib21lLCB0b0Fib3V0LCB0b0hvdXJzLCB0b0NvbnRhY3QgfSBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcblxuXG5jb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGFyZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFyZW50XCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYXJlbnQpO1xuXG5cbk5hdkJhcigpO1xuSG9tZVBhZ2UoKTtcbkZvb3RlcigpO1xuXG50b01lbnUoKTtcbnRvSG9tZSgpO1xudG9BYm91dCgpO1xudG9Ib3VycygpO1xudG9Db250YWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9