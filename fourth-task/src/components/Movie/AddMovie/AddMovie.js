import React from 'react';
import './AddMovie.scss';

const AddMovie = (props) => {
  return (
  	<section className="movie-head">
	    <button onClick={props.add}>+ add movie</button>
	</section>
  )
}

export default AddMovie;