import { useEffect, useState } from "react";
import notfound from '../../public/notfound.svg'
import {getCars} from '../data/CarsData'
import '../styles/Cars.css'

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars().then((data) => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
        <>
        
      <div id="loading__bar">
        <div className="loading__progress"></div>
        <div className="loading__progress"></div>
      </div>
      <div id="loading__spinner" className="hide-loading">
            <i className="fas fa-spinner cars__loading--spinner"></i>
            <p className="loading__text">Searching for your car</p>
          </div>
        </>

    );
  }

  if (cars.length === 0) {
    return (
      <div id="invalid__search" className="not__found hide-loading">
        <img src={notfound} alt="" />
        <h2 className="loading__text">No search results found</h2>
        <h3 className="loading__text-sub">Click below to reset</h3>
        <button className="reset__btn">Reset Filter</button>
      </div>
    );
  }

  return (
    <>
    <div id="cars">
        <div className="cars__wrapper">
            <div className="cars__container">
                {cars.map((car) =>(
                    <div className="car" key={car.id}>
                        <img className="car__img" src={car.url} alt={car.title} />
                        <div className="car__details">
                            <h2>{car.title}</h2>
                            <p><i class="fa-solid fa-gauge-high"></i>{car.mileage} miles</p>
                            <p><i class="fa-solid fa-car"></i>{car.type}</p>
                            <p><i class="fa-solid fa-gears"></i>{car.transmission}</p>
                            <p>${car.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
};

export default Cars;
