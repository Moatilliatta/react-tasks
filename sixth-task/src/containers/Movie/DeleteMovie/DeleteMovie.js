import React from 'react';
import './DeleteMovie.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

const DeleteMovie = (props) => {
  const removeMovie = () => {
    props.onDeleteMovie(props.movieId);
    props.close();
  }

  return (
    <div className="container-frm">
      <label>delete movie</label>
    <div className="form">
      <div>
          <label>Are you sure you want to delete this movie?</label>
        </div>
        <div className="buttons-frm">
          <button onClick={removeMovie}>confirm</button>
        </div>
    </div>
  </div>
  )
}

const mapDispatchToProps = (dispatcher) => {
  return {
    onDeleteMovie: (id) => dispatcher(actionCreators.removeMovie(id))
  }
}

export default connect(null,mapDispatchToProps)(DeleteMovie);