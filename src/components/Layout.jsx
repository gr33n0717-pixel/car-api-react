import React, { useState } from "react";
import "../styles/Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");
  // const navigate = useNavigate();

  function onLoad() {
    setLoading(true);
  }

  // function handleSearch(e) {
  //   e.preventDefault();
  //   const query = search.trim();
  //   navigate(
  //     query ? `/findcar?search=${encodeURIComponent(query)}` : "/findcar",
  //   );
  // }

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
          <form className="seacrh-bar__wrapper">
            <input
              className="input__home"
              type="text"
              placeholder="Search by Model, Make or Keyword"
            />
            <button
              className={loading ? "loading" : "not__loading"}
              onClick={onLoad}
              
              disabled={loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} />
              ) : (
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              )}
            </button>
          </form>
          <img className="building__img" src="/building.png" alt="building" />
        </div>
      </div>
    </section>
  );
};

export default Layout;
