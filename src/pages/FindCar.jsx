import React, { useState } from "react";
import "../styles/FindCar.css";
import CarNav from "../components/CarNav";
import Cars from "../components/Cars";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { AnimeData } from "../data/AnimeData";
import { useSearchParams } from "react-router-dom";

const FindCar = () => {
  const [searchParams] = useSearchParams()
  const initial = searchParams.get("search") ?? "";

  const [query, setQuery] = useState(initial);
  const [text, setText] = useState(initial);
  const [priceRange, setPriceRange] = useState("");
  const [animeCount, setAnimeCount] = useState(0);

  const handleReset = () => {
    setQuery("");
    setText("");
    setPriceRange("");
  };


  const handleSearch = (value) =>
    value === "" ? handleReset() : setQuery(value);
  const handleFilter = (value) =>
    value === "" ? handleReset() : setPriceRange(value);

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
        <Cars
          query={query}
          onReset={handleReset}
          priceRange={priceRange}
          animeCount={animeCount}
        />
        <AnimeData animeQuery={query} onResults={setAnimeCount} />
      </section>
    </>
  );
};

export default FindCar;
