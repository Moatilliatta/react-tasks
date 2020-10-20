import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PageNotFound from './PageNotFound';
import {
  testWithMockStore,
  mountCompWithCustomRouter,
  mountCompWithStoreRouter
} from '../../../utils/testHelpers';

configure({adapter: new Adapter()});

describe('<PageNotFound />', ()=>{

	let wrapper;

	it('should render <PageNotFound />', () => {
    const store = testWithMockStore({});
    wrapper = mountCompWithStoreRouter(store, ['/algo'], <PageNotFound />);

    expect(wrapper.find('label').first().getDOMNode().textContent).toEqual('page not found');
	})

it('should render <PageNotFound /> and click to go back', () => {
    const store = testWithMockStore({});
    const historyMock = {
        listen: () => {},
        location: {
            pathname: 'fake-path-name',
        },
        push: jest.fn(),
    };

    const pushSpy = jest.spyOn(historyMock, 'push');
    wrapper = mountCompWithCustomRouter( store, <PageNotFound />, historyMock);
    wrapper.find('button').first().simulate('click');

    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/');
  })
 });