import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Anime.css";

const Anime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function fetchOne() {
      try {
        const { data } = await axios.get(
          `https://kitsu.io/api/edge/anime/${id}`,
        );
        setAnime(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOne();
  }, [id]);

  if (anime === null) return <p>Loading...</p>;
  const text = anime.attributes.synopsis || "No description available.";
  return (
    <section className="anime__info--container">
      <div className="anime__info--content">
        <div className="anime__info--wrapper">
          <Link to="/findcar" className="back__btn">
            {" "}
            Back{" "}
          </Link>
          <img
            className="anime__poster--img"
            src={anime.attributes.posterImage?.medium}
            alt={anime.attributes.canonicalTitle}
          />
          <p className="anime__title">{anime.attributes.canonicalTitle}</p>
          <p className="anime__start-date">
            <strong>Start date:</strong> {anime.attributes.startDate}
          </p>
          <p className="anime__end-date">
            <strong>End date:</strong> {anime.attributes.endDate || "Present"}
          </p>
        </div>
        <div className="anime__text--wrapper">
          <div className="anime-info__info"> <strong>Eps:</strong> {anime.attributes.episodeCount}</div>
          <div className="anime-info__info">Placeholder text</div>
          <div className="anime-info__info">Placeholder text</div>
          <div className="anime-info__info">
            <p className={expanded ? "" : "anime__synopsis"}>{text}</p>
          </div>
        </div>
        <button
          className="show__more--btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </section>
  );
};

export default Anime;
