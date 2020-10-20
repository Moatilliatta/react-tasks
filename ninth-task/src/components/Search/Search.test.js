import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { testWithMockStore, mountCompWithCustomRouter } from '../../utils/testHelpers';

import Search from './Search';

import { act } from 'react-dom/test-utils';

configure({adapter: new Adapter()});

describe('<Search />', ()=>{
	let wrapper;

  afterEach(function() {
      jest.clearAllMocks();
      jest.restoreAllMocks();
  });

	it('should render <Search /> and update input value', async () => {
  	const store = testWithMockStore({});
    const historyMock = {
        listen: () => {},
        location: {
            pathname: 'fake-path-name',
        },
        push: jest.fn(),
    };

    const pushSpy = jest.spyOn(historyMock, 'push');
    wrapper = mountCompWithCustomRouter( store, <Search />, historyMock);

    await act(
      () => new Promise((resolve) => {
        setImmediate(() => {
          wrapper.find('input').props().onChange({ target: { value: 'a' } });
          wrapper.find('input').props().onKeyPress({ key: 'Enter', charCode: 13 })
          resolve();
        });
      })
    );

    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/search/');
	})
})