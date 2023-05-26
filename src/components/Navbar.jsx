import { Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { logo } from '../utils/constants';
import './style.css'


const Navbar = () => {
  const location = useLocation();


  const isActive = (path) => {

    return location.pathname === path || location.pathname === '/Contact';
  };

  const openBurgerMenu = () => {
    let burgerBtn = document.querySelector('.burgerContainer');
    let menuContainer = document.querySelector('.burgerNavContainer');

    let linksNav = document.querySelectorAll('.LinkNav');
    let line1 = burgerBtn.firstElementChild.classList
    let line2 = burgerBtn.firstElementChild.nextElementSibling;
    let line3 = burgerBtn.lastElementChild.classList

    let closeMenu = () => {
      menuContainer.style.display = 'none';
    }

    linksNav.forEach(x => x.addEventListener('click', closeMenu))
    line2.classList.toggle('shortLine');
    line1.toggle('shortLine')
    line3.toggle('shortLine')
    if (window.screen.width < 768) {
      if (line2.offsetWidth === 25) {
        console.log('yes');
        menuContainer.style.display = 'flex';


      } else {
        menuContainer.style.display = 'none';
      }
    }



  }

  return (
    <Stack
      className="main-nav"
      direction="row"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img className="logo" src={logo} alt="logo" height={55} />
      </Link>
      <div className="burgerContainer" onClick={openBurgerMenu}>
        <div className="burger-line "></div>
        <div className="burger-line shortLine"></div>
        <div className="burger-line "></div>
      </div>
      <div className="burgerNavContainer">
        <Link
          to="/Work"
          className="LinkNav"
        >
          Work
        </Link>
        <Link
          to="/Service"
          className="LinkNav"
        >
          Services
        </Link>
        <Link
          to="/About-Us"
          className="LinkNav"
        >
          About us
        </Link>
        <Link
          to="/Contact"
          className="LinkNav"
        >
          Contact
        </Link>
      </div>
      <div className="LinksNavPar">
        <Stack className='LinksNav' direction='row'>
          <Link
            to="/Work"
            style={{ display: "flex", alignItems: "center", color: isActive('/Work') ? '#000' : '#fff' }}
            className="LinkNav"
          >
            Work
          </Link>
          <Link
            to="/Service"
            style={{ display: "flex", alignItems: "center", color: isActive('/Work') ? '#000' : '#fff' }}
            className="LinkNav"
          >
            Services
          </Link>
          <Link
            to="/About-Us"
            style={{ display: "flex", alignItems: "center", color: isActive('/Work') ? '#000' : '#fff' }}
            className="LinkNav"
          >
            About us
          </Link>
          <Link
            to="/Contact"
            style={{ display: "flex", alignItems: "center", color: isActive('/Work') ? '#000' : '#fff' }}
            className="LinkNav"
          >
            Contact
          </Link>
        </Stack>
      </div>
    </Stack>
  );
};

export default Navbar;
