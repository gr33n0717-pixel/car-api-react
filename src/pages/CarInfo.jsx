import { Link, useParams } from "react-router-dom";
import { getCars } from "../data/CarsData";
import { useEffect, useState } from "react";
import "../styles/CarInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarInfo = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCar() {
      // return
      const cars = await getCars();
      setCar(cars.find((c) => String(c.id) === id));
      setLoading(false);
    }
    loadCar();
  }, [id]);

  if (!loading && !car) return <p>Car not found</p>;

  return (
    <>
      <img className="car__backdrop" src="/backgound-car.jpg" />
      <Link to="/findcar">
        <button className="back__cars">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className="car__info--wrapper">
        {!loading ? (
          <>
            <img className="car__img" src={car.url} alt={car.title} />
            <div className="car__info--container">
              <div className="car__details--card">
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
                <p>{car.description}</p>
                <p>
                  <span>Price: ${car.price.toLocaleString()}</span>
                </p>
              </div>
            </div>
            
          </>
        ) : (
          <>
            <div className="car__img skeleton skeleton__img"></div>
            <div className="car__info--container">
              <div className="car__details--card">
                <div className="skeleton skeleton__title"></div>
                <div className="skeleton skeleton__line"></div>
                <div className="skeleton skeleton__line"></div>
                <div className="skeleton skeleton__line"></div>
                <div className="skeleton skeleton__text"></div>
                <div className="skeleton skeleton__line"></div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="recommended__cars--container">
        <div className="recommended__cars">
          <strong className="recommended__text">Cars you may also like</strong>
          <div className="recommended__cars--list">
          <button className="next__btn"><FontAwesomeIcon icon={faArrowLeft}/></button>
          <img src="/acura-1.jfif" alt="" />
          <button className="next__btn"><FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
