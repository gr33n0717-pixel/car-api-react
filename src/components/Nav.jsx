import React, { useState } from "react";
import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import LayoutMenu from "./LayoutMenu";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar__home">
      <div className="nav__content--wrapper--home">
        <div className="logo">
          <img src="/blinker-icon.png" alt="logo" />
        </div>
        <button
          className={`drop-down_menu ${menuOpen ? "close__menu" : "menu__btn--home"}`}
          aria-label="Open Navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </button>
        {menuOpen && (
          <div className="drop-down__menu">
            <LayoutMenu />
          </div>
        )}
        <div className="nav__links--home">
          <LayoutMenu />
        </div>
      </div>
    </header>
  );
};

export default Nav;
