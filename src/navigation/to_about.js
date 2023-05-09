import AboutPage from "../pages/about";

const toAbout = function () {
    const aboutBtn = document.querySelector('#about-link')
    aboutBtn.addEventListener('click', function() {
        AboutPage();
    })
};

export default toAbout;