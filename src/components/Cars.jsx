import { useEffect, useState } from "react";
import { getCars, hasCachedCars } from "../data/CarsData";
import { Link } from "react-router-dom";

const priceRanges = {
  LOW_TO_LOW: [0, 10000],
  LOW_TO_MEDIUM: [10000, 20000],
  MEDIUM_TO_SEMI_HIGH: [20000, 40000],
  SEMI_HIGH_TO_HIGH: [40000, 60000],
  HIGH_TO_VERY_HIGH: [60000, 100000],
};

const Cars = ({
  query,
  priceRange,
  onResults,
  onLoadingChange,
  showResults,
}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const isCached = hasCachedCars();

      if (!isCached) {
        onLoadingChange(true);
      }

      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (!isCached) {
          onLoadingChange(false);
        }
      }
    }

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesTitle = car.title.toLowerCase().includes(query.toLowerCase());
    const matchesPrice =
      priceRange === ""
        ? true
        : car.price >= priceRanges[priceRange][0] &&
          car.price <= priceRanges[priceRange][1];
    return matchesTitle && matchesPrice;
  });
  useEffect(() => {
    onResults(filteredCars.length);
  }, [query, priceRange, filteredCars.length, onResults]);

  return (
    <>
      {showResults && (
        <div id="cars">
          <div className="cars__wrapper">
            <div className="cars__container">
              {filteredCars.map((car) => (
                <Link to={`/carinfo/${car.id}`} key={car.id}>
                  <div className="car">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cars;
