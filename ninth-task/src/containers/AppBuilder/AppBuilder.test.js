import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';


import {
  AppBuilder,
  mapDispatchToProps,
  mapStateToProps
} from './AppBuilder';
import MovieInfo from '../../components/Movie/MovieInfo/MovieInfo';
import MockMovie from '../../mockData/newMovie';
import AddMovie from '../../components/Movie/AddMovie/AddMovie';
import Search from '../../components/Search/Search';
import BaseMovieForm from '../../components/Movie/BaseMovieForm/BaseMovieForm';
import Modal from '../../components/Movie/Modal/Modal';

import * as actionCreators from '../../store/actions/actionCreators';
import * as actionTypes from '../../store/actions/actionTypes';

import { mountCompWithStoreRouter, testWithMockStore } from '../../utils/testHelpers';

configure({adapter: new Adapter()});

describe('<AppBuilder />', ()=>{
	let wrapper;

	it('should render <AppBuilder /> with currentMovie', () => {

    const expectedState = { currentMovie: MockMovie, movieList: [] };
    const store = testWithMockStore(expectedState);

		wrapper = mountCompWithStoreRouter(
			store,
			[ '/film/1' ],
			<AppBuilder currentMovie={MockMovie} />
		)
		expect(wrapper.find(MovieInfo)).toHaveLength(1);
	})

  it('should render <AppBuilder /> with AddMovie, Search and Modal', () => {
    const expectedState = {};
    const store = testWithMockStore(expectedState);
    wrapper = mountCompWithStoreRouter(
      store,
      [ '/search/test' ],
      <AppBuilder currentMovie={{}}/>
    )
    expect(wrapper.find(AddMovie)).toHaveLength(1);
    expect(wrapper.find(Search)).toHaveLength(1);
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(BaseMovieForm)).toHaveLength(0);
  })

  it('should render <AppBuilder /> with currentMovie and close it', () => {

    const expectedState = { currentMovie: MockMovie, movieList: [] };
    const store = testWithMockStore(expectedState);
    const onClearCurrentMovie = jest.fn();
    const historyMock = {
        listen: () => {},
        location: {
            pathname: 'fake-path-name',
        },
        push: jest.fn(),
        goBack: jest.fn()
    };

    const goBackSpy = jest.spyOn(historyMock, 'goBack');

    wrapper = mountCompWithStoreRouter(
      store,
      [ '/film/1' ],
      <AppBuilder 
        currentMovie={MockMovie} 
        onClearCurrentMovie={onClearCurrentMovie}
        movieList={[{title: 'one'},{title: 'two'}]}
        history={historyMock}
        />
    )

    wrapper.find('label').first().simulate('click');

    expect(onClearCurrentMovie.mock.calls.length).toBe(1);
    expect(goBackSpy).toHaveBeenCalledTimes(1);
  })

  it('should render <AppBuilder /> with currentMovie and redirect to home', () => {

    const expectedState = { currentMovie: MockMovie, movieList: [] };
    const store = testWithMockStore(expectedState);


    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
      useParams: () => ({
        id: 1,
      })
    }));

    const onClearCurrentMovie = jest.fn();
    const getMovieById = jest.fn();
    const historyMock = {
        listen: () => {},
        location: {
            pathname: '/film/:id',
        },
        push: jest.fn(),
        goBack: jest.fn()
    };

    const pushSpy = jest.spyOn(historyMock, 'push');

    wrapper = mountCompWithStoreRouter(
      store,
      [ '/film/1' ],
      <Route path='/film/:id'>
        <AppBuilder 
          currentMovie={MockMovie}
          getMovieById={getMovieById}
          onClearCurrentMovie={onClearCurrentMovie}
          movieList={[]}
          history={historyMock}
          />
      </Route>
    )

    wrapper.find('label').first().simulate('click');

    expect(onClearCurrentMovie.mock.calls.length).toBe(1);
    expect(getMovieById.mock.calls.length).toBe(1);
    expect(pushSpy).toHaveBeenCalledTimes(1);
  })

  it('should dispatch getMovieById', () => {
      const dispatch = jest.fn(()=>actionCreators.getMovieById(1));

      mapDispatchToProps(dispatch).getMovieById(1);
      expect(dispatch.mock.results[0].value).toEqual(
        { type: actionTypes.GET_MOVIE_BY_ID, movie: 1}
      );
  });

  it('should dispatch onClearCurrentMovie', () => {
      const dispatch = jest.fn(()=>actionCreators.clearCurrentMovie());

      mapDispatchToProps(dispatch).onClearCurrentMovie();
      expect(dispatch.mock.results[0].value).toEqual(
        { type: actionTypes.CLEAR_CURRENT_MOVIE, currentMovie: {}}
      );
  });

  it('should get state values', () => {
    const initialState = {
      currentMovie: MockMovie,
      movieList: []
    };

    expect(mapStateToProps(initialState).currentMovie).toEqual(MockMovie);
    expect(mapStateToProps(initialState).movieList).toEqual([]);
  });
})