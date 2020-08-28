import React from 'react';
import './MovieInfo.scss';

const MovieInfo = ({ movie, close }) => {
  return (
    <div className="MovieInfo">
      <div className="top-info">
        <span>netflix roulette</span>
        <label onClick={close}><img alt={movie.title} src={process.env.PUBLIC_URL+'search.png'} /></label>
      </div>
      <main>
        <img alt={movie.title} src={movie.imgSrc} />
        <section>
          <p className="title-genre search-section">
            <label>{movie.title} <span>{movie.rating}</span></label>
          </p>
          
          <p className="genre">
            <label>{movie.genre}</label>
          </p>

          <p className="release-duration">
            <label>{movie.releaseDate}</label><span>{movie.duration} min</span>
          </p>

          <p className="description">
            <label>{movie.description}</label>
          </p>
         </section>
      </main>
    </div>
  )
}

export default MovieInfo;