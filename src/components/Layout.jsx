import React, { useState } from "react";
import '../styles/Layout.css'



const Layout = () => {


  return (
    <section id="landing__page">
      <div className="content__wrapper">
        <div className="content__container">
          <h1 className="content__header">
            United States most awarded <br /> car subscription platform.
          </h1>
          <div className="content__sub-heading">
            <h2 className="content__sub-header">
              FIND YOU DREAM CAR WITH <span className="purple"> BLINKER</span>
            </h2>
          </div>
          <div className="seacrh-bar__wrapper">
            <input className="input__home" type="text" placeholder="Search by Model, Make or Keyword" />
            <button className="not__loading" onClick="search()">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-spinner spinner"></i>
            </button>
          </div>
          <img
            className="building__img"
            src="public/building.png"
            alt="building"
          />
        </div>
      </div>
    </section>
  );
};

export default Layout;
