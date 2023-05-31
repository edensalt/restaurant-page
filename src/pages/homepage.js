import Carousel from "../components/carousel";

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

  return container;
};

export default HomePage;
