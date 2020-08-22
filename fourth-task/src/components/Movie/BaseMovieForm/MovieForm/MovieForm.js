import React from 'react';
import './MovieForm.scss';
import genres from '../../../../mockData/genres';

const MovieForm = (props) => {
  return (
    <form className="form">
		<div>
			<label htmlFor="movie-id">Movie ID</label>
			<input id="movie-id" type="text"/>
		</div>
		<div>
			<label htmlFor="title">Title</label>
			<input id="title" type="text"/>
		</div>
		<div>
			<label htmlFor="release-date">Release Date</label>
			<input id="release-date" type="date"/>
		</div>
		<div>
			<label htmlFor="modie-url">Movie URL</label>
			<input id="movie-url" type="text"/>
		</div>
		<div>
			<label htmlFor="genre">Genre</label>
			<select id="genre">
				<option>select one</option>
				{
					genres.map((genre) => <option id={genre} key={genre}>{genre}</option>)
				}
			</select>
			{ /* <input id="genre" type="text"/> */ }
		</div>
		<div>
			<label htmlFor="overview">Overview</label>
			<input id="overview" type="text"/>
		</div>
		<div>
			<label htmlFor="runtime">Runtime</label>
			<input id="runtime" type="text"/>
		</div>
		<div className="buttons-frm">
			<input type="reset" value="Reset"/>
			<input type="submit" value="Submit"/>
		</div>
	</form>
  )
}

export default MovieForm;