import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieItem from './MovieItem';
import {
  testWithMockStore,
  mountCompWithStoreRouter
} from '../../../utils/testHelpers';
import MockMovie from '../../../mockData/newMovie';
import EditOptions from '../../../components/Movie/EditOptions/EditOptions';
import EditDots from '../../../components/Movie/EditDots/EditDots';
import Modal from '../../../components/Movie/Modal/Modal';
import BaseMovieForm from '../../../components/Movie/BaseMovieForm/BaseMovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';

configure({adapter: new Adapter()});

describe('<MovieItem />', ()=>{

  let wrapper;

  it('should render <MovieItem /> with form populated, two modals and edit dots.', () => {
    const store = testWithMockStore({});
    wrapper = mountCompWithStoreRouter(
        store,
        ['film/1'],
        <MovieItem movieData={MockMovie} />
    );

    expect(wrapper.find('.title').first().getDOMNode().textContent).toEqual(MockMovie.title);
    expect(wrapper.find(Modal)).toHaveLength(2);
    expect(wrapper.find(EditDots)).toHaveLength(1);
  });

  it('should render <MovieItem /> click edit dots and each option then close them.', () => {
    const expectedState = { reqStatus: { status: null, msg: '' } };
    const store = testWithMockStore(expectedState);
    ReactDOM.createPortal = jest.fn(modal => modal);

    wrapper = mountCompWithStoreRouter(
        store,
        ['film/1'],
        <MovieItem movieData={{...MockMovie, id: 1}} />
    );

    wrapper.find('.edit-dots').simulate('click');
    expect(wrapper.find(EditOptions)).toHaveLength(1);

    wrapper.update();
    wrapper.find('span').at(0).simulate('click');
    expect(wrapper.find(EditOptions)).toHaveLength(0);    

    wrapper.find('.edit-dots').simulate('click');
    wrapper.find('span').at(1).simulate('click');
    expect(wrapper.find(BaseMovieForm)).toHaveLength(1);

    wrapper.find('.close-modal').simulate('click');
    expect(wrapper.find(BaseMovieForm)).toHaveLength(0);

    wrapper.find('.edit-dots').simulate('click');
    wrapper.find('span').at(2).simulate('click');
    expect(wrapper.find(DeleteMovie)).toHaveLength(1);

    wrapper.find('.close-modal').simulate('click');
    expect(wrapper.find(DeleteMovie)).toHaveLength(0);
  });
});