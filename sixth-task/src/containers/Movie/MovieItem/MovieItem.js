import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieItem.scss';

import EditOptions from '../../../components/Movie/EditOptions/EditOptions';
import EditDots from '../../../components/Movie/EditDots/EditDots';
import Modal from '../../../components/Movie/Modal/Modal';
import BaseMovieForm from '../../../components/Movie/BaseMovieForm/BaseMovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import { getReleaseYear } from '../../../utils/sharedFunctions';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

const MovieItem = ({getMovieById, movieData}) => {
  const [showEditOpts, setShowEditOpts] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const toggleEditHandler = () =>setShowEditOpts(!showEditOpts);
  const editMovieHandler = () =>setIsEditOpen(true);
  const deleteMovieHandler = () =>setIsDeleteOpen(true);

  const closeEditMovieHandler = () => {
    setIsEditOpen(false);
    setShowEditOpts(false);
  }

  const closeDeleteMovieHandler = () => {
    setIsDeleteOpen(false);
    setShowEditOpts(false);
  }

  const showMovieInfoHandler = (id) => {
    window.scrollTo(0,0);
    getMovieById(id);
  }

  return (
    <div className="MovieCard">
      <img 
        onClick={()=>showMovieInfoHandler(movieData.id)}
        src={ movieData.poster_path }
        alt={ movieData.title } />
      <div className="info">
        <label className="title">{ movieData.title }</label>
        <label className="release-date">{ getReleaseYear(movieData.release_date) }</label>
      </div>
      <label>{ movieData.genres.join(', ') }</label>

    { showEditOpts
      ? <EditOptions
        closed={toggleEditHandler}
        editClicked={editMovieHandler} 
        deleteClicked={deleteMovieHandler}
        />
      : <EditDots clicked={toggleEditHandler} />
    }

      <Modal open={isEditOpen} close={closeEditMovieHandler}>
        <BaseMovieForm
          action="edit"
          movieData={movieData}
          close={closeEditMovieHandler}/>
      </Modal>

      <Modal open={isDeleteOpen} close={closeDeleteMovieHandler}>
        <DeleteMovie movieId={movieData.id} close={closeDeleteMovieHandler}/>
      </Modal>
    </div>
  )
}

MovieItem.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.number,
  genre: PropTypes.string,
};

const mapDispatcherToProps = (dispatch) => {
  return {
    getMovieById: (id) => dispatch(actionCreators.fetchMovieById(id))
  }
}

export default connect(null, mapDispatcherToProps)(MovieItem);