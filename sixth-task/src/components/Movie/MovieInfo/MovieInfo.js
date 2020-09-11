import React from 'react';
import './MovieInfo.scss';
import { getReleaseYear } from '../../../utils/sharedFunctions';

const MovieInfo = ({ movie, close }) => {
  return (
    <div className="MovieInfo">
      <div className="top-info">
        <span>netflix roulette</span>
        <label onClick={close}>
          <img alt={movie.title} src={process.env.PUBLIC_URL+'search.png'} />
        </label>
      </div>
      <main>
        <img alt={movie.title} src={movie.poster_path} />
        <section>
          <p className="title-genre search-section">
            <label>{movie.title} <span>{movie.vote_average}</span></label>
          </p>
          <p className="genre">
            <label>{movie.genres.join(', ')}</label>
          </p>
          <p className="release-duration">
            <label>{getReleaseYear(movie.release_date)}</label><span>{movie.runtime} min</span>
          </p>
          <p className="description">
            <label>{movie.overview}</label>
          </p>
         </section>
      </main>
    </div>
  )
}

export default MovieInfo;