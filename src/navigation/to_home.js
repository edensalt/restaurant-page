import HomePage from "../pages/homepage";

const toHome = function () {
    const homeBtn = document.querySelector('#logo-link');
    homeBtn.addEventListener('click', function() {
        HomePage();
    })
};

export default toHome;