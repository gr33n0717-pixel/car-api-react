import React from "react";
import '../styles/Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header class="navbar__home">
      <div class="nav__content--wrapper--home">
        <div class="logo">
          <img src="public/blinker-icon.png" alt="logo" />
        </div>
        <button class="menu__btn--home" aria-label="Open Navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="nav__links--home">
          <Link to='/' class="nav__link--home link__hover-effect--home">
            {" "}
            About Us
          </Link>
          <Link to='findcar' class="nav__link--home link__hover-effect--home">
            Find your car
          </Link>
          <Link to='/' class="nav__link--primary--home">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
