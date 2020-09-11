import * as actionTypes from './actionTypes';

export const getMovies = (movieList) => {
  return { type: actionTypes.GET_MOVIES, movieList: movieList }; 
}

export const getMovieById = (movie) => {
  return { type: actionTypes.GET_MOVIE_BY_ID, movie: movie }; 
}

export const clearCurrentMovie = () => {
  return { type: actionTypes.CLEAR_CURRENT_MOVIE }; 
}

export const addMovie = (statusMsg, movieList) => {
  return {
    type: actionTypes.ADD_MOVIE,
    statusMsg: statusMsg,
    movieList: movieList
  };
}

export const updateMovie = (statusMsg, movieList) => {
  return {
    type: actionTypes.UPDATE_MOVIE,
    statusMsg: statusMsg,
    movieList: movieList
  };
}

export const deleteMovie = (statusMsg, movieList) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    statusMsg: statusMsg,
    movieList: movieList
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
