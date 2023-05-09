import ContactPage from "../pages/contact";

const toContact = function () {
    const contactBtn = document.querySelector('#contact-link');
    contactBtn.addEventListener('click', function() {
        ContactPage();
    })
};

export default toContact;