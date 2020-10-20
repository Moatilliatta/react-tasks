import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentMovie: {},
    movieList: [],
    searchByGenre: '',
    reqStatus: {
      msg: '',
      status: 0
    }
};

const reducer = (
  state = initialState,
  { type, movieList, movie, reqStatus, searchByGenre } 
) => {
  switch ( type ) {
    case actionTypes.ADD_MOVIE:
      return { ...state, reqStatus: reqStatus };
    case actionTypes.CLEAR_CURRENT_MOVIE:
      return { ...state, currentMovie: {} };
    case actionTypes.CLEAR_REQ_STATUS:
      return { ...state, reqStatus: { msg: '', status: 0 } };
    case actionTypes.DELETE_MOVIE:
      return { ...state, reqStatus: reqStatus };
    case actionTypes.FILTER_MOVIE:
      return { ...state, searchByGenre: searchByGenre, movieList: movieList };
    case actionTypes.GET_MOVIES:
      return { ...state, movieList: movieList };
    case actionTypes.GET_MOVIE_BY_ID:
      return { ...state, currentMovie: movie };
    case actionTypes.SORT_MOVIE:
      return { ...state, movieList: movieList };
    case actionTypes.UPDATE_MOVIE:
      return { ...state, reqStatus: reqStatus };
    default: return state;
  }
};

export default reducer;