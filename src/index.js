import './style.css';
import NavBar from './components/navbar';
import HomePage from './pages/homepage';
import { toMenu, toHome, toAbout, toHours, toContact } from './navigation';
import Footer from './components/footer';

NavBar();
HomePage();
Footer();

toMenu();
toHome();
toAbout();
toHours();
toContact();
