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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"NeonFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\nbody {\n  background-color: black;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home > img,\n#hours > img {\n  width: 350px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n#holder,\n#holder > div {\n  width: 100vw;\n  min-height: 100px;\n  background-color: rgba(255, 184, 246, 0.434);\n}\n\n.carousel-list {\n  all: unset;\n  display: flex;\n  overflow: scroll;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel-image {\n  max-height: 480px;\n  max-width: 33%;\n  padding: 10px;\n  align-self: center;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #home,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"NeonFont\";\n  src: url(\"./fonts/Neonderthaw-Regular.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\nbody {\n  background-color: black;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#home > img,\n#hours > img {\n  width: 350px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n#holder,\n#holder > div {\n  width: 100vw;\n  min-height: 100px;\n  background-color: rgba(255, 184, 246, 0.434);\n}\n\n.carousel-list {\n  all: unset;\n  display: flex;\n  overflow: scroll;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel-image {\n  max-height: 480px;\n  max-width: 33%;\n  padding: 10px;\n  align-self: center;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #home,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
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
  const parent = document.querySelector("#holder");

  const carousel = document.createElement("div");
  parent.appendChild(carousel);

  const list = document.createElement("ul");
  list.setAttribute("id", "carousel-list");
  carousel.appendChild(list);

  _constants__WEBPACK_IMPORTED_MODULE_0__.imagePaths.forEach((img) => {
    const li = document.createElement("li");
    const image = document.createElement("img");
    image.setAttribute("src", img.src);
    image.setAttribute("alt", img.alt);
    image.classList.add("carousel-image");
    li.appendChild(image);
    list.appendChild(li);
  })

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
  {src: _images_slider_1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], alt: 'man holding a coffee cup'},
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



const HomePage = function() {

    const content = document.querySelector("#page-content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const container = document.createElement('div');
    container.setAttribute("id", "home");
    content.appendChild(container);

    // Testing only - remove when done

    const images = document.createElement("div");
    images.setAttribute("id", "holder");
    container.appendChild(images);

    (0,_components_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const coffeeImg = new Image();
    coffeeImg.src = _images_neon_coffee_sign_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
    coffeeImg.setAttribute("alt", "neon coffee sign");
    coffeeImg.classList.add('flicker');
    coffeeImg.addEventListener('load', () => {
        setTimeout(() => {
            coffeeImg.classList.remove('flicker');
        }, 1800);
    });
    container.appendChild(coffeeImg);

    return container;

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0scUNB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Ozs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUNEO0FBQ21DO0FBQ2xDOzs7QUFHekM7QUFDQTtBQUNBOzs7QUFHQSw4REFBTTtBQUNOLDJEQUFRO0FBQ1IsOERBQU07O0FBRU4sbURBQU07QUFDTixtREFBTTtBQUNOLG9EQUFPO0FBQ1Asb0RBQU87QUFDUCxzREFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9naXRodWItbWFyay13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9uZW9uLWNvZmZlZS1zaWduLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL3BpbmstY29mZmVlLXNsb2dhbi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9zbGlkZXItMS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9zbGlkZXItMi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9zbGlkZXItMy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9zbGlkZXItNC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21vYmlsZV9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9fYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9fY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uL3RvX2hvdXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uL3RvX21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9fbW9iaWxlX25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob3Vycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OZW9uZGVydGhhdy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZW9uRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXIge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmZsaWNrZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaWNrZXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogLTEwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ubGluayB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiBpbml0aWFsO1xcbiAgbWFyZ2luOiBpbml0aWFsO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhvbWVwYWdlIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Mik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbiNuYXZiYXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXZiYXIgPiAqOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vYmlsZS1tZW51LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNtZW51LXN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVvbkZvbnRcXFwiO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNob21lID4gaW1nLFxcbiNob3VycyA+IGltZyB7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmRheSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI2hvdXJzLFxcbiNtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtZW51ID4gZGl2IHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm90dG9tOiAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Mik7XFxufVxcblxcbiNnaXRodWItbG9nbyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi8qIEZvciBpbWFnZSBjYXJvdXNlbCAqL1xcblxcbiNob2xkZXIsXFxuI2hvbGRlciA+IGRpdiB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODQsIDI0NiwgMC40MzQpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtbGlzdCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbC1pbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1heC13aWR0aDogMzMlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgZm9yIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggb3IgbGVzcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICNwYWdlLWNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICBidXR0b24ubGluayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gICNtZW51LFxcbiAgI2hvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNtZW51ID4gZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAjaG9tZSxcXG4gICNob3VycyA+IGltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAjbWVudS1zdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1kaXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNDVweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDk1LCA5NSwgOTUsIDAuNDI3KTtcXG4gICAgei1pbmRleDogMTA7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAgPiBidXR0b24ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAgPiBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QiwrREFBOEQ7RUFDOUQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFFBQVE7RUFDUixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsK0NBQStDO0lBQy9DLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZW9uRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9OZW9uZGVydGhhdy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mbGlja2VyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlja2VyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IC0xMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmxpbmsge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIG1hcmdpbjogaW5pdGlhbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ob21lcGFnZSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuI25hdmJhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4jbmF2YmFyID4gKiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyID4gKjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2JpbGUtbWVudS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbWVudS1zdmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG59XFxuXFxuI3BhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbmgyLFxcbmgzLFxcbmg0LFxcbnAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxufVxcblxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSA+IGltZyxcXG4jaG91cnMgPiBpbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5kYXkge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbiNob3VycyxcXG4jbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWVudSA+IGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbn1cXG5cXG4jZ2l0aHViLWxvZ28ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4vKiBGb3IgaW1hZ2UgY2Fyb3VzZWwgKi9cXG5cXG4jaG9sZGVyLFxcbiNob2xkZXIgPiBkaXYge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTg0LCAyNDYsIDAuNDM0KTtcXG59XFxuXFxuLmNhcm91c2VsLWxpc3Qge1xcbiAgYWxsOiB1bnNldDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogNDgwcHg7XFxuICBtYXgtd2lkdGg6IDMzJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IG9yIGxlc3MgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjcGFnZS1jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLmxpbmsge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjbWVudSxcXG4gICNob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjbWVudSA+IGRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgI2hvbWUsXFxuICAjaG91cnMgPiBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgI21lbnUtc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtZGl2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDQ1cHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSg5NSwgOTUsIDk1LCAwLjQyNyk7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwID4gYnV0dG9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGluay1jb2ZmZWUtc2xvZ2FuLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0yLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0zLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci00LmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW1hZ2VQYXRocyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuXG5jb25zdCBDYXJvdXNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob2xkZXJcIik7XG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJvdXNlbC1saXN0XCIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChsaXN0KTtcblxuICBpbWFnZVBhdGhzLmZvckVhY2goKGltZykgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nLnNyYyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGltZy5hbHQpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pbWFnZVwiKTtcbiAgICBsaS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pXG5cbiAgcmV0dXJuIGNhcm91c2VsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBnaXRIdWJMb2dvIGZyb20gJy4uL2ltYWdlcy9naXRodWItbWFyay13aGl0ZS5wbmcnXG5cbmNvbnN0IEZvb3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJlbnRcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0aHViLnNyYyA9IGdpdEh1YkxvZ287XG4gIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1sb2dvJylcbiAgZ2l0aHViLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImdpdGh1YiBsb2dvXCIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcblxuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVzZXJuYW1lXCIpO1xuICB1c2VybmFtZS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9lZGVuc2FsdC9yZXN0YXVyYW50LXBhZ2VcIj5AZWRlbnNhbHQ8L2E+YDtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgdG9BYm91dE1vYmlsZSwgdG9Db250YWN0TW9iaWxlLCB0b0hvdXJzTW9iaWxlLCB0b01lbnVNb2JpbGUgfSBmcm9tIFwiLi4vbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IG1vYmlsZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG5cbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2JpbGUtbWVudS1wb3B1cFwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtbGluay1tb2JpbGVcIik7XG4gIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0b01lbnVNb2JpbGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LWxpbmstbW9iaWxlXCIpO1xuICBhYm91dC5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICBhYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRvQWJvdXRNb2JpbGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob3Vycy5pbm5lckhUTUwgPSBcIkhvdXJzXCI7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIFwiaG91cnMtbGluay1tb2JpbGVcIik7XG4gIGhvdXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9Ib3Vyc01vYmlsZSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtbGluay1tb2JpbGVcIik7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0b0NvbnRhY3RNb2JpbGUoKTtcbiAgfSk7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChob3Vycyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVOYXY7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHRvTW9iaWxlTmF2IH0gZnJvbSBcIi4uL25hdmlnYXRpb24vdG9fbW9iaWxlX25hdlwiO1xuXG5jb25zdCBOYXZCYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyZW50XCIpO1xuXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhclwiKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nby1saW5rXCIpO1xuICBsb2dvLmlubmVySFRNTCA9IFwiTmVvbiBDYWZlXCI7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWxpbmtcIik7XG4gIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LWxpbmtcIik7XG4gIGFib3V0LmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob3Vycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJzLWxpbmtcIik7XG4gIGhvdXJzLmlubmVySFRNTCA9IFwiSG91cnNcIjtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWxpbmtcIik7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XG5cbiAgY29uc3QgbW9iaWxlTWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vYmlsZU1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2JpbGUtbWVudS1kaXZcIik7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzNlwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDk2IDk2MCA5NjBcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjM2XCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LXN2Z1wiKTtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG4gIHN2Zy5pbm5lckhUTUwgPVxuICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcblxuICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhZ2VDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFnZS1jb250ZW50XCIpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dCk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobW9iaWxlTWVudURpdik7XG4gIG1vYmlsZU1lbnVEaXYuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbiAgdG9Nb2JpbGVOYXYoKTtcblxuICByZXR1cm4gbmF2QmFyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IGltYWdlMSBmcm9tICcuLi9pbWFnZXMvc2xpZGVyLTEuanBnJztcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vaW1hZ2VzL3NsaWRlci0yLmpwZyc7XG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uL2ltYWdlcy9zbGlkZXItMy5qcGcnO1xuaW1wb3J0IGltYWdlNCBmcm9tICcuLi9pbWFnZXMvc2xpZGVyLTQuanBnJztcblxuXG5leHBvcnQgY29uc3QgYWJvdXRVc1RleHQgPSBgV2VsY29tZSB0byBOZW9uIENhZmUsIHdoZXJlIGNyZWF0aXZpdHkgYW5kIGNvbW11bml0eSBjb21lIHRvZ2V0aGVyIG92ZXIgYSBjdXAgb2YgZXhwZXJ0bHktY3JhZnRlZCBjb2ZmZWUgYW5kIGhvbWVtYWRlIHBhc3RyaWVzLlxuPGJyIC8+XG48YnIgLz5cblxuT3VyIGNhZmUgd2FzIGZvdW5kZWQgd2l0aCB0aGUgdmlzaW9uIG9mIHByb3ZpZGluZyBhIHdlbGNvbWluZyBhbmQgaW5zcGlyaW5nIGVudmlyb25tZW50IGZvciBwZW9wbGUgdG8gZ2F0aGVyLCBjb25uZWN0LCBhbmQgaW5kdWxnZSBpbiB0aGVpciBwYXNzaW9uIGZvciBncmVhdCBjb2ZmZWUuIFdoZXRoZXIgeW91J3JlIGxvb2tpbmcgdG8gd29yayBvbiBhIHByb2plY3QsIGNhdGNoIHVwIHdpdGggZnJpZW5kcywgb3Igc2ltcGx5IHJlbGF4IHdpdGggYSBnb29kIGJvb2ssIG91ciBzcGFjZSBpcyBkZXNpZ25lZCB0byBhY2NvbW1vZGF0ZSB5b3VyIG5lZWRzLlxuPGJyIC8+XG48YnIgLz5cblxuQnV0IE5lb24gQ2FmZSBpcyBtb3JlIHRoYW4ganVzdCBhIHBsYWNlIHRvIGVuam95IGEgY3VwIG9mIGNvZmZlZS4gV2Ugd2FudCB0byBmb3N0ZXIgYSBjdWx0dXJlIG9mIGNyZWF0aXZpdHksIHdoZXJlIHBlb3BsZSBjYW4gY29tZSB0b2dldGhlciB0byBzaGFyZSB0aGVpciBpZGVhcyBhbmQgaW5zcGlyYXRpb25zLiBUaGF0J3Mgd2h5IHdlIG9mZmVyIGEgcmFuZ2Ugb2YgZXZlbnRzIGFuZCBhY3Rpdml0aWVzLCBmcm9tIG9wZW4gbWljIG5pZ2h0cyB0byBhcnQgc2hvd3MsIHRvIGJyaW5nIHRvZ2V0aGVyIHRoZSBsb2NhbCBjcmVhdGl2ZSBjb21tdW5pdHkuXG48YnIgLz5cbjxiciAvPlxuXG5PZiBjb3Vyc2UsIGF0IHRoZSBoZWFydCBvZiBvdXIgY2FmZSBpcyBvdXIgY29tbWl0bWVudCB0byBxdWFsaXR5LiBXZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgb25seSB0aGUgYmVzdCBjb2ZmZWUsIHNvdXJjZWQgZnJvbSB0aGUgZmluZXN0IGJlYW5zIGFuZCBleHBlcnRseSBwcmVwYXJlZCBieSBvdXIgc2tpbGxlZCBiYXJpc3Rhcy4gQW5kIG91ciBwYXN0cmllcyBhcmUgbWFkZSBmcmVzaCBlYWNoIGRheSwgdXNpbmcgb25seSB0aGUgZmluZXN0IGluZ3JlZGllbnRzLlxuPGJyIC8+XG48YnIgLz5cblxuV2UgYmVsaWV2ZSB0aGF0IGdyZWF0IGNvZmZlZSwgZGVsaWNpb3VzIGZvb2QsIGFuZCBhIHdlbGNvbWluZyBhdG1vc3BoZXJlIGFyZSBlc3NlbnRpYWwgaW5ncmVkaWVudHMgZm9yIGEgZnVsZmlsbGluZyBjYWZlIGV4cGVyaWVuY2UuIENvbWUgam9pbiB1cyBhdCBOZW9uIENhZmUgYW5kIHNlZSBmb3IgeW91cnNlbGYgd2hhdCBtYWtlcyB1cyBkaWZmZXJlbnQuYDtcblxuZXhwb3J0IGNvbnN0IGNvZmZlZU1lbnUgPSBbXG4gIHtcbiAgICBpdGVtOiBcIkVzcHJlc3NvIE1hY2NoaWF0b1wiLFxuICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIGEgZG9sbG9wIG9mIGZvYW1lZCBtaWxrIG9uIHRvcCBmb3IgYSBzdHJvbmcsIGJvbGQgZmxhdm9yLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJDb3J0YWRvXCIsXG4gICAgcHJpY2U6IFwiJDQuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBTcGFuaXNoLXN0eWxlIGRyaW5rIHdpdGggYSBzaG90IG9mIGVzcHJlc3NvIGFuZCBhbiBlcXVhbCBhbW91bnQgb2Ygc3RlYW1lZCBtaWxrLCBwZXJmZWN0IGZvciB0aG9zZSB3aG8gd2FudCBhIHN0cm9uZ2VyIHRhc3RlIHRoYW4gYSBsYXR0ZS5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiVmFuaWxsYSBMYXR0ZVwiLFxuICAgIHByaWNlOiBcIiQ1LjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2xhc3NpYyBsYXR0ZSB3aXRoIGEgdG91Y2ggb2YgdmFuaWxsYSBzeXJ1cCwgYSBzd2VldCBhbmQgY3JlYW15IG9wdGlvbi5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiUG91cm92ZXJcIixcbiAgICBwcmljZTogXCIkNS4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJGcmVzaGx5IGJyZXdlZCBjb2ZmZWUgbWFkZSB0byBvcmRlciB1c2luZyBhIHBvdXItb3ZlciBtZXRob2QsIGFsbG93aW5nIGZvciBhIGZ1bGwtYm9kaWVkIGFuZCBmbGF2b3JmdWwgY3VwLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJNb2NoYVwiLFxuICAgIHByaWNlOiBcIiQ2LjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgbGF0dGUgd2l0aCBjaG9jb2xhdGUgc3lydXAsIHBlcmZlY3QgZm9yIHRob3NlIHdpdGggYSBzd2VldCB0b290aC5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiTml0cm8gQ29sZCBCcmV3XCIsXG4gICAgcHJpY2U6IFwiJDUuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzbW9vdGggYW5kIGNyZWFteSBjb2ZmZWUgd2l0aCBhIGZvYW15IGhlYWQgdGhhdCdzIGluZnVzZWQgd2l0aCBuaXRyb2dlbiBmb3IgYSB1bmlxdWUgdGFzdGUgYW5kIHRleHR1cmUuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZm9vZE1lbnUgPSBbXG4gIHtcbiAgICBpdGVtOiBcIkNyb2lzc2FudFwiLFxuICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2xhc3NpYyBGcmVuY2ggcGFzdHJ5IG1hZGUgd2l0aCBsYXllcnMgb2YgYnV0dGVyeSBkb3VnaCwgcGVyZmVjdCBmb3IgYnJlYWtmYXN0IG9yIGEgc25hY2suXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkJsdWViZXJyeSBNdWZmaW5cIixcbiAgICBwcmljZTogXCIkNC4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIG1vaXN0IGFuZCBmbHVmZnkgbXVmZmluIGxvYWRlZCB3aXRoIGZyZXNoIGJsdWViZXJyaWVzLCBhIHN3ZWV0IGFuZCBmcnVpdHkgdHJlYXQuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkNpbm5hbW9uIFJvbGxcIixcbiAgICBwcmljZTogXCIkNC41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNvZnQgYW5kIGZsdWZmeSByb2xsIGZpbGxlZCB3aXRoIGNpbm5hbW9uIGFuZCBzdWdhciBhbmQgdG9wcGVkIHdpdGggYSBjcmVhbXkgaWNpbmcsIGEgY29tZm9ydGluZyBhbmQgaW5kdWxnZW50IHRyZWF0LlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJDaG9jb2xhdGUgQ3JvaXNzYW50XCIsXG4gICAgcHJpY2U6IFwiJDQuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBmbGFreSBjcm9pc3NhbnQgZmlsbGVkIHdpdGggcmljaCBjaG9jb2xhdGUsIHBlcmZlY3QgZm9yIGEgc3dlZXQgYW5kIGRlY2FkZW50IGJyZWFrZmFzdCBvciBzbmFjay5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQmFnZWxcIixcbiAgICBwcmljZTogXCIkMy41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNoZXd5LCBmcmVzaGx5LWJha2VkIGJhZ2VsIHdpdGggeW91ciBjaG9pY2Ugb2YgdG9wcGluZ3Mgc3VjaCBhcyBjcmVhbSBjaGVlc2UsIGJ1dHRlciwgb3IgamFtLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJMZW1vbiBQb3BweXNlZWQgU2NvbmVcIixcbiAgICBwcmljZTogXCIkNC4wMFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHRlbmRlciBzY29uZSB3aXRoIGEgYnJpZ2h0IGxlbW9uIGZsYXZvciBhbmQgYSBwb3Agb2YgY3J1bmNoIGZyb20gcG9wcHlzZWVkcywgYSBwZXJmZWN0IGJyZWFrZmFzdCBvciB0ZWEtdGltZSB0cmVhdC5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBob3VycyA9IFtcbiAgeyBkYXlPZldlZWs6IFwiTW9uZGF5IC0gVGh1cnNkYXlcIiwgaG91cnM6IFwiNjowMGFtIC0gMTA6MDBwbVwiIH0sXG4gIHsgZGF5T2ZXZWVrOiBcIkZyaWRheSAtIFNhdHVyZGF5XCIsIGhvdXJzOiBcIjc6MDBhbSAtIDEyOjAwcG1cIiB9LFxuICB7IGRheU9mV2VlazogXCJTdW5kYXlcIiwgaG91cnM6IFwiNzowMGFtIC0gMTA6MDBwbVwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VQYXRocyA9IFtcbiAge3NyYzogaW1hZ2UxLCBhbHQ6ICdtYW4gaG9sZGluZyBhIGNvZmZlZSBjdXAnfSxcbiAge3NyYzogaW1hZ2UyLCBhbHQ6ICdjYXBwdWNjaW5vIGluIGZyb250IG9mIGEgbmVvbiBFIHNpZ24nfSxcbiAge3NyYzogaW1hZ2UzLCBhbHQ6ICd3b21hbiBkcmlua2luZyBjb2ZmZWUgaW4gZnJvbnQgb2YgYSBuZW9uIHNpZ24nfSxcbiAge3NyYzogaW1hZ2U0LCBhbHQ6ICdlc3ByZXNzbyBpbiBhIGRpbWx5IGxpdCByb29tJ30sXG5dOyIsImV4cG9ydCB7IHRvSG9tZSwgdG9Ib21lTW9iaWxlIH0gZnJvbSAnLi90b19ob21lJztcbmV4cG9ydCB7IHRvTWVudSwgdG9NZW51TW9iaWxlIH0gZnJvbSAnLi90b19tZW51JztcbmV4cG9ydCB7IHRvQWJvdXQsIHRvQWJvdXRNb2JpbGUgfSBmcm9tICcuL3RvX2Fib3V0JztcbmV4cG9ydCB7IHRvSG91cnMsIHRvSG91cnNNb2JpbGUgfSBmcm9tICcuL3RvX2hvdXJzJztcbmV4cG9ydCB7IHRvQ29udGFjdCwgdG9Db250YWN0TW9iaWxlIH0gZnJvbSAnLi90b19jb250YWN0JztcbiIsImltcG9ydCBBYm91dFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XG5cbmNvbnN0IHRvQWJvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtbGluaycpXG4gICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgQWJvdXRQYWdlKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHRvQWJvdXRNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgQWJvdXRQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9BYm91dCwgdG9BYm91dE1vYmlsZSB9OyIsImltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi4vcGFnZXMvY29udGFjdFwiO1xuXG5jb25zdCB0b0NvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LWxpbmsnKTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIENvbnRhY3RQYWdlKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHRvQ29udGFjdE1vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBDb250YWN0UGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvQ29udGFjdCwgdG9Db250YWN0TW9iaWxlIH0iLCJpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2hvbWVwYWdlXCI7XG5cbmNvbnN0IHRvSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28tbGluaycpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgSG9tZVBhZ2UoKTtcbiAgICB9KVxufTtcblxuY29uc3QgdG9Ib21lTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIEhvbWVQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9Ib21lLCB0b0hvbWVNb2JpbGUgfTsiLCJpbXBvcnQgSG91cnNQYWdlIGZyb20gXCIuLi9wYWdlcy9ob3Vyc1wiO1xuXG5jb25zdCB0b0hvdXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhvdXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJzLWxpbmsnKVxuICAgIGhvdXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIEhvdXJzUGFnZSgpO1xuICAgIH0pXG59O1xuXG5jb25zdCB0b0hvdXJzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIEhvdXJzUGFnZSgpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtc3ZnXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbn07XG5cbmV4cG9ydCB7IHRvSG91cnMsIHRvSG91cnNNb2JpbGV9OyIsImltcG9ydCBNZW51UGFnZSBmcm9tIFwiLi4vcGFnZXMvbWVudVwiO1xuXG5jb25zdCB0b01lbnUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtbGlua1wiKTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIE1lbnVQYWdlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgdG9NZW51TW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXIgcGFnZSEnKVxuICAgIE1lbnVQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9NZW51LCB0b01lbnVNb2JpbGUgfTtcbiIsImltcG9ydCBtb2JpbGVOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9iaWxlX25hdlwiO1xuXG5jb25zdCB0b01vYmlsZU5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2JpbGVOYXYoKTtcbiAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZWRcIikpIHtcbiAgICAgIG1vYmlsZU5hdigpO1xuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIm0yNDkgODQ5LTQyLTQyIDIzMS0yMzEtMjMxLTIzMSA0Mi00MiAyMzEgMjMxIDIzMS0yMzEgNDIgNDItMjMxIDIzMSAyMzEgMjMxLTQyIDQyLTIzMS0yMzEtMjMxIDIzMVpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlZFwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwiTTEyMCA4MTZ2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFpcIi8+JztcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHRvTW9iaWxlTmF2IH07XG4iLCJpbXBvcnQgeyBhYm91dFVzVGV4dCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQWJvdXRQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgVXNcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEuaW5uZXJIVE1MID0gYWJvdXRVc1RleHQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaW1hZ2VzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9sZGVyXCIpO1xuICBpbWFnZXMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlBob3RvcyBvZiB0aGUgY29mZmVlIHNob3BcIilcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlcyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcbiIsImNvbnN0IENvbnRhY3RQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgc3VidGl0bGUuaW5uZXJIVE1MID0gXCJDb250YWN0IHVzXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGhvbmUuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJ0ZWw6KzEtNTU1LTU1NS01NTU1XCI+NTU1LTU1NS01NTU1PC9hPmA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZW1haWwuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJtYWlsdG86aGVsbG9AbmVvbmNvZmZlZS5jb21cIjwvYT5oZWxsb0BuZW9uY29mZmVlLmNvbTwvYT5gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjEwMCBBbWF6aW5nIFN0LCBBd2Vzb21lIENpdHksIFNUXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7XG4iLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJvdXNlbCc7XG5pbXBvcnQgY29mZmVlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnJztcblxuY29uc3QgSG9tZVBhZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtY29udGVudFwiKTtcblxuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gVGVzdGluZyBvbmx5IC0gcmVtb3ZlIHdoZW4gZG9uZVxuXG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob2xkZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlcyk7XG5cbiAgICBDYXJvdXNlbCgpO1xuXG4gICAgY29uc3QgY29mZmVlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29mZmVlSW1nLnNyYyA9IGNvZmZlZUltYWdlO1xuICAgIGNvZmZlZUltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJuZW9uIGNvZmZlZSBzaWduXCIpO1xuICAgIGNvZmZlZUltZy5jbGFzc0xpc3QuYWRkKCdmbGlja2VyJyk7XG4gICAgY29mZmVlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29mZmVlSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaWNrZXInKTtcbiAgICAgICAgfSwgMTgwMCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUltZyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsImltcG9ydCB7IGhvdXJzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNpZ25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3BpbmstY29mZmVlLXNsb2dhbi5qcGdcIlxuXG5jb25zdCBIb3Vyc1BhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvdXJzXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiT3VyIEhvdXJzXCI7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcblxuICBob3Vycy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgaXRlbURpdi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBjb25zdCBkYXlPZldlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRheU9mV2Vlay50ZXh0Q29udGVudCA9IGRheS5kYXlPZldlZWs7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IGRheS5ob3VycztcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZGF5T2ZXZWVrKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG4gIH0pXG5cbiAgY29uc3Qgc2lnbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHNpZ25JbWcuc3JjID0gc2lnbkltYWdlO1xuICAgIHNpZ25JbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibmVvbiBjb2ZmZWUgc2lnblwiKTtcbiAgICBzaWduSW1nLmNsYXNzTGlzdC5hZGQoJ2ZsaWNrZXInKTtcbiAgICBzaWduSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzaWduSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaWNrZXInKTtcbiAgICAgICAgICB9LCAxODAwKTtcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lnbkltZyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJzUGFnZTtcbiIsImltcG9ydCB7IGNvZmZlZU1lbnUsIGZvb2RNZW51IH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBNZW51UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtY29udGVudFwiKTtcblxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIC8vIENvZmZlZSBtZW51XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3QgY29mZmVlU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvZmZlZVN1YnRpdGxlLmlubmVySFRNTCA9IFwiT3VyIENvZmZlZSBNZW51XCI7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoY29mZmVlU3VidGl0bGUpO1xuXG4gIGNvbnN0IGNvZmZlZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoY29mZmVlTGlzdCk7XG5cbiAgY29mZmVlTWVudS5mb3JFYWNoKChvZmZlcmluZywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBpdGVtRGl2LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG9mZmVyaW5nLml0ZW07XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gb2ZmZXJpbmcucHJpY2U7XG5cbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2ZmZXJpbmcuZGVzY3JpcHRpb247XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgY29mZmVlTGlzdC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICB9KVxuXG4gIC8vRm9vZCBtZW51XG5cbiAgY29uc3QgcmlnaHRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29sKTtcblxuICBjb25zdCBmb29kU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGZvb2RTdWJ0aXRsZS5pbm5lckhUTUwgPSBcIk91ciBGb29kIE1lbnVcIjtcbiAgcmlnaHRDb2wuYXBwZW5kQ2hpbGQoZm9vZFN1YnRpdGxlKTtcblxuICBjb25zdCBmb29kTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcmlnaHRDb2wuYXBwZW5kQ2hpbGQoZm9vZExpc3QpO1xuXG4gIGZvb2RNZW51LmZvckVhY2goKG9mZmVyaW5nLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW1EaXYuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gb2ZmZXJpbmcuaXRlbTtcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBvZmZlcmluZy5wcmljZTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvZmZlcmluZy5kZXNjcmlwdGlvbjtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICBmb29kTGlzdC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51UGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvaG9tZXBhZ2UnO1xuaW1wb3J0IHsgdG9NZW51LCB0b0hvbWUsIHRvQWJvdXQsIHRvSG91cnMsIHRvQ29udGFjdCB9IGZyb20gJy4vbmF2aWdhdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuXG5cbmNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wYXJlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYXJlbnRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XG5cblxuTmF2QmFyKCk7XG5Ib21lUGFnZSgpO1xuRm9vdGVyKCk7XG5cbnRvTWVudSgpO1xudG9Ib21lKCk7XG50b0Fib3V0KCk7XG50b0hvdXJzKCk7XG50b0NvbnRhY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=