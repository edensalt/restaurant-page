import { aboutUsText } from "../constants";

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
  para.innerHTML = aboutUsText;
  container.appendChild(para);

  const images = document.createElement("section");
  images.setAttribute("id", "holder");
  images.setAttribute("aria-label", "Photos of the coffee shop")
  container.appendChild(images);

  return container;
};

export default AboutPage;
