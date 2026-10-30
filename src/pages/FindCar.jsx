import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FindCar.css'

const FindCar = () => {
  return (
        <header class="navbar">
    <div class="nav__menu--wrapper">
    <div class="nav__content--wrapper">
        <div class="logo">
            <img src="public/blinker__white.png" alt="logo"/>
        </div>
        <button class="menu__btn" aria-label="Open Navigation">
             <i class="fa-solid fa-bars"></i>
        </button>
        <div class="nav__links">
            <Link to='/' class="nav__link link__hover-effect"> <span class="white">Home</span></Link>
            <a href="#" class="nav__link link__hover-effect"><span class="white">Find your car</span></a>
            <a href="#" class="nav__link--primary">Contact</a>
        </div>
        <div class="carpark__img">
        </div>
    </div>
    <div class="browse__cars">
        <h1>Browse Our Cars</h1>
        <div class="input__wrap">
             <input type="text" placeholder="Search by Model, Make or Keyword" id="search__input"/><div class="search__btn--wrapper" id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
    </div>
</div>
</header>
  )
}

export default FindCar