import React from 'react';
import './DeleteMovie.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import useReqStatus from '../../../utils/useReqStatus';

const DeleteMovie = ({
  movieId,
  close,
  reqStatus,
  onDeleteMovie,
  onClearReqStatus,
  onGetMovies
}) => {

  useReqStatus({close, reqStatus, onClearReqStatus, onGetMovies});

  const removeMovie = () => {
    onDeleteMovie(movieId);
  }

  return (
    <div className="container-frm">
      <label>delete movie</label>
    <div className="form">
      <div>
          <label>are you sure you want to delete this movie?</label>
        </div>
        <div className="buttons-frm">
          <button onClick={removeMovie}>confirm</button>
        </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    reqStatus: state.reqStatus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteMovie: (id) => dispatch(actionCreators.removeMovie(id)),
    onClearReqStatus: () => dispatch(actionCreators.clearReqStatus()),
    onGetMovies: () => dispatch(actionCreators.fetchMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovie);