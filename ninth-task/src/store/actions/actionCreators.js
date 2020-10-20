import * as actionTypes from './actionTypes';

export const getMovies = (movieList) => {
  return { type: actionTypes.GET_MOVIES, movieList: movieList };
}

export const getMovieById = (movie) => {
  return { type: actionTypes.GET_MOVIE_BY_ID, movie: movie };
}

export const getMoviesByTitle = (movieList) => {
  return { type: actionTypes.GET_MOVIES, movieList: movieList };
}

export const clearCurrentMovie = () => {
  return { type: actionTypes.CLEAR_CURRENT_MOVIE, currentMovie: {} };
}

export const clearReqStatus = () => {
  return { type: actionTypes.CLEAR_REQ_STATUS, reqStatus: { msg: '', status: 0 } };
}

export const addMovie = (reqStatus) => {
  return {
    type: actionTypes.ADD_MOVIE,
    reqStatus: reqStatus
  };
}

export const updateMovie = (reqStatus) => {
  return {
    type: actionTypes.UPDATE_MOVIE,
    reqStatus: reqStatus
  };
}

export const deleteMovie = (reqStatus) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    reqStatus: reqStatus
  };
}

export const sortMovies = (movieList) => {
  return {type: actionTypes.SORT_MOVIE, movieList: movieList}
}

export const filterMovies = (movieList, genre) => {
  return {
    type: actionTypes.FILTER_MOVIE,
    movieList: movieList,
    searchByGenre: genre
  }
}
