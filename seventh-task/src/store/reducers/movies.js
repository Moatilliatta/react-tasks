import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentMovie: {},
    movieList: [],
    searchByGenre: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_MOVIE:
            return { ...state, movieList: action.movieList };
        case actionTypes.CLEAR_CURRENT_MOVIE:
            return { ...state, currentMovie: {} };
        case actionTypes.DELETE_MOVIE:
            return { ...state, movieList: action.movieList };
        case actionTypes.FILTER_MOVIE:
            return {
                ...state,
                searchByGenre: action.searchByGenre,
                movieList: action.movieList
            };
        case actionTypes.GET_MOVIES:
            return { ...state, movieList: action.movieList };
        case actionTypes.GET_MOVIE_BY_ID:
            return { ...state, currentMovie: action.movie
            };
        case actionTypes.SORT_MOVIE:
            return { ...state, movieList: action.movieList };
        case actionTypes.UPDATE_MOVIE:
            return { ...state, movieList: action.movieList };
        default: return state;
    }
};

export default reducer;