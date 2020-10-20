import configureStore from 'redux-mock-store';

import * as actionCreators from '../actions/actionCreators';
import * as actionTypes from '../actions/actionTypes';

const mockStore = configureStore();
const store = mockStore({ 
      currentMovie: {title: 'Movie Title'},
      movieList: [],
      searchByGenre: ''
});

describe('[Sync actionCreators]', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Dispatches clearCurrentMovie when current movie is set', () => {
    const expectedActions = [
      {
        'type': actionTypes.CLEAR_CURRENT_MOVIE,
        'currentMovie': {}
      },
    ];

    store.dispatch(actionCreators.clearCurrentMovie());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches clearCurrentMovie when current movie is NOT set', () => {
    const expectedActions = [
      {
        'type': actionTypes.CLEAR_CURRENT_MOVIE,
        'currentMovie': {}
      },
    ];

    store.dispatch(actionCreators.clearCurrentMovie());
    expect(store.getActions()).toEqual(expectedActions);
  });
});