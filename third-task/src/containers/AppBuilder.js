import React, { Component } from 'react';
import Filter from '../components/Results/Filter/Filter';
import Sort from '../components/Results/Sort/Sort';
import Count from '../components/Results/Count/Count';
import Body from '../components/Results/Body/Body';
import './AppBuilder.css';

class AppBuilder extends Component {
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
			<section className="container">
				<div className="control">
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

export default AppBuilder;