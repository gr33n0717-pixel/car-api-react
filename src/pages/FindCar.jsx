import React from "react";
import { Link } from "react-router-dom";
import "../styles/FindCar.css";
import Cars from "../data/Cars";

const FindCar = () => {
  return (
    <>
      <header className="navbar">
        <div className="nav__menu--wrapper">
          <div className="nav__content--wrapper">
            <div className="logo">
              <img src="public/blinker__white.png" alt="logo" />
            </div>
            <button className="menu__btn" aria-label="Open Navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="nav__links">
              <Link to="/" className="nav__link link__hover-effect">
                {" "}
                <span className="white">Home</span>
              </Link>
              <a href="#" className="nav__link link__hover-effect">
                <span className="white">Find your car</span>
              </a>
              <a href="#" className="nav__link--primary">
                Contact
              </a>
            </div>
            <div className="carpark__img"></div>
          </div>
          <div className="browse__cars">
            <h1>Browse Our Cars</h1>
            <div className="input__wrap">
              <input
                type="text"
                placeholder="Search by Model, Make or Keyword"
                id="search__input"
              />
              <div className="search__btn--wrapper" id="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="search">
        <div className="search__results--wrapper">
          <h1 className="search__results">
            Search results for: <span className="purple"></span>
          </h1>

          <div className="filter__wrapper">
            <select name="price__flter" id="price__filter">
              <option defaultValue={""}>
                Filter by price
              </option>
              <option value="LOW_TO_LOW">$0 - $10k</option>
              <option value="LOW_TO_MEDIUM">$10k - $20k</option>
              <option value="MEDIUM_TO_SEMI_HIGH">$20k - $40k</option>
              <option value="SEMI_HIGH_TO_HIGH">$40k - $60k</option>
              <option value="HIGH_TO_VERY_HIGH">$60k - $100k</option>
            </select>
          </div>
        </div>
        <Cars cars={Cars} />
      </section>
    </>
  );
};

export default FindCar;
