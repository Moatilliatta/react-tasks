import React, { useState } from 'react';
import './MovieForm.scss';
import genres from '../../../mockData/genres';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

const MovieForm = (props) => {
  const [formData, setFormData] = useState({...props.movieData});

  const sendData = (e) => {
    e.preventDefault();
    formData.id
      ? props.onUpdateMovie(JSON.stringify(formData))
      : props.onAddMovie({...formData, runtime: parseInt(formData.runtime)});
    props.close();
  }

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.type === 'select-multiple'
        ? Array.from(target.selectedOptions, opt => opt.value)
        : target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <form className="form" onSubmit={sendData}>
    <div>
      <label htmlFor="id">Movie ID</label>
      <input
        name="id"
        type="text"
        readOnly
        value={formData.id ?? ''}
        onChange={handleInputChange}
        />
    </div>
    <div>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        value={formData.title ?? ''}
        onChange={handleInputChange}
        required
        />
    </div>
    <div>
      <label htmlFor="release_date">Release Date</label>
      <input
        name="release_date"
        type="date"
        value={formData.release_date ?? ''}
        onChange={handleInputChange}
        required
        />
    </div>
    <div>
      <label htmlFor="movie-url">Movie URL</label>
      <input
        name="poster_path"
        type="text"
        value={formData.poster_path ?? ''}
        onChange={handleInputChange}
        required
        />
    </div>
    <div>
      <label htmlFor="genres">Genre</label>
      <select
        name="genres"
        multiple={true}
        value={formData.genres ?? []}
        onChange={handleInputChange}
        >
        {
          genres.map((genre) => <option id={genre} key={genre}>{genre}</option>)
        }
      </select>
    </div>
    <div>
      <label htmlFor="overview">Overview</label>
      <input 
        name="overview"
        type="text"
        value={formData.overview ?? ''}
        onChange={handleInputChange}
        required
        />
    </div>
    <div>
      <label htmlFor="runtime">Runtime</label>
      <input 
        name="runtime"
        type="text"
        value={formData.runtime ?? ''}
        onChange={handleInputChange}
        required
        />
    </div>
    <div className="buttons-frm">
      <input type="reset" value="Reset"/>
      <input type="submit" value="Submit"/>
    </div>
  </form>
  )
}

const mapDispatcherToProps = (dispatch) => {
  return {
    onAddMovie: (movie) => dispatch(actionCreators.createMovie(movie)),
    onUpdateMovie: (movie) => dispatch(actionCreators.editMovie(movie))
  }
}

export default connect(null, mapDispatcherToProps)(MovieForm);