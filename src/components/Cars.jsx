import { useEffect, useState } from "react";
import notfound from "/notfound.svg";
import { getCars } from "../data/CarsData";
import "../styles/Cars.css";
import Loading from "./Loading";

const priceRanges = {
  LOW_TO_LOW: [0, 10000],
  LOW_TO_MEDIUM: [10000, 20000],
  MEDIUM_TO_SEMI_HIGH: [20000, 40000],
  SEMI_HIGH_TO_HIGH: [40000, 60000],
  HIGH_TO_VERY_HIGH: [60000, 100000],
};

const Cars = ({ query, onReset, priceRange, animeCount }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredCars = cars.filter((car) => {
    const matchesTitle = car.title.toLowerCase().includes(query.toLowerCase());
    const matchesPrice =
      priceRange === ""
        ? true
        : car.price >= priceRanges[priceRange][0] &&
          car.price <= priceRanges[priceRange][1];
    return matchesTitle && matchesPrice;
  });

  if (filteredCars.length === 0 && animeCount === 0) {
    return (
      <div id="invalid__search" className="not__found hide-loading">
        <img src={notfound} alt="" />
        <h2 className="loading__text">No search results found</h2>
        <h3 className="loading__text-sub">Click below to reset, or search for another car/anime</h3>
        <button className="reset__btn" onClick={onReset}>
          Reset Filter
        </button>
      </div>
    );
  }

  return (
    <>
      <div id="cars">
        <div className="cars__wrapper">
          <div className="cars__container">
            {filteredCars.map((car) => (
              <div
                className="car"
                key={car.id}
                onClick={() => alert("This function hasn't been added yet")}
              >
                <img className="car__img" src={car.url} alt={car.title} />
                <div className="car__details">
                  <h2>{car.title}</h2>
                  <p>
                    <i className="fa-solid fa-gauge-high"></i>
                    {car.mileage} miles
                  </p>
                  <p>
                    <i className="fa-solid fa-car"></i>
                    {car.type}
                  </p>
                  <p>
                    <i className="fa-solid fa-gears"></i>
                    {car.transmission}
                  </p>
                  <p>
                    <span className="purple">
                      ${car.price.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
