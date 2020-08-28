import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './MovieItem.scss';

import EditOptions from '../../components/Movie/EditOptions/EditOptions';
import EditDots from '../../components/Movie/EditDots/EditDots';

import Modal from '../../components/Movie/Modal/Modal';
import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import DeleteMovie from '../../components/Movie/DeleteMovie/DeleteMovie';
import MovieContext from '../../context/movieContext';

const MovieItem = (props) => {
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

  const {setSelectedMovie} = useContext(MovieContext);

  const showMovieInfoHandler = (id) => {
    window.scrollTo(0,0);
    setSelectedMovie(props);
  }

  return (
    <div className="MovieCard">
      <img 
        onClick={()=>showMovieInfoHandler(props.id)}
        src={ props.imgSrc }
        alt={ props.title } />
      <div className="info">
        <label className="title">{ props.title }</label>
        <label className="release-date">{ props.releaseDate }</label>
      </div>
      <label>{ props.genre }</label>

    { showEditOpts
      ? <EditOptions
        closed={toggleEditHandler}
        editClicked={editMovieHandler} 
        deleteClicked={deleteMovieHandler}
        />
      : <EditDots clicked={toggleEditHandler} />
    }

      <Modal open={isEditOpen} close={closeEditMovieHandler}>
        <BaseMovieForm />
      </Modal>

      <Modal open={isDeleteOpen} close={closeDeleteMovieHandler}>
        <DeleteMovie />
      </Modal>
    </div>
  )
}

MovieItem.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.number,
  genre: PropTypes.string,
};

export default MovieItem;