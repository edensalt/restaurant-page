import Carousel from "../components/carousel";
import coffeeImage from "../images/neon-coffee-sign.jpg";

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

  Carousel();

  const coffeeImg = new Image();
  coffeeImg.src = coffeeImage;
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

export default HomePage;
