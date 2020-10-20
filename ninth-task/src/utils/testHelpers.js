import { createStore, applyMiddleware } from 'redux';
import moviesReducer from '../store/reducers/movies';
import thunk from 'redux-thunk';

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Router } from 'react-router-dom';

import fetchMock from 'fetch-mock';

import configureMockStore from 'redux-mock-store';

export const testStore = (initialState) => {
    const store = applyMiddleware(thunk)(createStore);
    return store(moviesReducer, initialState);
}

export const testWithMockStore = (initialState) => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares);
    return mockStore(initialState);
}

export const mountCompWithStoreRouter = (store, initialEntries=[], component={}) => {
    const wrapper = mount(
      <Provider store={ store }>
        <MemoryRouter initialEntries={initialEntries}>
            { component }
        </MemoryRouter>
      </Provider>
    );
    return wrapper;
}

export const mountCompWithStore = (store, component={}) => {
    const wrapper = mount(
        <Provider store={ store }>
          { component }
        </Provider>
    );
    return wrapper;
}

export const mountCompWithCustomRouter = (store, component = {}, history = {}) => {
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        { component }
      </Router>
    </Provider>
  );
  return wrapper;    
}

export const fetchMockReq = (apiUrl='', expectedResult={}, method='GET', status=200) => {
  return fetchMock.mock(
    apiUrl, 
    {
      body: expectedResult,
      headers: { 'content-type': 'application/json' },
      status: status
    },
    {
      method: method
    }
  );
}
