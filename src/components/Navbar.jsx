import { Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react'
import { whiteLogo } from '../utils/constants';
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
  useEffect(() => {
    const checkURL = () => {
      const isWorkPage = window.location.pathname.includes('Work');
      const logoLink = document.getElementById('logo-link');
      const mainNav = document.getElementsByClassName('main-nav')[0];
      console.log(isWorkPage);
      if (isWorkPage && logoLink) {
        console.log(logoLink.src)
        mainNav.style.background = 'transparent';
        mainNav.style.position = 'absolute'
        logoLink.src = 'https://firebasestorage.googleapis.com/v0/b/d-d-corner.appspot.com/o/dark-logo-simple-version.png?alt=media&token=7724bab6-64ab-4276-a510-b7caa062be9e'; // Replace 'your-new-url' with the desired URL for the logo link on the Work page
      }else{
        logoLink.src = 'https://firebasestorage.googleapis.com/v0/b/d-d-corner.appspot.com/o/Logo-version1.png?alt=media&token=990e9459-a637-46cc-9f40-034ca0bea23a'
      }
    };

    checkURL();
  }, []);
  return (
    <Stack
      className="main-nav"
      direction="row"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img id="logo-link" className="logo" src={whiteLogo} alt="logo" height={55} />
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
