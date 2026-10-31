import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar__home">
      <div className="nav__content--wrapper--home">
        <div className="logo">
          <img src="public/blinker-icon.png" alt="logo" />
        </div>
        <button className="menu__btn--home" aria-label="Open Navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="nav__links--home">
          <Link to="/" className="nav__link--home link__hover-effect--home">
            {" "}
            About Us
          </Link>
          <Link
            to="findcar"
            className="nav__link--home link__hover-effect--home"
          >
            Find your car
          </Link>
          <Link to="/" className="nav__link--primary--home">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
