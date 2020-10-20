import reducer from './movies'
import * as actionTypes from '../actions/actionTypes';
import * as actionCreators from '../actions/actionCreators';

describe('[Movies Reducer]', () => {
  const state = {
    currentMovie: {},
    movieList: [],
    searchByGenre: '',
    reqStatus: {
      msg: '',
      status: 0
    }
  };

  it('should contain initial state', ()=>{
    const newState = reducer(undefined,{type: null});
    expect(newState).toEqual(state)
  })

  it(`should get movie list on "${actionTypes.GET_MOVIES}"`, () => {
  const expectedMovieList = [ 
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' }
  ];

  state.movieList = expectedMovieList;

  const newState = reducer(state, actionCreators.getMovies(expectedMovieList))
    expect(newState.movieList).toHaveLength(3)
  })

  it(`should add one movie in movieList on "${actionTypes.ADD_MOVIE}"`, () => {
    const expReqStatus = { msg: 'Movie Added', status: 201 }
    const newState = reducer(state, actionCreators.addMovie(expReqStatus))
    expect(newState.reqStatus).toEqual(expReqStatus);
  })

  it(`should NOT add one movie in movieList on "${actionTypes.ADD_MOVIE}"`, () => {
    const expReqStatus = {
      msg: 'Something went wrong, please check your data and try again',
      status: 400 
    }
    const newState = reducer(state, actionCreators.addMovie(expReqStatus))
    expect(newState.reqStatus).toEqual(expReqStatus);
  })

  it(`should clear currentMovie on "${actionTypes.CLEAR_CURRENT_MOVIE}"`, () => {
    state.currentMovie = {title: 'Current Movie Title'};
    const newState = reducer(state, actionCreators.clearCurrentMovie())
    expect(newState.currentMovie).toEqual({})
  })

  it(`should clear reqStatus on "${actionTypes.CLEAR_REQ_STATUS}"`, () => {
    state.reqStatus = {status: 200, msg: 'Movie Updated'};
    const newState = reducer(state, actionCreators.clearReqStatus())
    expect(newState.reqStatus).toEqual({status: 0, msg: ''})
  })

  it(`should delete one movie in movieList on "${actionTypes.DELETE_MOVIE}"`, () => {    
    const expReqStatus = { msg: 'Movie Deleted', status: 204 }
    const newState = reducer(state, actionCreators.deleteMovie(expReqStatus))
    expect(newState.reqStatus).toEqual(expReqStatus);
  })

  it(`should NOT delete one movie in movieList on "${actionTypes.DELETE_MOVIE}"`, () => {    
    const expReqStatus = {
      msg: 'Something went wrong, please check your data and try again',
      status: 500 
    }
    const newState = reducer(state, actionCreators.deleteMovie(expReqStatus))
    expect(newState.reqStatus).toEqual(expReqStatus);
  })

  it(`should filter movies by genre on "${actionTypes.FILTER_MOVIE}"`, () => {
    const expectedMovieList = [
      { title: 'Movie 1', genres: ['Horror','Drama'] },
      { title: 'Movie 3', genres: ['Horror','Drama'] }
    ];
    const genre = 'Horror';
    const newState = reducer(state, actionCreators.filterMovies(expectedMovieList, genre))
    expect(newState.movieList).toHaveLength(2)
  })

  it(`should get a movie by id on "${actionTypes.GET_MOVIE_BY_ID}"`, () => {
    const foundMovie = {
        id: 1,
        title: 'Movie 1',
        genres: ['Horror','Drama']
    };
    state.currentMovie = foundMovie;
    const newState = reducer(state, actionCreators.getMovieById(foundMovie))
    expect(newState.currentMovie).toEqual(foundMovie)
  })

  it(`should get movie list sorted by id on "${actionTypes.SORT_MOVIE}"`, () => {
    state.movieList = [
      { id: 1, title: 'Movie 1' },
      { id: 3, title: 'Movie 2' },
      { id: 2, title: 'Movie 3' }
    ];
    const expectedMovieList = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 3' },
      { id: 3, title: 'Movie 2' }
    ]
    const newState = reducer(state, actionCreators.sortMovies(expectedMovieList) )
    expect(newState.movieList).toEqual(expectedMovieList)
  })

  it(`should get movie list sorted by id and genre on "${actionTypes.SORT_MOVIE}"`, () => {
    state.movieList = [
      { id: 1, title: 'Movie 1', genres: ['Horror','Drama'] },
      { id: 3, title: 'Movie 2', genres: ['Drama'] },
      { id: 2, title: 'Movie 3', genres: ['Horror','Drama']}
    ];
    const expectedMovieList = [
      { id: 1, title: 'Movie 1', genres: ['Horror','Drama'] },
      { id: 2, title: 'Movie 3', genres: ['Horror','Drama'] }
    ]
    const newState = reducer(state, actionCreators.sortMovies(expectedMovieList))
    expect(newState.movieList).toEqual(expectedMovieList)
  })

  it(`should update movie on "${actionTypes.UPDATE_MOVIE}"`, () => {
    const expReqStatus = { msg: 'Movie Updated', status: 200 }
    const newState = reducer(state, actionCreators.updateMovie(expReqStatus))
    expect(newState.reqStatus).toEqual(expReqStatus)
  })

  it(`should NOT update movie on "${actionTypes.UPDATE_MOVIE}"`, () => {
    const expReqStatus = {
      msg: 'Something went wrong, please check your data and try again',
      status: 400 
    }
    const newState = reducer(state, actionCreators.updateMovie(expReqStatus))
    expect(newState.reqStatus).toEqual(expReqStatus)
  })
})