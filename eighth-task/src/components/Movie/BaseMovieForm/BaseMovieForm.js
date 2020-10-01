import React from 'react';
import './BaseMovieForm.scss';
import MovieForm from '../../../containers/Movie/MovieForm/MovieForm';

const BaseMovieForm = (props) => {
  return (
  	<div className="container-frm">
  		<label>{ props.action ?? 'edit' } movie</label>
		<MovieForm
			action={props.action}
			movieData={props.movieData}
			close={props.close} />
  	</div>
  )
}

export default BaseMovieForm;