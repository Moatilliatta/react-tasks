import React from 'react';
import './MovieForm.scss';
import genres from '../../../mockData/genres';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import Input from '../../../UI/Form/Input/Input';
import { Formik, Form } from 'formik';
import formValidations from './formValidations';

const MovieForm = ({ movieData, onAddMovie, onUpdateMovie, close }) => {
  return (
    <Formik
    initialValues={{
      genres: movieData?.genres || [],
      id: movieData?.id || '',
      overview: movieData?.overview || '',
      poster_path: movieData?.poster_path || '',
      release_date: movieData?.release_date || '',
      runtime: movieData?.runtime || 0,
      title: movieData?.title || ''
    }}
    validate={formValidations}
    onSubmit={values => {
      if(!values.id) {
        delete(values.id)
        onAddMovie(values);
      } else {
        onUpdateMovie(JSON.stringify(values))
      }
      close();
    }}
    >
      <Form className="movie-form">
        <Input label="Movie ID" name="id" type="text" readOnly />
        <Input label="Title" name="title" type="text" />
        <Input label="Release Date" name="release_date" type="date"/>
        <Input label="Movie URL." name="poster_path" type="text" />
        <Input
          label="Genre"
          name="genres"
          type="select"
          multiple={true}
          options={genres}
        />
        <Input label="Overview" name="overview" type="text" />
        <Input label="Runtime" name="runtime" type="number" />
        <div className="buttons-frm">
          <input type="reset" value="Reset"/>
          <input type="submit" value="Submit"/>
        </div>
      </Form>
    </Formik>
  )
}

const mapDispatcherToProps = (dispatch) => {
  return {
    onAddMovie: (movie) => dispatch(actionCreators.createMovie(movie)),
    onUpdateMovie: (movie) => dispatch(actionCreators.editMovie(movie))
  }
}

export default connect(null, mapDispatcherToProps)(MovieForm);