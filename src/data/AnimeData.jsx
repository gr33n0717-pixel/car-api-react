import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AnimeData = () => {
  const [getAnime, setGetAnime] = useState([]);

  async function fetchAnime() {
    try {
      const { data } = await axios.get(`https://kitsu.io/api/edge/anime`);
      console.log(data);
      setGetAnime(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div>
      {getAnime.map((anime, ) =>(
        <div key={anime.id}>
          <h2>
            <Link to={`/anime/${anime.id}`}>{anime.attributes.slug}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
};


