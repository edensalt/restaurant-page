import { imagePaths } from "../constants";

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

  imagePaths.forEach((img) => {
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
        return
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

      setTimeout(startInterval, 0);

    });
  });

  // Change slides with circles

  const circles = document.querySelectorAll("[slide-btn]");
  circles.forEach((circle) => {
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

export default Carousel;
