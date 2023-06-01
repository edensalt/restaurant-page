/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  _constants__WEBPACK_IMPORTED_MODULE_0__.imagePaths.forEach(img => {
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
  circle1.setAttribute("slide-btn", "0");
  circle1.setAttribute("data-active", "true");
  nav.appendChild(circle1);
  const circle2 = document.createElement("button");
  circle2.classList.add("carousel-circle");
  circle2.setAttribute("slide-btn", "1");
  nav.appendChild(circle2);
  const circle3 = document.createElement("button");
  circle3.classList.add("carousel-circle");
  circle3.setAttribute("slide-btn", "2");
  nav.appendChild(circle3);
  const circle4 = document.createElement("button");
  circle4.classList.add("carousel-circle");
  circle4.setAttribute("slide-btn", "3");
  nav.appendChild(circle4);

  // Change slide on timing

  let intervalID;
  function startInterval() {
    clearInterval(intervalID);
    intervalID = setInterval(changeSlides, 3000);
  }
  function stopInterval() {
    clearInterval(intervalID);
  }
  function changeSlides() {
    stopInterval();
    const slides = document.querySelector("[data-slides]");
    if (slides === null) {
      return;
    }
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
    setTimeout(startInterval, 0);
  }
  changeSlides();

  // Change slide with button

  const buttons = document.querySelectorAll("[data-carousel-button]");
  buttons.forEach(button => {
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
      setTimeout(startInterval, 0);
    });
  });

  // Change slides with circles

  const circles = document.querySelectorAll("[slide-btn]");
  circles.forEach(circle => {
    circle.addEventListener("click", () => {
      stopInterval();
      const index = circle.getAttribute("slide-btn");
      console.log(index);
      const slides = document.querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      slides.children[index].dataset.active = true;
      delete activeSlide.dataset.active;
      const circles = document.querySelector(".carousel-nav");
      const activeCircle = circles.querySelector("[data-active]");
      circles.children[index].dataset.active = true;
      delete activeCircle.dataset.active;
      setTimeout(startInterval, 0);
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
  github.setAttribute('id', 'github-logo');
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
  svg.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony export */   aboutUsText: () => (/* binding */ aboutUsText),
/* harmony export */   coffeeMenu: () => (/* binding */ coffeeMenu),
/* harmony export */   foodMenu: () => (/* binding */ foodMenu),
/* harmony export */   hours: () => (/* binding */ hours),
/* harmony export */   imagePaths: () => (/* binding */ imagePaths)
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
const coffeeMenu = [{
  item: "Espresso Macchiato",
  price: "$3.50",
  description: "A shot of espresso with a dollop of foamed milk on top for a strong, bold flavor."
}, {
  item: "Cortado",
  price: "$4.50",
  description: "A Spanish-style drink with a shot of espresso and an equal amount of steamed milk, perfect for those who want a stronger taste than a latte."
}, {
  item: "Vanilla Latte",
  price: "$5.50",
  description: "A classic latte with a touch of vanilla syrup, a sweet and creamy option."
}, {
  item: "Pourover",
  price: "$5.00",
  description: "Freshly brewed coffee made to order using a pour-over method, allowing for a full-bodied and flavorful cup."
}, {
  item: "Mocha",
  price: "$6.50",
  description: "A latte with chocolate syrup, perfect for those with a sweet tooth."
}, {
  item: "Nitro Cold Brew",
  price: "$5.00",
  description: "A smooth and creamy coffee with a foamy head that's infused with nitrogen for a unique taste and texture."
}];
const foodMenu = [{
  item: "Croissant",
  price: "$3.50",
  description: "A classic French pastry made with layers of buttery dough, perfect for breakfast or a snack."
}, {
  item: "Blueberry Muffin",
  price: "$4.00",
  description: "A moist and fluffy muffin loaded with fresh blueberries, a sweet and fruity treat."
}, {
  item: "Cinnamon Roll",
  price: "$4.50",
  description: "A soft and fluffy roll filled with cinnamon and sugar and topped with a creamy icing, a comforting and indulgent treat."
}, {
  item: "Chocolate Croissant",
  price: "$4.00",
  description: "A flaky croissant filled with rich chocolate, perfect for a sweet and decadent breakfast or snack."
}, {
  item: "Bagel",
  price: "$3.50",
  description: "A chewy, freshly-baked bagel with your choice of toppings such as cream cheese, butter, or jam."
}, {
  item: "Lemon Poppyseed Scone",
  price: "$4.00",
  description: "A tender scone with a bright lemon flavor and a pop of crunch from poppyseeds, a perfect breakfast or tea-time treat."
}];
const hours = [{
  dayOfWeek: "Monday - Thursday",
  hours: "6:00am - 10:00pm"
}, {
  dayOfWeek: "Friday - Saturday",
  hours: "7:00am - 12:00pm"
}, {
  dayOfWeek: "Sunday",
  hours: "7:00am - 10:00pm"
}];
const imagePaths = [{
  src: _images_slider_1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
  alt: 'man holding a coffee cup',
  first: 'data-active'
}, {
  src: _images_slider_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: 'cappuccino in front of a neon E sign'
}, {
  src: _images_slider_3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: 'woman drinking coffee in front of a neon sign'
}, {
  src: _images_slider_4_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: 'espresso in a dimly lit room'
}];

/***/ }),

/***/ "./src/navigation/index.js":
/*!*********************************!*\
  !*** ./src/navigation/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toAbout: () => (/* reexport safe */ _to_about__WEBPACK_IMPORTED_MODULE_2__.toAbout),
/* harmony export */   toAboutMobile: () => (/* reexport safe */ _to_about__WEBPACK_IMPORTED_MODULE_2__.toAboutMobile),
/* harmony export */   toContact: () => (/* reexport safe */ _to_contact__WEBPACK_IMPORTED_MODULE_4__.toContact),
/* harmony export */   toContactMobile: () => (/* reexport safe */ _to_contact__WEBPACK_IMPORTED_MODULE_4__.toContactMobile),
/* harmony export */   toHome: () => (/* reexport safe */ _to_home__WEBPACK_IMPORTED_MODULE_0__.toHome),
/* harmony export */   toHomeMobile: () => (/* reexport safe */ _to_home__WEBPACK_IMPORTED_MODULE_0__.toHomeMobile),
/* harmony export */   toHours: () => (/* reexport safe */ _to_hours__WEBPACK_IMPORTED_MODULE_3__.toHours),
/* harmony export */   toHoursMobile: () => (/* reexport safe */ _to_hours__WEBPACK_IMPORTED_MODULE_3__.toHoursMobile),
/* harmony export */   toMenu: () => (/* reexport safe */ _to_menu__WEBPACK_IMPORTED_MODULE_1__.toMenu),
/* harmony export */   toMenuMobile: () => (/* reexport safe */ _to_menu__WEBPACK_IMPORTED_MODULE_1__.toMenuMobile)
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
/* harmony export */   toAbout: () => (/* binding */ toAbout),
/* harmony export */   toAboutMobile: () => (/* binding */ toAboutMobile)
/* harmony export */ });
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about */ "./src/pages/about.js");

const toAbout = function () {
  const aboutBtn = document.querySelector('#about-link');
  aboutBtn.addEventListener('click', function () {
    (0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};
const toAboutMobile = function () {
  (0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const menuBtn = document.querySelector("#menu-svg");
  const parent = document.querySelector("#mobile-menu-div");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  menuBtn.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony export */   toContact: () => (/* binding */ toContact),
/* harmony export */   toContactMobile: () => (/* binding */ toContactMobile)
/* harmony export */ });
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");

const toContact = function () {
  const contactBtn = document.querySelector('#contact-link');
  contactBtn.addEventListener('click', function () {
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};
const toContactMobile = function () {
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const menuBtn = document.querySelector("#menu-svg");
  const parent = document.querySelector("#mobile-menu-div");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  menuBtn.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony export */   toHome: () => (/* binding */ toHome),
/* harmony export */   toHomeMobile: () => (/* binding */ toHomeMobile)
/* harmony export */ });
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homepage */ "./src/pages/homepage.js");

const toHome = function () {
  const homeBtn = document.querySelector('#logo-link');
  homeBtn.addEventListener('click', function () {
    (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};
const toHomeMobile = function () {
  (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const menuBtn = document.querySelector("#menu-svg");
  const parent = document.querySelector("#mobile-menu-div");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  menuBtn.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony export */   toHours: () => (/* binding */ toHours),
/* harmony export */   toHoursMobile: () => (/* binding */ toHoursMobile)
/* harmony export */ });
/* harmony import */ var _pages_hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/hours */ "./src/pages/hours.js");

const toHours = function () {
  const hoursBtn = document.querySelector('#hours-link');
  hoursBtn.addEventListener('click', function () {
    (0,_pages_hours__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};
const toHoursMobile = function () {
  (0,_pages_hours__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const menuBtn = document.querySelector("#menu-svg");
  const parent = document.querySelector("#mobile-menu-div");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  menuBtn.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony export */   toMenu: () => (/* binding */ toMenu),
/* harmony export */   toMenuMobile: () => (/* binding */ toMenuMobile)
/* harmony export */ });
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");

const toMenu = function () {
  const menuBtn = document.querySelector("#menu-link");
  menuBtn.addEventListener("click", function () {
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};
const toMenuMobile = function () {
  console.log('render page!');
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const menuBtn = document.querySelector("#menu-svg");
  const parent = document.querySelector("#mobile-menu-div");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  menuBtn.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony export */   toMobileNav: () => (/* binding */ toMobileNav)
/* harmony export */ });
/* harmony import */ var _components_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/mobile_nav */ "./src/components/mobile_nav.js");

const toMobileNav = function () {
  const menuBtn = document.querySelector("#menu-svg");
  menuBtn.addEventListener("click", function () {
    (0,_components_mobile_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (menuBtn.classList.contains("closed")) {
      (0,_components_mobile_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
      menuBtn.innerHTML = '<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>';
      menuBtn.classList.remove("closed");
      menuBtn.classList.add("open");
    } else {
      const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
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
/* harmony import */ var _images_neon_coffee_sign_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/neon-coffee-sign.jpg */ "./src/images/neon-coffee-sign.jpg");

const ContactPage = function () {
  const content = document.querySelector("#page-content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const container = document.createElement("div");
  container.setAttribute("id", "contact");
  content.appendChild(container);
  const leftCol = document.createElement('div');
  container.appendChild(leftCol);
  const subtitle = document.createElement("h2");
  subtitle.innerHTML = "Contact us";
  leftCol.appendChild(subtitle);
  const coffeeImg = new Image();
  coffeeImg.src = _images_neon_coffee_sign_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
  coffeeImg.setAttribute("alt", "neon coffee sign");
  coffeeImg.classList.add("flicker");
  coffeeImg.addEventListener("load", () => {
    setTimeout(() => {
      coffeeImg.classList.remove("flicker");
    }, 1800);
  });
  container.appendChild(coffeeImg);
  const phone = document.createElement("p");
  phone.innerHTML = `<a href="tel:+1-555-555-5555">555-555-5555</a>`;
  leftCol.appendChild(phone);
  const email = document.createElement("p");
  email.innerHTML = `<a href="mailto:hello@neoncoffee.com"</a>hello@neoncoffee.com</a>`;
  leftCol.appendChild(email);
  const address = document.createElement("p");
  address.innerHTML = "100 Amazing St, Awesome City, ST";
  leftCol.appendChild(address);
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
  });
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
  });

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
  });
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"NeonFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n  z-index: 30;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#contact > img,\n#hours > img {\n  width: 350px;\n  padding: 10px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n.carousel {\n  width: 50vw;\n  height: 70vh;\n  position: relative;\n}\n\n.carousel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes slide-out-reverse {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: 1000ms opacity ease-in-out;\n  animation: slide-out 1000ms;\n}\n\n.slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  object-fit: cover;\n  object-position: center;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-in-reverse {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide[data-active] {\n  opacity: 1;\n  z-index: 1;\n  animation: slide-in 1000ms;\n}\n\n.carousel-button {\n  position: absolute;\n  background: none;\n  border: none;\n  font-size: 3rem;\n  top: 50%;\n  z-index: 2;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.carousel-button:focus {\n  outline: 1px solid rgb(255, 1, 213);\n}\n\n.carousel-button.prev {\n  left: -6rem;\n}\n\n.carousel-button.next {\n  right: -6rem;\n}\n\n.carousel-nav {\n  position: absolute;\n  inset: 0;\n  transform: translateY(90%);\n  z-index: 20;\n}\n\n.carousel-circle {\n  border: none;\n  background-color: white;\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.carousel-circle:hover {\n  cursor: pointer;\n  background-color: rgb(255, 132, 235);\n}\n\n@keyframes grow-shrink {\n  0% {\n    width: 20px;\n    background-color: white;\n  }\n  10% {\n    background-color: rgb(255, 132, 235);\n  }\n  50% {\n    width: 30px;\n    background-color: rgb(255, 1, 213);\n  }\n  90% {\n    background-color: rgb(255, 132, 235);\n  }\n  100% {\n    width: 20px;\n    background-color: white;\n  }\n}\n\n.carousel-circle[data-active] {\n  animation: grow-shrink 2800ms ease-in-out;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours,\n  #contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #contact,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n\n  .carousel {\n    width: 70vw;\n  }\n\n  .carousel-button.prev {\n    left: -2rem;\n  }\n\n  .carousel-button.next {\n    right: -2rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"NeonFont\";\n  src: url(\"./fonts/Neonderthaw-Regular.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\n@keyframes flicker {\n  0% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.flicker {\n  animation-name: flicker;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  z-index: -10;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.link {\n  font-size: 1rem;\n  color: white;\n  border: none;\n  background-color: transparent;\n  box-shadow: none;\n  padding: initial;\n  margin: initial;\n  outline: none;\n}\n\n.homepage {\n  color: blue;\n}\n\n#navbar {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.752);\n  width: 100%;\n  height: 120px;\n  z-index: 30;\n}\n\n#navbar > * {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center;\n}\n\n#navbar > *:hover {\n  cursor: pointer;\n}\n\n#mobile-menu-popup {\n  display: none;\n}\n\n#menu-svg {\n  display: none;\n}\n\nh1 {\n  color: rgb(255, 1, 213);\n  font-size: 4rem;\n  font-family: \"NeonFont\";\n}\n\n#page-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 35px;\n  margin-top: 120px;\n}\n\nh2,\nh3,\nh4,\np {\n  color: white;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nh2 {\n  padding-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  color: rgb(255, 1, 213);\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#contact > img,\n#hours > img {\n  width: 350px;\n  padding: 10px;\n}\n\nul,\nli {\n  all: unset;\n}\n\n.menu-item {\n  height: 150px;\n}\n\n.day {\n  padding-bottom: 2rem;\n}\n\n#hours,\n#menu {\n  display: flex;\n}\n\n#menu > div {\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 300px;\n}\n\n#footer {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  bottom: 0px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  height: 30px;\n  background-color: rgba(0, 0, 0, 0.752);\n}\n\n#github-logo {\n  height: 30px;\n  margin-right: 15px;\n}\n\n/* For image carousel */\n\n.carousel {\n  width: 50vw;\n  height: 70vh;\n  position: relative;\n}\n\n.carousel > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes slide-out-reverse {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: 1000ms opacity ease-in-out;\n  animation: slide-out 1000ms;\n}\n\n.slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  object-fit: cover;\n  object-position: center;\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-in-reverse {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide[data-active] {\n  opacity: 1;\n  z-index: 1;\n  animation: slide-in 1000ms;\n}\n\n.carousel-button {\n  position: absolute;\n  background: none;\n  border: none;\n  font-size: 3rem;\n  top: 50%;\n  z-index: 2;\n  transform: translateY(-50%);\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.carousel-button:focus {\n  outline: 1px solid rgb(255, 1, 213);\n}\n\n.carousel-button.prev {\n  left: -6rem;\n}\n\n.carousel-button.next {\n  right: -6rem;\n}\n\n.carousel-nav {\n  position: absolute;\n  inset: 0;\n  transform: translateY(90%);\n  z-index: 20;\n}\n\n.carousel-circle {\n  border: none;\n  background-color: white;\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.carousel-circle:hover {\n  cursor: pointer;\n  background-color: rgb(255, 132, 235);\n}\n\n@keyframes grow-shrink {\n  0% {\n    width: 20px;\n    background-color: white;\n  }\n  10% {\n    background-color: rgb(255, 132, 235);\n  }\n  50% {\n    width: 30px;\n    background-color: rgb(255, 1, 213);\n  }\n  90% {\n    background-color: rgb(255, 132, 235);\n  }\n  100% {\n    width: 20px;\n    background-color: white;\n  }\n}\n\n.carousel-circle[data-active] {\n  animation: grow-shrink 2800ms ease-in-out;\n}\n\n/* Media query for screens that are 600px or less */\n@media only screen and (max-width: 600px) {\n  #page-content {\n    max-width: 100%;\n    margin-bottom: 35px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  button.link {\n    display: none;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  #menu,\n  #hours,\n  #contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #menu > div {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%;\n  }\n\n  #contact,\n  #hours > img {\n    width: 80%;\n  }\n\n  #menu-svg {\n    display: block;\n  }\n\n  #mobile-menu-div {\n    position: fixed;\n    top: 45px;\n    right: 0px;\n  }\n\n  #mobile-menu-popup {\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    width: 50%;\n    padding: 5%;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(255, 1, 213);\n    border: solid 2px white;\n    box-shadow: 4px 4px 8px rgba(95, 95, 95, 0.427);\n    z-index: 10;\n  }\n\n  #mobile-menu-popup > button {\n    color: black;\n    display: block;\n    font-size: 2rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  #mobile-menu-popup > button:hover {\n    color: white;\n    cursor: pointer;\n  }\n\n  .carousel {\n    width: 70vw;\n  }\n\n  .carousel-button.prev {\n    left: -2rem;\n  }\n\n  .carousel-button.next {\n    right: -2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFL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QztBQUNUQyxvREFBTyxDQUFDLENBQUM7QUFDVEMsc0RBQVMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlX25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uL3RvX2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9faG91cnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmlnYXRpb24vdG9fbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2aWdhdGlvbi90b19tb2JpbGVfbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvdXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvZ2l0aHViLW1hcmstd2hpdGUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvbmVvbi1jb2ZmZWUtc2lnbi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9waW5rLWNvZmZlZS1zbG9nYW4uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvc2xpZGVyLTEuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvc2xpZGVyLTIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvc2xpZGVyLTMuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvc2xpZGVyLTQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGltYWdlUGF0aHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IENhcm91c2VsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlcy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuICBjYXJvdXNlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcm91c2VsXCIsIFwiXCIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuXG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcmV2QnRuLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1idXR0b25cIiwgXCJwcmV2XCIpO1xuICBwcmV2QnRuLmlubmVySFRNTCA9IFwiJiM4Njc4O1wiO1xuICBwcmV2QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtY2Fyb3VzZWwtYnV0dG9uXCIsIFwicHJldlwiKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG5cbiAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWJ1dHRvblwiLCBcIm5leHRcIik7XG4gIG5leHRCdG4uaW5uZXJIVE1MID0gXCImIzg2ODA7XCI7XG4gIG5leHRCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1jYXJvdXNlbC1idXR0b25cIiwgXCJuZXh0XCIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChuZXh0QnRuKTtcblxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2Fyb3VzZWwtbGlzdFwiKTtcbiAgbGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlc1wiLCBcIlwiKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgaW1hZ2VQYXRocy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpZiAoaW1nLmZpcnN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxpLnNldEF0dHJpYnV0ZShpbWcuZmlyc3QsIFwiXCIpO1xuICAgIH1cbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcuc3JjKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgaW1nLmFsdCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICAvLyBOYXYgYmFyXG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1uYXZcIik7XG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgY2lyY2xlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNpcmNsZTEuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNpcmNsZVwiKTtcbiAgY2lyY2xlMS5zZXRBdHRyaWJ1dGUoXCJzbGlkZS1idG5cIiwgXCIwXCIpO1xuICBjaXJjbGUxLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIFwidHJ1ZVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNpcmNsZTEpO1xuXG4gIGNvbnN0IGNpcmNsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jaXJjbGVcIik7XG4gIGNpcmNsZTIuc2V0QXR0cmlidXRlKFwic2xpZGUtYnRuXCIsIFwiMVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNpcmNsZTIpO1xuXG4gIGNvbnN0IGNpcmNsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaXJjbGUzLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jaXJjbGVcIik7XG4gIGNpcmNsZTMuc2V0QXR0cmlidXRlKFwic2xpZGUtYnRuXCIsIFwiMlwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNpcmNsZTMpO1xuXG4gIGNvbnN0IGNpcmNsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaXJjbGU0LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jaXJjbGVcIik7XG4gIGNpcmNsZTQuc2V0QXR0cmlidXRlKFwic2xpZGUtYnRuXCIsIFwiM1wiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNpcmNsZTQpO1xuXG4gIC8vIENoYW5nZSBzbGlkZSBvbiB0aW1pbmdcblxuICBsZXQgaW50ZXJ2YWxJRDtcblxuICBmdW5jdGlvbiBzdGFydEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGNoYW5nZVNsaWRlcywgMzAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wSW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVNsaWRlcygpIHtcbiAgICBzdG9wSW50ZXJ2YWwoKTtcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2xpZGVzXVwiKTtcbiAgICBpZiAoc2xpZGVzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHNsaWRlcy5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWN0aXZlXVwiKTtcblxuICAgIGxldCBuZXdJbmRleCA9IFsuLi5zbGlkZXMuY2hpbGRyZW5dLmluZGV4T2YoYWN0aXZlU2xpZGUpICsgMTtcbiAgICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggPj0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgbmV3SW5kZXggPSAwO1xuICAgIH1cblxuICAgIHNsaWRlcy5jaGlsZHJlbltuZXdJbmRleF0uZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgIGRlbGV0ZSBhY3RpdmVTbGlkZS5kYXRhc2V0LmFjdGl2ZTtcblxuICAgIGNvbnN0IGNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLW5hdlwiKTtcbiAgICBjb25zdCBhY3RpdmVDaXJjbGUgPSBjaXJjbGVzLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1hY3RpdmVdXCIpO1xuXG4gICAgY2lyY2xlcy5jaGlsZHJlbltuZXdJbmRleF0uZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgIGRlbGV0ZSBhY3RpdmVDaXJjbGUuZGF0YXNldC5hY3RpdmU7XG4gICAgc2V0VGltZW91dChzdGFydEludGVydmFsLCAwKTtcbiAgfVxuXG4gIGNoYW5nZVNsaWRlcygpO1xuICBcbiAgLy8gQ2hhbmdlIHNsaWRlIHdpdGggYnV0dG9uXG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jYXJvdXNlbC1idXR0b25dXCIpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3RvcEludGVydmFsKCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBidXR0b24uZGF0YXNldC5jYXJvdXNlbEJ1dHRvbiA9PT0gXCJuZXh0XCIgPyAxIDogLTE7XG4gICAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2xpZGVzXVwiKTtcblxuICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSBzbGlkZXMucXVlcnlTZWxlY3RvcihcIltkYXRhLWFjdGl2ZV1cIik7XG5cbiAgICAgIGxldCBuZXdJbmRleCA9IFsuLi5zbGlkZXMuY2hpbGRyZW5dLmluZGV4T2YoYWN0aXZlU2xpZGUpICsgb2Zmc2V0O1xuICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICBuZXdJbmRleCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0luZGV4ID49IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgbmV3SW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMuY2hpbGRyZW5bbmV3SW5kZXhdLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSBhY3RpdmVTbGlkZS5kYXRhc2V0LmFjdGl2ZTtcblxuICAgICAgY29uc3QgY2lyY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtbmF2XCIpO1xuICAgICAgY29uc3QgYWN0aXZlQ2lyY2xlID0gY2lyY2xlcy5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWN0aXZlXVwiKTtcblxuICAgICAgY2lyY2xlcy5jaGlsZHJlbltuZXdJbmRleF0uZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgZGVsZXRlIGFjdGl2ZUNpcmNsZS5kYXRhc2V0LmFjdGl2ZTtcblxuICAgICAgc2V0VGltZW91dChzdGFydEludGVydmFsLCAwKTtcblxuICAgIH0pO1xuICB9KTtcblxuICAvLyBDaGFuZ2Ugc2xpZGVzIHdpdGggY2lyY2xlc1xuXG4gIGNvbnN0IGNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3NsaWRlLWJ0bl1cIik7XG4gIGNpcmNsZXMuZm9yRWFjaCgoY2lyY2xlKSA9PiB7XG4gICAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdG9wSW50ZXJ2YWwoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY2lyY2xlLmdldEF0dHJpYnV0ZShcInNsaWRlLWJ0blwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zbGlkZXNdXCIpO1xuXG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHNsaWRlcy5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWN0aXZlXVwiKTtcblxuICAgICAgc2xpZGVzLmNoaWxkcmVuW2luZGV4XS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICBkZWxldGUgYWN0aXZlU2xpZGUuZGF0YXNldC5hY3RpdmU7XG5cbiAgICAgIGNvbnN0IGNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLW5hdlwiKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUNpcmNsZSA9IGNpcmNsZXMucXVlcnlTZWxlY3RvcihcIltkYXRhLWFjdGl2ZV1cIik7XG5cbiAgICAgIGNpcmNsZXMuY2hpbGRyZW5baW5kZXhdLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSBhY3RpdmVDaXJjbGUuZGF0YXNldC5hY3RpdmU7XG5cbiAgICAgIHNldFRpbWVvdXQoc3RhcnRJbnRlcnZhbCwgMCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBjYXJvdXNlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2l0SHViTG9nbyBmcm9tICcuLi9pbWFnZXMvZ2l0aHViLW1hcmstd2hpdGUucG5nJ1xuXG5jb25zdCBGb290ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyZW50XCIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Yi5zcmMgPSBnaXRIdWJMb2dvO1xuICBnaXRodWIuc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItbG9nbycpXG4gIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJnaXRodWIgbG9nb1wiKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1Yik7XG5cbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1c2VybmFtZVwiKTtcbiAgdXNlcm5hbWUuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWRlbnNhbHQvcmVzdGF1cmFudC1wYWdlXCI+QGVkZW5zYWx0PC9hPmA7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCB7IHRvQWJvdXRNb2JpbGUsIHRvQ29udGFjdE1vYmlsZSwgdG9Ib3Vyc01vYmlsZSwgdG9NZW51TW9iaWxlIH0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBtb2JpbGVOYXYgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtZGl2XCIpO1xuXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9iaWxlLW1lbnUtcG9wdXBcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWxpbmstbW9iaWxlXCIpO1xuICBtZW51LmlubmVySFRNTCA9IFwiTWVudVwiO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9NZW51TW9iaWxlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dC1saW5rLW1vYmlsZVwiKTtcbiAgYWJvdXQuaW5uZXJIVE1MID0gXCJBYm91dFwiO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcbiAgYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0b0Fib3V0TW9iaWxlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG91cnMuaW5uZXJIVE1MID0gXCJIb3Vyc1wiO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImhvdXJzLWxpbmstbW9iaWxlXCIpO1xuICBob3Vycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRvSG91cnNNb2JpbGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWxpbmstbW9iaWxlXCIpO1xuICBjb250YWN0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdG9Db250YWN0TW9iaWxlKCk7XG4gIH0pO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChhYm91dCk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIHJldHVybiBtZW51RGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9iaWxlTmF2O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB0b01vYmlsZU5hdiB9IGZyb20gXCIuLi9uYXZpZ2F0aW9uL3RvX21vYmlsZV9uYXZcIjtcblxuY29uc3QgTmF2QmFyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhcmVudFwiKTtcblxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZiYXJcIik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28tbGlua1wiKTtcbiAgbG9nby5pbm5lckhUTUwgPSBcIk5lb24gQ2FmZVwiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1saW5rXCIpO1xuICBtZW51LmlubmVySFRNTCA9IFwiTWVudVwiO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dC1saW5rXCIpO1xuICBhYm91dC5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG91cnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob3Vycy1saW5rXCIpO1xuICBob3Vycy5pbm5lckhUTUwgPSBcIkhvdXJzXCI7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1saW5rXCIpO1xuICBjb250YWN0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xuXG4gIGNvbnN0IG1vYmlsZU1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2JpbGVNZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9iaWxlLW1lbnUtZGl2XCIpO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMzZcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCA5NiA5NjAgOTYwXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzNlwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1zdmdcIik7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuICBzdmcuaW5uZXJIVE1MID1cbiAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG5cbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYWdlQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhZ2UtY29udGVudFwiKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChob3Vycyk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVEaXYpO1xuICBtb2JpbGVNZW51RGl2LmFwcGVuZENoaWxkKHN2Zyk7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG4gIHRvTW9iaWxlTmF2KCk7XG5cbiAgcmV0dXJuIG5hdkJhcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBpbWFnZTEgZnJvbSAnLi4vaW1hZ2VzL3NsaWRlci0xLmpwZyc7XG5pbXBvcnQgaW1hZ2UyIGZyb20gJy4uL2ltYWdlcy9zbGlkZXItMi5qcGcnO1xuaW1wb3J0IGltYWdlMyBmcm9tICcuLi9pbWFnZXMvc2xpZGVyLTMuanBnJztcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi4vaW1hZ2VzL3NsaWRlci00LmpwZyc7XG5cblxuZXhwb3J0IGNvbnN0IGFib3V0VXNUZXh0ID0gYFdlbGNvbWUgdG8gTmVvbiBDYWZlLCB3aGVyZSBjcmVhdGl2aXR5IGFuZCBjb21tdW5pdHkgY29tZSB0b2dldGhlciBvdmVyIGEgY3VwIG9mIGV4cGVydGx5LWNyYWZ0ZWQgY29mZmVlIGFuZCBob21lbWFkZSBwYXN0cmllcy5cbjxiciAvPlxuPGJyIC8+XG5cbk91ciBjYWZlIHdhcyBmb3VuZGVkIHdpdGggdGhlIHZpc2lvbiBvZiBwcm92aWRpbmcgYSB3ZWxjb21pbmcgYW5kIGluc3BpcmluZyBlbnZpcm9ubWVudCBmb3IgcGVvcGxlIHRvIGdhdGhlciwgY29ubmVjdCwgYW5kIGluZHVsZ2UgaW4gdGhlaXIgcGFzc2lvbiBmb3IgZ3JlYXQgY29mZmVlLiBXaGV0aGVyIHlvdSdyZSBsb29raW5nIHRvIHdvcmsgb24gYSBwcm9qZWN0LCBjYXRjaCB1cCB3aXRoIGZyaWVuZHMsIG9yIHNpbXBseSByZWxheCB3aXRoIGEgZ29vZCBib29rLCBvdXIgc3BhY2UgaXMgZGVzaWduZWQgdG8gYWNjb21tb2RhdGUgeW91ciBuZWVkcy5cbjxiciAvPlxuPGJyIC8+XG5cbkJ1dCBOZW9uIENhZmUgaXMgbW9yZSB0aGFuIGp1c3QgYSBwbGFjZSB0byBlbmpveSBhIGN1cCBvZiBjb2ZmZWUuIFdlIHdhbnQgdG8gZm9zdGVyIGEgY3VsdHVyZSBvZiBjcmVhdGl2aXR5LCB3aGVyZSBwZW9wbGUgY2FuIGNvbWUgdG9nZXRoZXIgdG8gc2hhcmUgdGhlaXIgaWRlYXMgYW5kIGluc3BpcmF0aW9ucy4gVGhhdCdzIHdoeSB3ZSBvZmZlciBhIHJhbmdlIG9mIGV2ZW50cyBhbmQgYWN0aXZpdGllcywgZnJvbSBvcGVuIG1pYyBuaWdodHMgdG8gYXJ0IHNob3dzLCB0byBicmluZyB0b2dldGhlciB0aGUgbG9jYWwgY3JlYXRpdmUgY29tbXVuaXR5LlxuPGJyIC8+XG48YnIgLz5cblxuT2YgY291cnNlLCBhdCB0aGUgaGVhcnQgb2Ygb3VyIGNhZmUgaXMgb3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eS4gV2UgdGFrZSBwcmlkZSBpbiBzZXJ2aW5nIG9ubHkgdGhlIGJlc3QgY29mZmVlLCBzb3VyY2VkIGZyb20gdGhlIGZpbmVzdCBiZWFucyBhbmQgZXhwZXJ0bHkgcHJlcGFyZWQgYnkgb3VyIHNraWxsZWQgYmFyaXN0YXMuIEFuZCBvdXIgcGFzdHJpZXMgYXJlIG1hZGUgZnJlc2ggZWFjaCBkYXksIHVzaW5nIG9ubHkgdGhlIGZpbmVzdCBpbmdyZWRpZW50cy5cbjxiciAvPlxuPGJyIC8+XG5cbldlIGJlbGlldmUgdGhhdCBncmVhdCBjb2ZmZWUsIGRlbGljaW91cyBmb29kLCBhbmQgYSB3ZWxjb21pbmcgYXRtb3NwaGVyZSBhcmUgZXNzZW50aWFsIGluZ3JlZGllbnRzIGZvciBhIGZ1bGZpbGxpbmcgY2FmZSBleHBlcmllbmNlLiBDb21lIGpvaW4gdXMgYXQgTmVvbiBDYWZlIGFuZCBzZWUgZm9yIHlvdXJzZWxmIHdoYXQgbWFrZXMgdXMgZGlmZmVyZW50LmA7XG5cbmV4cG9ydCBjb25zdCBjb2ZmZWVNZW51ID0gW1xuICB7XG4gICAgaXRlbTogXCJFc3ByZXNzbyBNYWNjaGlhdG9cIixcbiAgICBwcmljZTogXCIkMy41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNob3Qgb2YgZXNwcmVzc28gd2l0aCBhIGRvbGxvcCBvZiBmb2FtZWQgbWlsayBvbiB0b3AgZm9yIGEgc3Ryb25nLCBib2xkIGZsYXZvci5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQ29ydGFkb1wiLFxuICAgIHByaWNlOiBcIiQ0LjUwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgU3BhbmlzaC1zdHlsZSBkcmluayB3aXRoIGEgc2hvdCBvZiBlc3ByZXNzbyBhbmQgYW4gZXF1YWwgYW1vdW50IG9mIHN0ZWFtZWQgbWlsaywgcGVyZmVjdCBmb3IgdGhvc2Ugd2hvIHdhbnQgYSBzdHJvbmdlciB0YXN0ZSB0aGFuIGEgbGF0dGUuXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIlZhbmlsbGEgTGF0dGVcIixcbiAgICBwcmljZTogXCIkNS41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNsYXNzaWMgbGF0dGUgd2l0aCBhIHRvdWNoIG9mIHZhbmlsbGEgc3lydXAsIGEgc3dlZXQgYW5kIGNyZWFteSBvcHRpb24uXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIlBvdXJvdmVyXCIsXG4gICAgcHJpY2U6IFwiJDUuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRnJlc2hseSBicmV3ZWQgY29mZmVlIG1hZGUgdG8gb3JkZXIgdXNpbmcgYSBwb3VyLW92ZXIgbWV0aG9kLCBhbGxvd2luZyBmb3IgYSBmdWxsLWJvZGllZCBhbmQgZmxhdm9yZnVsIGN1cC5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiTW9jaGFcIixcbiAgICBwcmljZTogXCIkNi41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGxhdHRlIHdpdGggY2hvY29sYXRlIHN5cnVwLCBwZXJmZWN0IGZvciB0aG9zZSB3aXRoIGEgc3dlZXQgdG9vdGguXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIk5pdHJvIENvbGQgQnJld1wiLFxuICAgIHByaWNlOiBcIiQ1LjAwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc21vb3RoIGFuZCBjcmVhbXkgY29mZmVlIHdpdGggYSBmb2FteSBoZWFkIHRoYXQncyBpbmZ1c2VkIHdpdGggbml0cm9nZW4gZm9yIGEgdW5pcXVlIHRhc3RlIGFuZCB0ZXh0dXJlLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGZvb2RNZW51ID0gW1xuICB7XG4gICAgaXRlbTogXCJDcm9pc3NhbnRcIixcbiAgICBwcmljZTogXCIkMy41MFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNsYXNzaWMgRnJlbmNoIHBhc3RyeSBtYWRlIHdpdGggbGF5ZXJzIG9mIGJ1dHRlcnkgZG91Z2gsIHBlcmZlY3QgZm9yIGJyZWFrZmFzdCBvciBhIHNuYWNrLlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJCbHVlYmVycnkgTXVmZmluXCIsXG4gICAgcHJpY2U6IFwiJDQuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBtb2lzdCBhbmQgZmx1ZmZ5IG11ZmZpbiBsb2FkZWQgd2l0aCBmcmVzaCBibHVlYmVycmllcywgYSBzd2VldCBhbmQgZnJ1aXR5IHRyZWF0LlwiLFxuICB9LFxuICB7XG4gICAgaXRlbTogXCJDaW5uYW1vbiBSb2xsXCIsXG4gICAgcHJpY2U6IFwiJDQuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzb2Z0IGFuZCBmbHVmZnkgcm9sbCBmaWxsZWQgd2l0aCBjaW5uYW1vbiBhbmQgc3VnYXIgYW5kIHRvcHBlZCB3aXRoIGEgY3JlYW15IGljaW5nLCBhIGNvbWZvcnRpbmcgYW5kIGluZHVsZ2VudCB0cmVhdC5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiQ2hvY29sYXRlIENyb2lzc2FudFwiLFxuICAgIHByaWNlOiBcIiQ0LjAwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgZmxha3kgY3JvaXNzYW50IGZpbGxlZCB3aXRoIHJpY2ggY2hvY29sYXRlLCBwZXJmZWN0IGZvciBhIHN3ZWV0IGFuZCBkZWNhZGVudCBicmVha2Zhc3Qgb3Igc25hY2suXCIsXG4gIH0sXG4gIHtcbiAgICBpdGVtOiBcIkJhZ2VsXCIsXG4gICAgcHJpY2U6IFwiJDMuNTBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBjaGV3eSwgZnJlc2hseS1iYWtlZCBiYWdlbCB3aXRoIHlvdXIgY2hvaWNlIG9mIHRvcHBpbmdzIHN1Y2ggYXMgY3JlYW0gY2hlZXNlLCBidXR0ZXIsIG9yIGphbS5cIixcbiAgfSxcbiAge1xuICAgIGl0ZW06IFwiTGVtb24gUG9wcHlzZWVkIFNjb25lXCIsXG4gICAgcHJpY2U6IFwiJDQuMDBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSB0ZW5kZXIgc2NvbmUgd2l0aCBhIGJyaWdodCBsZW1vbiBmbGF2b3IgYW5kIGEgcG9wIG9mIGNydW5jaCBmcm9tIHBvcHB5c2VlZHMsIGEgcGVyZmVjdCBicmVha2Zhc3Qgb3IgdGVhLXRpbWUgdHJlYXQuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaG91cnMgPSBbXG4gIHsgZGF5T2ZXZWVrOiBcIk1vbmRheSAtIFRodXJzZGF5XCIsIGhvdXJzOiBcIjY6MDBhbSAtIDEwOjAwcG1cIiB9LFxuICB7IGRheU9mV2VlazogXCJGcmlkYXkgLSBTYXR1cmRheVwiLCBob3VyczogXCI3OjAwYW0gLSAxMjowMHBtXCIgfSxcbiAgeyBkYXlPZldlZWs6IFwiU3VuZGF5XCIsIGhvdXJzOiBcIjc6MDBhbSAtIDEwOjAwcG1cIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGltYWdlUGF0aHMgPSBbXG4gIHtzcmM6IGltYWdlMSwgYWx0OiAnbWFuIGhvbGRpbmcgYSBjb2ZmZWUgY3VwJywgZmlyc3Q6ICdkYXRhLWFjdGl2ZSd9LFxuICB7c3JjOiBpbWFnZTIsIGFsdDogJ2NhcHB1Y2Npbm8gaW4gZnJvbnQgb2YgYSBuZW9uIEUgc2lnbid9LFxuICB7c3JjOiBpbWFnZTMsIGFsdDogJ3dvbWFuIGRyaW5raW5nIGNvZmZlZSBpbiBmcm9udCBvZiBhIG5lb24gc2lnbid9LFxuICB7c3JjOiBpbWFnZTQsIGFsdDogJ2VzcHJlc3NvIGluIGEgZGltbHkgbGl0IHJvb20nfSxcbl07IiwiZXhwb3J0IHsgdG9Ib21lLCB0b0hvbWVNb2JpbGUgfSBmcm9tICcuL3RvX2hvbWUnO1xuZXhwb3J0IHsgdG9NZW51LCB0b01lbnVNb2JpbGUgfSBmcm9tICcuL3RvX21lbnUnO1xuZXhwb3J0IHsgdG9BYm91dCwgdG9BYm91dE1vYmlsZSB9IGZyb20gJy4vdG9fYWJvdXQnO1xuZXhwb3J0IHsgdG9Ib3VycywgdG9Ib3Vyc01vYmlsZSB9IGZyb20gJy4vdG9faG91cnMnO1xuZXhwb3J0IHsgdG9Db250YWN0LCB0b0NvbnRhY3RNb2JpbGUgfSBmcm9tICcuL3RvX2NvbnRhY3QnO1xuIiwiaW1wb3J0IEFib3V0UGFnZSBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcblxuY29uc3QgdG9BYm91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1saW5rJylcbiAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBBYm91dFBhZ2UoKTtcbiAgICB9KVxufTtcblxuY29uc3QgdG9BYm91dE1vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBBYm91dFBhZ2UoKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXN2Z1wiKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG59O1xuXG5leHBvcnQgeyB0b0Fib3V0LCB0b0Fib3V0TW9iaWxlIH07IiwiaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gXCIuLi9wYWdlcy9jb250YWN0XCI7XG5cbmNvbnN0IHRvQ29udGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtbGluaycpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgQ29udGFjdFBhZ2UoKTtcbiAgICB9KVxufTtcblxuY29uc3QgdG9Db250YWN0TW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIENvbnRhY3RQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9Db250YWN0LCB0b0NvbnRhY3RNb2JpbGUgfSIsImltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi4vcGFnZXMvaG9tZXBhZ2VcIjtcblxuY29uc3QgdG9Ib21lID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nby1saW5rJyk7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBIb21lUGFnZSgpO1xuICAgIH0pXG59O1xuXG5jb25zdCB0b0hvbWVNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgSG9tZVBhZ2UoKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXN2Z1wiKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG59O1xuXG5leHBvcnQgeyB0b0hvbWUsIHRvSG9tZU1vYmlsZSB9OyIsImltcG9ydCBIb3Vyc1BhZ2UgZnJvbSBcIi4uL3BhZ2VzL2hvdXJzXCI7XG5cbmNvbnN0IHRvSG91cnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaG91cnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cnMtbGluaycpXG4gICAgaG91cnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgSG91cnNQYWdlKCk7XG4gICAgfSlcbn07XG5cbmNvbnN0IHRvSG91cnNNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgSG91cnNQYWdlKCk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1zdmdcIik7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxufTtcblxuZXhwb3J0IHsgdG9Ib3VycywgdG9Ib3Vyc01vYmlsZX07IiwiaW1wb3J0IE1lbnVQYWdlIGZyb20gXCIuLi9wYWdlcy9tZW51XCI7XG5cbmNvbnN0IHRvTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1saW5rXCIpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgTWVudVBhZ2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b01lbnVNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlciBwYWdlIScpXG4gICAgTWVudVBhZ2UoKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXN2Z1wiKTtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1tZW51LWRpdlwiKTtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgbWVudUJ0bi5pbm5lckhUTUwgPVxuICAgICAgICAnPHBhdGggZD1cIk0xMjAgODE2di02MGg3MjB2NjBIMTIwWm0wLTIxMHYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBaXCIvPic7XG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG59O1xuXG5leHBvcnQgeyB0b01lbnUsIHRvTWVudU1vYmlsZSB9O1xuIiwiaW1wb3J0IG1vYmlsZU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2JpbGVfbmF2XCI7XG5cbmNvbnN0IHRvTW9iaWxlTmF2ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXN2Z1wiKTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1vYmlsZU5hdigpO1xuICAgIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlZFwiKSkge1xuICAgICAgbW9iaWxlTmF2KCk7XG4gICAgICBtZW51QnRuLmlubmVySFRNTCA9XG4gICAgICAgICc8cGF0aCBkPVwibTI0OSA4NDktNDItNDIgMjMxLTIzMS0yMzEtMjMxIDQyLTQyIDIzMSAyMzEgMjMxLTIzMSA0MiA0Mi0yMzEgMjMxIDIzMSAyMzEtNDIgNDItMjMxLTIzMS0yMzEgMjMxWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbWVudS1kaXZcIik7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1lbnVCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwYXRoIGQ9XCJNMTIwIDgxNnYtNjBoNzIwdjYwSDEyMFptMC0yMTB2LTYwaDcyMHY2MEgxMjBabTAtMjEwdi02MGg3MjB2NjBIMTIwWlwiLz4nO1xuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdG9Nb2JpbGVOYXYgfTtcbiIsImltcG9ydCB7IGFib3V0VXNUZXh0IH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBBYm91dFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtY29udGVudFwiKTtcblxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgc3VidGl0bGUuaW5uZXJIVE1MID0gXCJBYm91dCBVc1wiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYS5pbm5lckhUTUwgPSBhYm91dFVzVGV4dDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2U7XG4iLCJpbXBvcnQgY29mZmVlSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9uZW9uLWNvZmZlZS1zaWduLmpwZ1wiO1xuXG5jb25zdCBDb250YWN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdCB1c1wiO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBjb2ZmZWVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29mZmVlSW1nLnNyYyA9IGNvZmZlZUltYWdlO1xuICBjb2ZmZWVJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibmVvbiBjb2ZmZWUgc2lnblwiKTtcbiAgY29mZmVlSW1nLmNsYXNzTGlzdC5hZGQoXCJmbGlja2VyXCIpO1xuICBjb2ZmZWVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29mZmVlSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGlja2VyXCIpO1xuICAgIH0sIDE4MDApO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUltZyk7XG4gIFxuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBob25lLmlubmVySFRNTCA9IGA8YSBocmVmPVwidGVsOisxLTU1NS01NTUtNTU1NVwiPjU1NS01NTUtNTU1NTwvYT5gO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKHBob25lKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbWFpbC5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0BuZW9uY29mZmVlLmNvbVwiPC9hPmhlbGxvQG5lb25jb2ZmZWUuY29tPC9hPmA7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjEwMCBBbWF6aW5nIFN0LCBBd2Vzb21lIENpdHksIFNUXCI7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuIiwiaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL2Nhcm91c2VsXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBUZXN0aW5nIG9ubHkgLSByZW1vdmUgd2hlbiBkb25lXG5cbiAgY29uc3QgaW1hZ2VzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBpbWFnZXNTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2VzLXNlY3Rpb25cIik7XG4gIGltYWdlc1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcInJvdGF0aW5nIGltYWdlcyBvZiBjb2ZmZWUgc2hvcFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlc1NlY3Rpb24pO1xuXG4gIENhcm91c2VsKCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIiwiaW1wb3J0IHsgaG91cnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgc2lnbkltYWdlIGZyb20gXCIuLi9pbWFnZXMvcGluay1jb2ZmZWUtc2xvZ2FuLmpwZ1wiXG5cbmNvbnN0IEhvdXJzUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtY29udGVudFwiKTtcblxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cnNcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBsZWZ0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29sKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgc3VidGl0bGUuaW5uZXJIVE1MID0gXCJPdXIgSG91cnNcIjtcbiAgbGVmdENvbC5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuXG4gIGhvdXJzLmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICBpdGVtRGl2LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IGRheU9mV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGF5T2ZXZWVrLnRleHRDb250ZW50ID0gZGF5LmRheU9mV2VlaztcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gZGF5LmhvdXJzO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChkYXlPZldlZWspO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cbiAgfSlcblxuICBjb25zdCBzaWduSW1nID0gbmV3IEltYWdlKCk7XG4gICAgc2lnbkltZy5zcmMgPSBzaWduSW1hZ2U7XG4gICAgc2lnbkltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJuZW9uIGNvZmZlZSBzaWduXCIpO1xuICAgIHNpZ25JbWcuY2xhc3NMaXN0LmFkZCgnZmxpY2tlcicpO1xuICAgIHNpZ25JbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNpZ25JbWcuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tlcicpO1xuICAgICAgICAgIH0sIDE4MDApO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWduSW1nKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG91cnNQYWdlO1xuIiwiaW1wb3J0IHsgY29mZmVlTWVudSwgZm9vZE1lbnUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IE1lbnVQYWdlID0gZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgLy8gQ29mZmVlIG1lbnVcblxuICBjb25zdCBsZWZ0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29sKTtcblxuICBjb25zdCBjb2ZmZWVTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29mZmVlU3VidGl0bGUuaW5uZXJIVE1MID0gXCJPdXIgQ29mZmVlIE1lbnVcIjtcbiAgbGVmdENvbC5hcHBlbmRDaGlsZChjb2ZmZWVTdWJ0aXRsZSk7XG5cbiAgY29uc3QgY29mZmVlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGVmdENvbC5hcHBlbmRDaGlsZChjb2ZmZWVMaXN0KTtcblxuICBjb2ZmZWVNZW51LmZvckVhY2goKG9mZmVyaW5nLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGl0ZW1EaXYuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gb2ZmZXJpbmcuaXRlbTtcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBvZmZlcmluZy5wcmljZTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvZmZlcmluZy5kZXNjcmlwdGlvbjtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICBjb2ZmZWVMaXN0LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG4gIH0pXG5cbiAgLy9Gb29kIG1lbnVcblxuICBjb25zdCByaWdodENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb2wpO1xuXG4gIGNvbnN0IGZvb2RTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgZm9vZFN1YnRpdGxlLmlubmVySFRNTCA9IFwiT3VyIEZvb2QgTWVudVwiO1xuICByaWdodENvbC5hcHBlbmRDaGlsZChmb29kU3VidGl0bGUpO1xuXG4gIGNvbnN0IGZvb2RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICByaWdodENvbC5hcHBlbmRDaGlsZChmb29kTGlzdCk7XG5cbiAgZm9vZE1lbnUuZm9yRWFjaCgob2ZmZXJpbmcsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbURpdi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBvZmZlcmluZy5pdGVtO1xuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IG9mZmVyaW5nLnByaWNlO1xuXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9mZmVyaW5nLmRlc2NyaXB0aW9uO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICAgIGZvb2RMaXN0LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG4gIH0pXG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTmVvbmRlcnRoYXctUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVvbkZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGlja2VyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mbGlja2VyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlja2VyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IC0xMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmxpbmsge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcGFkZGluZzogaW5pdGlhbDtcXG4gIG1hcmdpbjogaW5pdGlhbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ob21lcGFnZSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuI25hdmJhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgei1pbmRleDogMzA7XFxufVxcblxcbiNuYXZiYXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXZiYXIgPiAqOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21vYmlsZS1tZW51LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNtZW51LXN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVvbkZvbnRcXFwiO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBtYXJnaW4tdG9wOiAxMjBweDtcXG59XFxuXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0ID4gaW1nLFxcbiNob3VycyA+IGltZyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5kYXkge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbiNob3VycyxcXG4jbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWVudSA+IGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTIpO1xcbn1cXG5cXG4jZ2l0aHViLWxvZ28ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4vKiBGb3IgaW1hZ2UgY2Fyb3VzZWwgKi9cXG5cXG4uY2Fyb3VzZWwge1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJvdXNlbCA+IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dC1yZXZlcnNlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDEwMDBtcyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMTAwMG1zO1xcbn1cXG5cXG4uc2xpZGUgPiBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4tcmV2ZXJzZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVbZGF0YS1hY3RpdmVdIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxMDAwbXM7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRvcDogNTAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b246aG92ZXIsXFxuLmNhcm91c2VsLWJ1dHRvbjpmb2N1cyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigyNTUsIDEsIDIxMyk7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24ucHJldiB7XFxuICBsZWZ0OiAtNnJlbTtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbi5uZXh0IHtcXG4gIHJpZ2h0OiAtNnJlbTtcXG59XFxuXFxuLmNhcm91c2VsLW5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MCUpO1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbi5jYXJvdXNlbC1jaXJjbGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJvdXNlbC1jaXJjbGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTMyLCAyMzUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3ctc2hyaW5rIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTMyLCAyMzUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICB9XFxuICA5MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMzIsIDIzNSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlW2RhdGEtYWN0aXZlXSB7XFxuICBhbmltYXRpb246IGdyb3ctc2hyaW5rIDI4MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgZm9yIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggb3IgbGVzcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICNwYWdlLWNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICBidXR0b24ubGluayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gICNtZW51LFxcbiAgI2hvdXJzLFxcbiAgI2NvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI21lbnUgPiBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNjb250YWN0LFxcbiAgI2hvdXJzID4gaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gICNtZW51LXN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LWRpdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA0NXB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgfVxcblxcbiAgI21vYmlsZS1tZW51LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMjAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMSwgMjEzKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoOTUsIDk1LCA5NSwgMC40MjcpO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCA+IGJ1dHRvbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmNhcm91c2VsIHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICB9XFxuXFxuICAuY2Fyb3VzZWwtYnV0dG9uLnByZXYge1xcbiAgICBsZWZ0OiAtMnJlbTtcXG4gIH1cXG5cXG4gIC5jYXJvdXNlbC1idXR0b24ubmV4dCB7XFxuICAgIHJpZ2h0OiAtMnJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wi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YixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLCtDQUErQztJQUMvQyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmVvbkZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTmVvbmRlcnRoYXctUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmxpY2tlciB7XFxuICBhbmltYXRpb24tbmFtZTogZmxpY2tlcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5saW5rIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHBhZGRpbmc6IGluaXRpYWw7XFxuICBtYXJnaW46IGluaXRpYWw7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaG9tZXBhZ2Uge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbiNuYXZiYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHotaW5kZXg6IDMwO1xcbn1cXG5cXG4jbmF2YmFyID4gKiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyID4gKjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2JpbGUtbWVudS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbWVudS1zdmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5lb25Gb250XFxcIjtcXG59XFxuXFxuI3BhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxufVxcblxcbmgyLFxcbmgzLFxcbmg0LFxcbnAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxufVxcblxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdCA+IGltZyxcXG4jaG91cnMgPiBpbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uZGF5IHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jaG91cnMsXFxuI21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21lbnUgPiBkaXYge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3R0b206IDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUyKTtcXG59XFxuXFxuI2dpdGh1Yi1sb2dvIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLyogRm9yIGltYWdlIGNhcm91c2VsICovXFxuXFxuLmNhcm91c2VsIHtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgPiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQtcmV2ZXJzZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxufVxcblxcbi5zbGlkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAxMDAwbXMgb3BhY2l0eSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IDEwMDBtcztcXG59XFxuXFxuLnNsaWRlID4gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXJldmVyc2Uge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlW2RhdGEtYWN0aXZlXSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMTAwMG1zO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uOmhvdmVyLFxcbi5jYXJvdXNlbC1idXR0b246Zm9jdXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMjU1LCAxLCAyMTMpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLnByZXYge1xcbiAgbGVmdDogLTZyZW07XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24ubmV4dCB7XFxuICByaWdodDogLTZyZW07XFxufVxcblxcbi5jYXJvdXNlbC1uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtY2lyY2xlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzMiwgMjM1KTtcXG59XFxuXFxuQGtleWZyYW1lcyBncm93LXNocmluayB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEzMiwgMjM1KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxLCAyMTMpO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTMyLCAyMzUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmNhcm91c2VsLWNpcmNsZVtkYXRhLWFjdGl2ZV0ge1xcbiAgYW5pbWF0aW9uOiBncm93LXNocmluayAyODAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IG9yIGxlc3MgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjcGFnZS1jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLmxpbmsge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAjbWVudSxcXG4gICNob3VycyxcXG4gICNjb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNtZW51ID4gZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAjY29udGFjdCxcXG4gICNob3VycyA+IGltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAjbWVudS1zdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1kaXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNDVweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gICNtb2JpbGUtbWVudS1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEsIDIxMyk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDk1LCA5NSwgOTUsIDAuNDI3KTtcXG4gICAgei1pbmRleDogMTA7XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAgPiBidXR0b24ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAjbW9iaWxlLW1lbnUtcG9wdXAgPiBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXJvdXNlbCB7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgfVxcblxcbiAgLmNhcm91c2VsLWJ1dHRvbi5wcmV2IHtcXG4gICAgbGVmdDogLTJyZW07XFxuICB9XFxuXFxuICAuY2Fyb3VzZWwtYnV0dG9uLm5leHQge1xcbiAgICByaWdodDogLTJyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL25lb24tY29mZmVlLXNpZ24uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGluay1jb2ZmZWUtc2xvZ2FuLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0yLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci0zLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NsaWRlci00LmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9ob21lcGFnZSc7XG5pbXBvcnQgeyB0b01lbnUsIHRvSG9tZSwgdG9BYm91dCwgdG9Ib3VycywgdG9Db250YWN0IH0gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5cblxuY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBhcmVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhcmVudFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFyZW50KTtcblxuXG5OYXZCYXIoKTtcbkhvbWVQYWdlKCk7XG5Gb290ZXIoKTtcblxudG9NZW51KCk7XG50b0hvbWUoKTtcbnRvQWJvdXQoKTtcbnRvSG91cnMoKTtcbnRvQ29udGFjdCgpOyJdLCJuYW1lcyI6WyJpbWFnZVBhdGhzIiwiQ2Fyb3VzZWwiLCJwYXJlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJvdXNlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInByZXZCdG4iLCJpbm5lckhUTUwiLCJuZXh0QnRuIiwibGlzdCIsImZvckVhY2giLCJpbWciLCJsaSIsImZpcnN0IiwidW5kZWZpbmVkIiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJuYXYiLCJjaXJjbGUxIiwiY2lyY2xlMiIsImNpcmNsZTMiLCJjaXJjbGU0IiwiaW50ZXJ2YWxJRCIsInN0YXJ0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjaGFuZ2VTbGlkZXMiLCJzdG9wSW50ZXJ2YWwiLCJzbGlkZXMiLCJhY3RpdmVTbGlkZSIsIm5ld0luZGV4IiwiY2hpbGRyZW4iLCJpbmRleE9mIiwibGVuZ3RoIiwiZGF0YXNldCIsImFjdGl2ZSIsImNpcmNsZXMiLCJhY3RpdmVDaXJjbGUiLCJzZXRUaW1lb3V0IiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwib2Zmc2V0IiwiY2Fyb3VzZWxCdXR0b24iLCJjaXJjbGUiLCJpbmRleCIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJnaXRIdWJMb2dvIiwiRm9vdGVyIiwiZm9vdGVyIiwiZ2l0aHViIiwiSW1hZ2UiLCJ1c2VybmFtZSIsInRvQWJvdXRNb2JpbGUiLCJ0b0NvbnRhY3RNb2JpbGUiLCJ0b0hvdXJzTW9iaWxlIiwidG9NZW51TW9iaWxlIiwibW9iaWxlTmF2IiwibWVudURpdiIsIm1lbnUiLCJhYm91dCIsImhvdXJzIiwiY29udGFjdCIsInRvTW9iaWxlTmF2IiwiTmF2QmFyIiwibmF2QmFyIiwibG9nbyIsIm1vYmlsZU1lbnVEaXYiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJwYWdlQ29udGVudCIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsImltYWdlNCIsImFib3V0VXNUZXh0IiwiY29mZmVlTWVudSIsIml0ZW0iLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiZm9vZE1lbnUiLCJkYXlPZldlZWsiLCJ0b0hvbWUiLCJ0b0hvbWVNb2JpbGUiLCJ0b01lbnUiLCJ0b0Fib3V0IiwidG9Ib3VycyIsInRvQ29udGFjdCIsIkFib3V0UGFnZSIsImFib3V0QnRuIiwibWVudUJ0biIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsIkNvbnRhY3RQYWdlIiwiY29udGFjdEJ0biIsIkhvbWVQYWdlIiwiaG9tZUJ0biIsIkhvdXJzUGFnZSIsImhvdXJzQnRuIiwiTWVudVBhZ2UiLCJjb250YWlucyIsImNvbnRlbnQiLCJjb250YWluZXIiLCJzdWJ0aXRsZSIsInBhcmEiLCJjb2ZmZWVJbWFnZSIsImxlZnRDb2wiLCJjb2ZmZWVJbWciLCJwaG9uZSIsImVtYWlsIiwiYWRkcmVzcyIsImltYWdlc1NlY3Rpb24iLCJzaWduSW1hZ2UiLCJzY2hlZHVsZSIsImRheSIsIml0ZW1EaXYiLCJ0ZXh0Q29udGVudCIsInNpZ25JbWciLCJjb2ZmZWVTdWJ0aXRsZSIsImNvZmZlZUxpc3QiLCJvZmZlcmluZyIsIml0ZW1OYW1lIiwiaXRlbVByaWNlIiwiaXRlbURlc2NyaXB0aW9uIiwicmlnaHRDb2wiLCJmb29kU3VidGl0bGUiLCJmb29kTGlzdCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9