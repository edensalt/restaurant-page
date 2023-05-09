import { hours } from "../constants";
import signImage from "../images/pink-coffee-slogan.jpg"

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

  hours.forEach((day, index) => {
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
    signImg.src = signImage;
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

export default HoursPage;
