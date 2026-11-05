import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FindCar.css";
import Cars from "../components/Cars";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { AnimeData } from "../data/AnimeData";

const FindCar = () => {
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [priceRange, setPriceRange] = useState("")
  const [animeCount, setAnimeCount] = useState(0)

  const handleSearch = (value) => {
    if (value ===  "" ) {
      handleReset()
    } else {
      setQuery(value);
    }
  };

  const handleReset = () => {
    setQuery("");
    setText("");
    setPriceRange("")
  };

  return (
    <>
      <header className="navbar">
        <div className="nav__menu--wrapper">
          <div className="nav__content--wrapper">
            <div className="logo">
              <img src="/blinker__white.png" alt="logo" />
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
              <Search
                onSearch={handleSearch}
                text={text}
                onTextChange={setText}
              />
            </div>
          </div>
        </div>
      </header>
      <section id="search">
        <div className="search__results--wrapper">
          <h1 className="search__results">
            Search results for: <span className="purple">{query}</span>
          </h1>
          <Filter priceRange={priceRange} onFilter={(value) =>(value === "" ? handleReset(): setPriceRange(value))} />
        </div>
        <Cars query={query} onReset={handleReset} priceRange={priceRange} animeCount={animeCount}/>
        <AnimeData animeQuery={query} onResults={setAnimeCount} />
      </section>
    </>
  );
};

export default FindCar;
