import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/Anime.css'

const Anime = () => {

  const { id } = useParams()
  const [anime, setAnime] = useState(null)


  useEffect(() => {
    async function fetchOne() {
      try {
        const { data } = await axios.get(
          `https://kitsu.io/api/edge/anime/${id}`
        )
        setAnime(data.data)
      } catch(error) {
        console.log(error);
      }
    }
     fetchOne()
  }, [id])


  if (anime === null) return <p>Loading...</p>

  return (
    <section className="anime__info--wrapper">
      <div className="anime__info--container">
        <img src={anime.attributes.posterImage.medium} />
      <p className='anime__title'>{anime.attributes.canonicalTitle}</p>
      <p className="anime__desc">{anime.attributes.description}</p>
      <p className="anime__air-date">{anime.attributes.startDate}<br/>{anime.attributes.endDate}</p>
      </div>
      <Link to="/findcar"> Back </Link>
    </section>
  )
}

export default Anime