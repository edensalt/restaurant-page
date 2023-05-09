import coffeeImage from '../images/neon-coffee-sign.jpg';

const HomePage = function() {

    const content = document.querySelector("#page-content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const container = document.createElement('div');
    container.setAttribute("id", "home");
    content.appendChild(container);

    const coffeeImg = new Image();
    coffeeImg.src = coffeeImage;
    coffeeImg.setAttribute("alt", "neon coffee sign");
    coffeeImg.classList.add('flicker');
    coffeeImg.addEventListener('load', () => {
        setTimeout(() => {
            coffeeImg.classList.remove('flicker');
        }, 1800);
    });
    container.appendChild(coffeeImg);

    return container;

}

export default HomePage;