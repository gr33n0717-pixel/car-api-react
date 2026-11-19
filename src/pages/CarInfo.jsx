import { Link, useParams } from "react-router-dom";
import { getCars } from "../data/CarsData";
import { useEffect, useState, useRef } from "react";
import "../styles/CarInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarInfo = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);
  const listRef = useRef(null);
  const [recommended, setRecommended] = useState([]);

  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: -listRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    listRef.current.scrollBy({
      left: listRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    async function loadCar() {
      const cars = await getCars();
      // return
      setCar(cars.find((c) => String(c.id) === id));
      setLoading(false);

      const others = cars.filter((c) => String(c.id) !== id);
      setRecommended(others.slice(0, 4));
    }
    setLoading(true)
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

      {!loading ? (
        <>
          <div className="recommended__cars--container">
            <div className="recommended__cars">
              <strong className="recommended__text">
                Cars you may also like
              </strong>

              <div className="recommended__cars--row">
                <button className="next__btn" onClick={scrollLeft}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <div className="recommended__cars--list" ref={listRef}>
                  {recommended.map((rec) => (
                    <Link key={rec.id} to={`/carinfo/${rec.id}`}>
                      <img src={rec.url} alt="" />
                    </Link>
                  ))}
                </div>

                <button className="next__btn" onClick={scrollRight}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="recommended__cars--container">
            <div className="recommended__cars">
              <div className="skeleton skeleton__recommended--text"></div>
              <div className="recommended__cars--row">
                <button className="next__btn">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <div className="recommended__cars--list">
                  <div className="skeleton recommended__car--img"></div>
                  <div className="skeleton recommended__car--img"></div>
                </div>

                <button className="next__btn">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarInfo;
