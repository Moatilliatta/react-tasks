import React, { Component } from 'react';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Count from './Filter/Count';
import Body from './Filter/Body';
import './Results.css';

class Results extends Component {
	state = {
		movies: [
	      	{id:'1', title: 13, releaseDate: "1981", genre: 'Horror'},
	      	{id:'2', title: 'Titanic', releaseDate: 1997, genre: 'Drama'},
	      	{id:'3', title: 'Dumb & Dumber', releaseDate: 1994, genre: 'Comedy'},
	      	{id:'4', title: 'Avengers End Game', releaseDate: 2019, genre: 'Adventure'},
	      	{id:'5', title: 'IT', releaseDate: 2017, genre: 'Horror'},
	      	{id:'6', title: 'Toy Story', releaseDate: 1995, genre: 'Comedy'}
		]
	}

	render() {

		if(this.state.movies.length === 0) {
			throw new Error('There are no movies to display!');
		}

		return (
			<section className="results">
				<div className="results-control">
					<Filter />
			    	<Sort />
			    </div>
			    <div className="results-list">
			    	<Count totalCount={this.state.movies.length} />
				    <Body movies={ this.state.movies } />
			    </div>
			</section>
		);
	}
}

export default Results;