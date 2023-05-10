import "../style.css";
import { toMobileNav } from "../navigation/to_mobile_nav";

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
  toMobileNav();

  return navBar;
};

export default NavBar;
