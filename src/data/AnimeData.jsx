import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export const AnimeData = ({ animeQuery, onResults }) => {
  const [getAnime, setGetAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAnime() {
    setLoading(true);
    onResults(null);

    const minWait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      const  [response]  = await Promise.all([
        axios.get("https://kitsu.io/api/edge/anime", {
          params: { "filter[text]": animeQuery },
          timeout: 8000,
        }),
        minWait(5000)
      ]);
      setGetAnime(response.data.data);
      onResults(response.data.data.length);
    } catch (error) {
      console.error(error);
      setGetAnime([]);
      onResults(0);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (animeQuery === "") {
      setGetAnime([]);
      onResults(0);
      setLoading(false);
      return;
    }
    fetchAnime();
  }, [animeQuery]);

  if (loading) return <Loading message="Searching for your anime" />;

  return (
    <div className="cars__container">
      {getAnime.map((anime) => (
        <div key={anime.id}>
          <Link to={`/anime/${anime.id}`}>
          <img src={anime.attributes.posterImage.medium} />
          </Link>
          <h2>{anime.attributes.titles.canonicalTitle}</h2>
          <h3>{anime.attributes.startDate}</h3>
        </div>
      ))}
    </div>
  );
};
