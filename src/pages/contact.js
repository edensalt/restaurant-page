import coffeeImage from "../images/neon-coffee-sign.jpg";

const ContactPage = function () {
  const content = document.querySelector("#page-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.setAttribute("id", "contact");
  content.appendChild(container);

  const subtitle = document.createElement("h2");
  subtitle.innerHTML = "Contact us";
  container.appendChild(subtitle);

  const coffeeImg = new Image();
  coffeeImg.src = coffeeImage;
  coffeeImg.setAttribute("alt", "neon coffee sign");
  coffeeImg.classList.add("flicker");
  coffeeImg.addEventListener("load", () => {
    setTimeout(() => {
      coffeeImg.classList.remove("flicker");
    }, 1800);
  });
  container.appendChild(coffeeImg);

  const phone = document.createElement("p");
  phone.innerHTML = `<a href="tel:+1-555-555-5555">555-555-5555</a>`;
  container.appendChild(phone);

  const email = document.createElement("p");
  email.innerHTML = `<a href="mailto:hello@neoncoffee.com"</a>hello@neoncoffee.com</a>`;
  container.appendChild(email);

  const address = document.createElement("p");
  address.innerHTML = "100 Amazing St, Awesome City, ST";
  container.appendChild(address);

  return container;
};

export default ContactPage;
