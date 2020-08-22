import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.scss';

import EditOptions from '../../components/Movie/EditOptions/EditOptions';
import EditDots from '../../components/Movie/EditDots/EditDots';

import Modal from '../../components/Movie/Modal/Modal';
import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import DeleteMovie from '../../components/Movie/DeleteMovie/DeleteMovie';

class MovieItem extends React.Component {
	state = {
		showEditOpts: false,
		isEditOpen: false,
		isDeleteOpen: false
	}

	toggleEditHandler = () => {
		this.setState((prevState)=>({
			showEditOpts: !prevState.showEditOpts
		}))
	}

	editMovieHandler = () => {
		this.setState({isEditOpen: true});
	}

	deleteMovieHandler = () => {
		this.setState({isDeleteOpen: true});
	}

	closeEditMovieHandler = () => {
		this.setState({isEditOpen: false, showEditOpts: false});
	}

	closeDeleteMovieHandler = () => {
		this.setState({isDeleteOpen: false, showEditOpts: false});
	}

	render() {
	  return (
	    <div className="MovieCard">
	    	<img src={ this.props.imgSrc } alt={ this.props.title } />
	    	<div className="info">
		    	<label className="title">{ this.props.title }</label>
		    	<label className="release-date">{ this.props.releaseDate }</label>
	    	</div>
			<label>{ this.props.genre }</label>

			{ this.state.showEditOpts
				? <EditOptions
					closed={this.toggleEditHandler}
					editClicked={this.editMovieHandler} 
					deleteClicked={this.deleteMovieHandler}
					/>
				: <EditDots clicked={this.toggleEditHandler} />
			}

			<Modal open={this.state.isEditOpen} close={this.closeEditMovieHandler}>
				<BaseMovieForm />
			</Modal>

			<Modal open={this.state.isDeleteOpen} close={this.closeDeleteMovieHandler}>
				<DeleteMovie />
			</Modal>

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