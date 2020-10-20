import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  testWithMockStore,
  mountCompWithStore
} from '../../../utils/testHelpers';

import DeleteMovie from './DeleteMovie';
import Modal from '../../../components/Movie/Modal/Modal';
import * as actionCreators from '../../../store/actions/actionCreators';

configure({adapter: new Adapter()});

describe('<DeleteMovie />', ()=>{
	let wrapper;
  const originalWarn = console.warn;
  let consoleOutput = [];

  afterEach(() => (console.warn = originalWarn));

  const mockedWarn = output => consoleOutput.push(output)
  beforeEach(() => {
    console.warn = mockedWarn;
    consoleOutput = [];
  })
	it('should render <DeleteMovie /> with currentMovie', () => {
    const expectedStatus = { reqStatus: { status: null, msg: '' } };
    const store = testWithMockStore(expectedStatus);
    wrapper = mountCompWithStore(
      store,
      <DeleteMovie />
    )

    expect(wrapper.find('label').first().getDOMNode().textContent).toEqual('delete movie');
	})

  it('should click confirm button and delete movie', () => {
    const expectedStatus = { reqStatus: { status: 200, msg: 'Deleted' } };
    const store = testWithMockStore(expectedStatus);
    wrapper = mountCompWithStore(
      store,
      <DeleteMovie movieId={1} close={()=>{}}/>
    )
    const button = wrapper.find('button').first();
    button.simulate('click');

    const actions = store.getActions();
    expect(wrapper.find(Modal)).toHaveLength(0);
    expect(actions).toEqual([actionCreators.clearReqStatus()])
    expect(consoleOutput).toEqual([`Correct! :: ${expectedStatus.reqStatus.msg}`]);
  })
});