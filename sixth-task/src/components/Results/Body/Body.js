import React from 'react';
import MovieItem from '../../../containers/Movie/MovieItem/MovieItem';
import Spinner from '../../../utils/Spinner';
import './Body.scss';

const Body = (props) => {
    const movieList = props.movies.map((item, key)=>{
        return <MovieItem
            key={item.id}
            movieData={{...item}}
        />
    });

  return (
    <main className="body-list">
        { movieList.length > 0 ? movieList : <Spinner /> }
    </main>
  )
}

export default Body;