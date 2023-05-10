import ContactPage from "../pages/contact";

const toContact = function () {
    const contactBtn = document.querySelector('#contact-link');
    contactBtn.addEventListener('click', function() {
        ContactPage();
    })
};

const toContactMobile = function () {
    ContactPage();
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

export { toContact, toContactMobile }