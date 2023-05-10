import "../style.css";

const NavBar = function () {
  const parent = document.querySelector("#content");

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

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "36");
  svg.setAttribute("viewBox", "0 96 960 960");
  svg.setAttribute("width", "36");
  svg.setAttribute("id", "menu-svg");
  svg.classList.add("closed");
  svg.setAttribute("fill", "white");
  svg.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';    
  svg.addEventListener('click', () => {
    if (svg.classList.contains("closed")) {
    svg.innerHTML = '<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>';
    svg.classList.remove("closed");
    svg.classList.add("open");
    } else {
      svg.innerHTML = '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';    
      svg.classList.remove("open");
      svg.classList.add("closed");
    }
});

  const pageContent = document.createElement('div');
  pageContent.setAttribute('id', "page-content");

  parent.appendChild(navBar);
  navBar.appendChild(menu);
  navBar.appendChild(about);
  navBar.appendChild(logo);
  navBar.appendChild(hours);
  navBar.appendChild(contact);
  navBar.appendChild(svg);
  parent.appendChild(pageContent);

  return navBar;
};

export default NavBar;
