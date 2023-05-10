import "../style.css";

const mobileMenu = function () {
    const parent = document.querySelector("#mobile-menu-div");
  
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "mobile-menu-popup");
  
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
  
    parent.appendChild(menuDiv);
    menuDiv.appendChild(menu);
    menuDiv.appendChild(about);
    menuDiv.appendChild(hours);
    menuDiv.appendChild(contact);
  
    return menuDiv;
  };
  
  export default mobileMenu;
  