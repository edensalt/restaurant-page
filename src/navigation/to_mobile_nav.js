import mobileNav from "../components/mobile_nav";

const toMobileNav = function () {
  const menuBtn = document.querySelector("#menu-svg");
  menuBtn.addEventListener("click", function () {
    mobileNav();
    if (menuBtn.classList.contains("closed")) {
      mobileNav();
      menuBtn.innerHTML =
        '<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>';
      menuBtn.classList.remove("closed");
      menuBtn.classList.add("open");
    } else {
      const parent = document.querySelector("#mobile-menu-div");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      menuBtn.innerHTML =
        '<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>';
      menuBtn.classList.remove("open");
      menuBtn.classList.add("closed");
      parent.appendChild(menuBtn);
    }
  });
};

export { toMobileNav };
