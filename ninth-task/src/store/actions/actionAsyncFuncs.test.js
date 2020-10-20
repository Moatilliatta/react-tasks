import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actionAsyncFuncs from './actionAsyncFuncs';
import * as actionCreators from './actionCreators'
import { baseMovieUrl, getLastMovies, getOptions, apiMsgs } from '../../utils/sharedFunctions';
import { fetchMockReq } from '../../utils/testHelpers';

import MockMovie from '../../mockData/newMovie';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  let store;

  beforeEach(()=> {
    store = mockStore({ 
      currentMovie: {},
      movieList: [],
      searchByGenre: ''
    });
  });

  afterEach(() => {
    fetchMock.restore()
  })

  // TODO: use the asyncfunc methods.
  //
  // it('should replicate fetchMovies with movieList', () => {
  //   const expectedResult = [{title: 'movie title'},{title: 'movie title'}];
  //   const apiUrl = getLastMovies;
  //   fetchMockReq(apiUrl, { data: expectedResult });

  //   const expectedActions = [actionCreators.getMovies(expectedResult)];
  //   actionAsyncFuncs.fetchMovies()(store.dispatch);
  //   console.log(store.getState());
  //   expect(store.getActions()).toEqual(expectedActions)
  // })

  it('should replicate fetchMovies with movieList', () => {
    const expectedResult = [{title: 'movie title'},{title: 'movie title'}];
    const apiUrl = getLastMovies;
    fetchMockReq(apiUrl, { data: expectedResult });

    const expectedActions = [actionCreators.getMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMovies(resp.data))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate fetchMovies with movieList EMPTY', () => {
    const expectedResult = [];
    const apiUrl = getLastMovies;
    fetchMockReq(apiUrl, { data: expectedResult });

    const expectedActions = [actionCreators.getMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMovies(resp.data))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate fetchMovies with ERROR status', () => {
    const expectedResult = undefined;
    const apiUrl = getLastMovies;

    fetchMockReq(apiUrl, expectedResult, 'GET', 500);
    const expectedActions = [actionCreators.getMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMovies(resp.data))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate fetchMovie by ID that returns a movie object', () => {
    const expectedResult = MockMovie;
    const apiUrl = `${baseMovieUrl}/123`;
    fetchMockReq(apiUrl, expectedResult );

    const expectedActions = [actionCreators.getMovieById(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMovieById(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate fetchMovie by ID that returns an EMPTY object', () => {
    const expectedResult = {};
    const apiUrl = `${baseMovieUrl}/0`;
    fetchMockReq(apiUrl, expectedResult );

    const expectedActions = [actionCreators.getMovieById({})];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMovieById(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate fetchMovie by title that returns a movie object', () => {
    const expectedResult = MockMovie;
    const apiUrl = `${baseMovieUrl}?searchBy=title&search=rocky`;
    fetchMockReq(apiUrl, expectedResult );

    const expectedActions = [actionCreators.getMoviesByTitle(MockMovie)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMoviesByTitle(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate fetchMovie by title that returns an EMPTY object', () => {
    const expectedResult = {};
    const apiUrl = `${baseMovieUrl}?searchBy=title&search=adqweqwdasd`;
    fetchMockReq(apiUrl, expectedResult );

    const expectedActions = [actionCreators.getMoviesByTitle(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMoviesByTitle(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate editMovie and returns valid status', () => {
    const expectedResult = { msg: apiMsgs.movieUpdated, status: 200 };
    const apiUrl = baseMovieUrl;
    const expectedActions = [actionCreators.updateMovie(expectedResult)];

    fetchMockReq(apiUrl, expectedResult, 'PUT');
    
    return fetch(apiUrl, getOptions('PUT', {id: 1, title: 'Title Updated'}))
      .then(({ status }) => {
        const msg = status === 200
          ? apiMsgs.movieUpdated
          : apiMsgs.err;
        
        store.dispatch(actionCreators.updateMovie({ msg: msg, status: status }));
        expect(store.getActions()).toEqual(expectedActions)
      });
  })

  it('should replicate editMovie and return ERROR status', () => {
    const expectedResult = { msg: apiMsgs.err, status: 400 };
    const apiUrl = baseMovieUrl;
    const expectedActions = [actionCreators.updateMovie(expectedResult)];

    fetchMockReq(apiUrl, expectedResult, 'PUT', 400);
    
    return fetch(apiUrl, getOptions('PUT', {id: 1, title: 'Title Updated'}))
      .then(({ status }) => {
        const msg = status === 200
          ? apiMsgs.movieUpdated
          : apiMsgs.err;
        store.dispatch(actionCreators.updateMovie({ msg: msg, status: status }));
        expect(store.getActions()).toEqual(expectedActions)
      })
      .catch((rej) => {});
  })

  it('should replicate addMovie and returns valid status', () => {
    const expectedResult = { msg: apiMsgs.movieCreated, status: 201 };
    const apiUrl = baseMovieUrl;
    const expectedActions = [actionCreators.addMovie(expectedResult)];

    fetchMockReq(apiUrl, expectedResult, 'POST', 201);
    
    return fetch(apiUrl, getOptions('POST', {title: 'New Movie Title'}))
      .then(({ status }) => {
        const msg = status === 201
          ? apiMsgs.movieCreated
          : apiMsgs.err;
        
        store.dispatch(actionCreators.addMovie({ msg: msg, status: status }));
        expect(store.getActions()).toEqual(expectedActions)
      });
  })

  it('should replicate addMovie and returns ERROR status', () => {
    const expectedResult = { msg: apiMsgs.err, status: 500 };
    const apiUrl = baseMovieUrl;
    const expectedActions = [actionCreators.addMovie(expectedResult)];

    fetchMockReq(apiUrl, expectedResult, 'POST', 500);
    
    return fetch(apiUrl, getOptions('POST', {title: 'New Movie Title'}))
      .then(({ status }) => {
        const msg = status === 201
          ? apiMsgs.movieCreated
          : apiMsgs.err;
        
        store.dispatch(actionCreators.addMovie({ msg: msg, status: status }));
        expect(store.getActions()).toEqual(expectedActions)
      });
  })

  it('should replicate deleteMovie and returns valid status', () => {
    const expectedResult = { msg: apiMsgs.movieDeleted, status: 204 };
    const apiUrl = baseMovieUrl;
    const expectedActions = [actionCreators.deleteMovie(expectedResult)];

    fetchMockReq(apiUrl, expectedResult, 'DELETE', 204);
    
    return fetch(apiUrl, getOptions('DELETE'))
      .then(({ status }) => {
        const msg = status === 204
          ? apiMsgs.movieDeleted
          : apiMsgs.err;
        
        store.dispatch(actionCreators.deleteMovie({ msg: msg, status: status }));
        expect(store.getActions()).toEqual(expectedActions)
      });
  })

  it('should replicate deleteMovie and returns ERROR status', () => {
    const expectedResult = { msg: apiMsgs.err, status: 500 };
    const apiUrl = baseMovieUrl;
    const expectedActions = [actionCreators.deleteMovie(expectedResult)];

    fetchMockReq(apiUrl, expectedResult, 'DELETE', 500);
    
    return fetch(apiUrl, getOptions('DELETE'))
      .then(({ status }) => {
        const msg = status === 204
          ? apiMsgs.movieDeleted
          : apiMsgs.err;
        
        store.dispatch(actionCreators.deleteMovie({ msg: msg, status: status }));
        expect(store.getActions()).toEqual(expectedActions)
      });
  })

  it('should replicate sortMoviesBy title with a genre and returns valid status', () => {
    const expectedResult = [
      {title: 'Friday the 13th', genre: ['Horror']},
      {title: 'IT', genre: ['Horror']}
    ];

    const apiUrl = `${baseMovieUrl}?sortBy=title&sortOrder=asc&searchBy=genres&search=Horror`;
    fetchMockReq(apiUrl, expectedResult);

    const expectedActions = [actionCreators.sortMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.sortMovies(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate sortMoviesBy title returns valid status', () => {
    const expectedResult = [
      {title: 'Friday the 13th', genre: ['Horror']},
      {title: 'IT', genre: ['Horror']},
      {title: 'Rocky', genre: ['Sports']},
    ];

    const apiUrl = `${baseMovieUrl}?sortBy=title&sortOrder=asc`;
    fetchMockReq(apiUrl, expectedResult);

    const expectedActions = [actionCreators.sortMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.sortMovies(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate sortMoviesBy title returns ERROR status', () => {
    const expectedResult = {};

    const apiUrl = `${baseMovieUrl}?sortBy=title&sortOrder=asc`;
    fetchMockReq(apiUrl, expectedResult, 'GET', 500);

    const expectedActions = [actionCreators.getMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.getMovies(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate filterMoviesBy genre returns valid status', () => {
    const expectedResult = [
      {title: 'Friday the 13th', genre: ['Horror']},
      {title: 'IT', genre: ['Horror']},
    ];

    const apiUrl = `${baseMovieUrl}?searchBy=genres&search=Horror`;
    fetchMockReq(apiUrl, expectedResult);

    const expectedActions = [actionCreators.filterMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.filterMovies(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate filterMoviesBy genre with no genre returns valid status', () => {
    const expectedResult = [
      {title: 'Friday the 13th', genre: ['Horror']},
      {title: 'IT', genre: ['Horror']},
      {title: 'Rocky', genre: ['Sports']},
    ];

    const genre = 'all'
    const apiUrl = genre === 'all'
      ? getLastMovies
      : `${baseMovieUrl}?searchBy=genres&search=${genre}`

    fetchMockReq(apiUrl, expectedResult);

    const expectedActions = [actionCreators.filterMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.filterMovies(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should replicate filterMoviesBy genre with no genre returns ERROR status', () => {
    const expectedResult = {};

    const genre = 'all'
    const apiUrl = genre === 'all'
      ? getLastMovies
      : `${baseMovieUrl}?searchBy=genres&search=${genre}`

    fetchMockReq(apiUrl, expectedResult, 'GET', 500);

    const expectedActions = [actionCreators.filterMovies(expectedResult)];

    return actionAsyncFuncs.fetchMovieAPI(apiUrl).then((resp) => {
        store.dispatch(actionCreators.filterMovies(resp))
        expect(store.getActions()).toEqual(expectedActions)
    })
  })
})