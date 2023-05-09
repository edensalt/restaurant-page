import MenuPage from "../pages/menu";

const toMenu = function () {
    const menuBtn = document.querySelector('#menu-link')
    menuBtn.addEventListener('click', function() {
        MenuPage();
    })
};

export default toMenu;