import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Anime.css";

const Anime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const text = anime?.attributes?.synopsis || "No description available.";

  useEffect(() => {
    // return;
    async function fetchOne() {
      try {
        const { data } = await axios.get(
          `https://kitsu.io/api/edge/anime/${id}`,
          { params: { include: "genres" } },
        );
        const included = data.included ?? [];
        setAnime({
          ...data.data,
          genres: included.filter((item) => item.type === "genres"),
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchOne();
  }, [id]);

  return (
    <>
        <img
          className="anime__backdrop"
          src="/BG-img.jpg"
          alt="backgound img"
        />

      <div className="anime__info--container">
        <button className="back__btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
        {anime ? (
          <>
            <div className="anime__info--content">
              <div className="anime__info--wrapper">
                <img
                  className="anime__poster--img"
                  src={anime.attributes.posterImage?.medium}
                  alt={anime.attributes.canonicalTitle}
                />
                <div className="anime__details">
                  <p className="anime__title">
                    {anime.attributes.canonicalTitle}
                  </p>
                  <p className="anime__date">
                    <strong>Start date:</strong> {anime.attributes.startDate}
                  </p>
                  <p className="anime__date">
                    <strong>End date:</strong>{" "}
                    {anime.attributes.endDate || "Present"}
                  </p>
                </div>
              </div>
              <div className="anime__text--wrapper">
                <div className="anime-info__info">
                  {" "}
                  <strong>EPISODES:</strong> {anime.attributes.episodeCount}
                </div>
                <div className="anime-info__info">
                  <strong>GENRES:</strong>{" "}
                  {anime.genres.map((g) => g.attributes.name).join(", ") ||
                    "N/A"}
                </div>
                <div className="anime-info__info">
                  <strong>AUTHOR:</strong> N/A
                </div>
                <div className="anime-info__info">
                  <p
                    className={
                      expanded ? "synopsis__expanded" : "anime__synopsis"
                    }
                  >
                    {text}
                  </p>
                </div>
                <button
                  className="more__btn"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="anime__info--content">
              <div className="anime__info--wrapper">
                <div className="skeleton anime__img--skeleton"></div>
                <div className="skeleton anime__details--skeleton">
                  <div className="skeleton anime__title--skeleton"></div>
                </div>
                <div className="skeleton anime__details--skeleton">
                  <div className="skeleton anime__date--skeleton"></div>
                </div>
                <div className="skeleton anime__details--skeleton">
                  <div className="skeleton anime__date--skeleton"></div>
                </div>
              </div>
              <div className="anime__text--wrapper">
                <div className="skeleton anime-info__info--skeleton"></div>
                <div className="skeleton anime-info__info--skeleton"></div>
                <div className="skeleton anime-info__info--skeleton"></div>
                <div className="skeleton anime__synopsis--skeleton"></div>
                <div className="skeleton more__btn--skeleton"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Anime;
