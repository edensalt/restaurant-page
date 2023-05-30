import './style.css';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import { toMenu, toHome, toAbout, toHours, toContact } from './navigation';
import Footer from './components/footer';


const parent = document.createElement("div");
parent.setAttribute("id", "parent");
document.body.appendChild(parent);


NavBar();
HomePage();
Footer();

toMenu();
toHome();
toAbout();
toHours();
toContact();