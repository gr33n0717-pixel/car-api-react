import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import CarMenu from "./CarMenu";

const CarNav = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav__menu--wrapper">
        <div className="nav__content--wrapper">
          <Link to="/" className="logo">
            <img src="/blinker__white.png" alt="logo" />
          </Link>
          <button
            className={menuOpen ? "close__menu--car" : "menu__btn"}
            aria-label={menuOpen ? "Close Navigation" : "Open Navigation"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
          </button>
          {menuOpen && (
            <div className="car__menu">
              <div className="menu__links">
                <CarMenu />
              </div>
            </div>
          )}
          <div className="nav__links">
            <CarMenu />
          </div>
          <div className="carpark__img"></div>
        </div>
        {children}
      </div>
    </header>
  );
};

export default CarNav;