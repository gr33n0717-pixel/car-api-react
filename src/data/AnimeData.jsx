import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export const AnimeData = ({ animeQuery, onResults }) => {
  const [getAnime, setGetAnime] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchAnime() {
    try {
      const { data } = await axios.get("https://kitsu.io/api/edge/anime", {
        params: { "filter[text]": animeQuery },
      });
      setGetAnime(data.data);
      onResults(data.data.length)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if ( animeQuery === "" ) {
      setGetAnime([])
      onResults(0)
      setLoading(false)
      return;
    }
    fetchAnime();
  }, [animeQuery]);


  if(loading) return <Loading message="Searching for your anime" />

  return (
    <div className="cars__container">
      {getAnime.map((anime) =>(
        <div key={anime.id}>
          <img src={anime.attributes.posterImage.medium}/>
          <h2>{anime.attributes.titles.en}</h2>
          <h3>{anime.attributes.startDate}</h3>
        </div>
      ))}
    </div>
  )
};


