import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AnimeData = ({
  animeQuery,
  onResults,
  onLoadingChange,
  showResults,
}) => {
  const [getAnime, setGetAnime] = useState([]);

  async function fetchAnime() {
    onResults(null);
    onLoadingChange(true);

    const minWait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      const [response] = await Promise.all([
        axios.get("https://kitsu.io/api/edge/anime", {
          params: { "filter[text]": animeQuery },
          timeout: 8000,
        }),
        minWait(1000),
      ]);
      setGetAnime(response.data.data);
      onResults(response.data.data.length);
    } catch (error) {
      console.error(error);
      setGetAnime([]);
      onResults(0);
    } finally {
      onLoadingChange(false);
    }
  }

  useEffect(() => {
    if (animeQuery === "") {
      setGetAnime([]);
      onResults(0);
      onLoadingChange(false);
      return;
    }
    fetchAnime();
  }, [animeQuery]);

  return (
    <>
      {showResults && (
        <div className="anime__container">
          {getAnime.map((anime) => (
            <Link to={`/anime/${anime.id}`} key={anime.id}>
              <div className="anime__card">
                <img src={anime.attributes.posterImage.medium} />
                <h2>
                  {anime.attributes.titles.en ||
                    anime.attributes.canonicalTitle}
                </h2>
                <h3>{anime.attributes.startDate}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
