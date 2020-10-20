import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import './MovieItem.scss';

import EditOptions from '../../../components/Movie/EditOptions/EditOptions';
import EditDots from '../../../components/Movie/EditDots/EditDots';
import Modal from '../../../components/Movie/Modal/Modal';
import BaseMovieForm from '../../../components/Movie/BaseMovieForm/BaseMovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import { getReleaseYear, backendHost } from '../../../utils/sharedFunctions';

import { withRouter } from 'react-router';

const MovieItem = ({getMovieById, movieData, history}) => {
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
    history.push(`/film/${id}`);
  }

  return (
    <div className="MovieCard">
      <Img
        id={movieData.id}
        onClick={()=>showMovieInfoHandler(movieData.id)}
        src={[
          movieData.poster_path,
          `${backendHost}/no-image-available.jpg`
        ]}
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

export default withRouter(MovieItem);