import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.scss';

class MovieItem extends React.Component {
	render() {
	  return (
	    <div className="MovieCard">
	    	<img src={ this.props.imgSrc } alt={ this.props.title } />
	    	<div className="info">
		    	<label className="title">{ this.props.title }</label>
		    	<label className="release-date">{ this.props.releaseDate }</label>
		    	{/* <label>...</label> */} {/*Visible only on hover*/}
	    	</div>
			<label>{ this.props.genre }</label>
	    </div>
	  )
	}
}

MovieItem.propTypes = {
	title: PropTypes.string,
	releaseDate: PropTypes.number,
	genre: PropTypes.string,
};

export default MovieItem;