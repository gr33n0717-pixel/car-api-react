import React, { useState } from "react";
import "../styles/FindCar.css";
import CarNav from "../components/CarNav";
import Cars from "../components/Cars";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { AnimeData } from "../data/AnimeData";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import notfound from "/notfound.svg";

const FindCar = () => {
  const [searchParams] = useSearchParams();
  const initial = searchParams.get("search") ?? "";
  const [query, setQuery] = useState(initial);
  const [text, setText] = useState(initial);
  const [priceRange, setPriceRange] = useState("");
  const [animeCount, setAnimeCount] = useState(0);
  const [carCount, setCarCount] = useState(0);
  const [carLoading, setCarLoading] = useState(true);
  const [animeLoading, setAnimeLoading] = useState(false);

  const handleReset = () => {
    setQuery("");
    setText("");
    setPriceRange("");
  };

  const handleSearch = (value) =>
    value === "" ? handleReset() : setQuery(value);
  const handleFilter = (value) =>
    value === "" ? handleReset() : setPriceRange(value);

  const showCars = carCount > 0;
  const showAnime = animeCount > 0;
  const noResults =
    query.trim() !== "" &&
    !carLoading &&
    !animeLoading &&
    carCount === 0 &&
    animeCount === 0;

  const isLoading = !showCars && !showAnime && (carLoading || animeLoading);

  return (
    <>
      <CarNav>
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
      </CarNav>
      <section id="search">
        <div className="search__results--wrapper">
          <h1 className="search__results">
            Search results for: <span className="purple">{query}</span>
          </h1>
          <Filter priceRange={priceRange} onFilter={handleFilter} />
        </div>
        {isLoading && <Loading message="Searching for your results" />}
        <Cars
          query={query}
          priceRange={priceRange}
          onResults={setCarCount}
          onLoadingChange={setCarLoading}
          showResults={showCars}
        />
        <AnimeData
          animeQuery={query}
          onResults={setAnimeCount}
          onLoadingChange={setAnimeLoading}
          showResults={showAnime}
        />

        {noResults && (
          <div id="invalid__search" className="not__found">
            <img src={notfound} alt="not__found--img" />
            <h2 className="loading__text">No results found for "{query}"</h2>
            <h3 className="loading__text-sub">
              Click below to reset, or search for another car/anime
            </h3>
            <button className="reset__btn" onClick={handleReset}>
              Reset Search
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default FindCar;
