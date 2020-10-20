import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Body from './Body';
import MockMovie from '../../../mockData/newMovie';
import MovieItem from '../../../containers/Movie/MovieItem/MovieItem';
import Spinner from '../../../utils/Spinner';

import {
  mountCompWithStoreRouter,
  testWithMockStore
} from '../../../utils/testHelpers';

configure({adapter: new Adapter()});

describe('<Body />', ()=>{
  let wrapper;

  it('should render <Body /> with movieList', () => {
    const store = testWithMockStore({});
    wrapper = mountCompWithStoreRouter(
        store,
        ['search/rocky'],
        <Body movies={[{...MockMovie, id: 1}]}/>
    );
    expect(wrapper.find(MovieItem)).toHaveLength(1);
  })

  it('should render <Body /> with spinner', () => {
    const store = testWithMockStore({});
    wrapper = mountCompWithStoreRouter(
        store,
        ['search/rocky'],
        <Body movies={[]}/>
    );
    expect(wrapper.find(Spinner)).toHaveLength(1);
  })
});