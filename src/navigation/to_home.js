import HomePage from "../pages/homepage";

const toHome = function () {
    const homeBtn = document.querySelector('#logo-link');
    homeBtn.addEventListener('click', function() {
        HomePage();
    })
};

const toHomeMobile = function () {
    HomePage();
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

export { toHome, toHomeMobile };