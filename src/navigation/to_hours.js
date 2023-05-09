import HoursPage from "../pages/hours";

const toHours = function () {
    const hoursBtn = document.querySelector('#hours-link')
    hoursBtn.addEventListener('click', function() {
        HoursPage();
    })
};

export default toHours;