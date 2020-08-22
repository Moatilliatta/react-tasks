import React from 'react';
import './BaseMovieForm.scss';
import MovieForm from './MovieForm/MovieForm';

const BaseMovieForm = (props) => {
  return (
  	<div className="container-frm">
  		<label>{ props.action ?? 'edit' } movie</label>
		<MovieForm />
  	</div>
  )
}

export default BaseMovieForm;