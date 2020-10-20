import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from 'formik';
import { act } from 'react-dom/test-utils';

import {
  mountCompWithStore,
  testWithMockStore,
  testStore
} from '../../../utils/testHelpers';
import MockMovie from '../../../mockData/newMovie';
import MovieForm from './MovieForm'
import Modal from '../../../components/Movie/Modal/Modal';

import * as actionCreators from '../../../store/actions/actionCreators';

configure({adapter: new Adapter()});

describe('<MovieForm />', ()=>{
  let wrapper;
  const originalWarn = console.warn;
  let consoleOutput = [];

  afterEach(() => (console.warn = originalWarn));

  const mockedWarn = output => consoleOutput.push(output)
  beforeEach(() => {
    console.warn = mockedWarn;
    consoleOutput = [];
  })

  it('should render <MovieForm /> with Form component', () => {
    const store = testStore({ reqStatus: { status: null } });
    wrapper = mountCompWithStore(
      store,
      <MovieForm />
    )
    expect(wrapper.find(Form)).toHaveLength(1);
  })

  it('should render <MovieForm />, submit with no info and ask for required data', async () => {
    const store = testStore({ reqStatus: { status: null } });
    wrapper = mountCompWithStore(
      store,
      <MovieForm />
    )
    const form = wrapper.find('form').first();
        form.simulate('submit');

    await act(
      () => new Promise((resolve) => {
        setImmediate(() => {
          wrapper.update();
          resolve();
        });
      })
    );
    expect(wrapper.find('section.error')).toHaveLength(6);
  })

  it('should close modal after submit (movie added)', async () => {
    const expectedStatus = { reqStatus: { status: 201, msg: 'Created' } };
    const store = testWithMockStore(expectedStatus);
    wrapper = mountCompWithStore(
      store,
      <MovieForm movieData={MockMovie} close={()=>{}} />
    )

    const form = wrapper.find('form').first();
        form.simulate('submit');

    await act(
      () => new Promise((resolve) => {
        setImmediate(() => {
          wrapper.update();
          resolve();
        });
      })
    );
    // onAddMovie
    // onUpdateMovie
    const actions = store.getActions();
    expect(wrapper.find(Modal)).toHaveLength(0);
    expect(actions).toEqual([actionCreators.clearReqStatus()])
    expect(consoleOutput).toEqual([`Correct! :: ${expectedStatus.reqStatus.msg}`]);
  })

  it('should close modal after submit (movie edited)', async () => {
    const expectedStatus = { reqStatus: { status: 200, msg:'Updated' } };
    const store = testWithMockStore(expectedStatus)
    wrapper = mountCompWithStore(
      store,
      <MovieForm movieData={{...MockMovie, id:1}} />
    )

    const form = wrapper.find('form').first();
        form.simulate('submit');

    await act(
      () => new Promise((resolve) => {
        setImmediate(() => {
          wrapper.update();
          resolve();
        });
      })
    );
    expect(wrapper.find(Modal)).toHaveLength(0);
  })

  it('should log error and modal still displayed after submit (movie NOT added/updated)', async () => {
    const expectedStatus = { reqStatus: { status: 400, msg: 'Error' } };
    const store = testWithMockStore(expectedStatus);
    wrapper = mountCompWithStore(
      store,
      <MovieForm movieData={MockMovie} />
    )

    const form = wrapper.find('form').first();
        form.simulate('submit');

    await act(
      () => new Promise((resolve) => {
        setImmediate(() => {
          wrapper.update();
          resolve();
        });
      })
    );

    const actions = store.getActions();
    expect(actions).toEqual([actionCreators.clearReqStatus()])
    expect(wrapper.find(Modal)).toHaveLength(0);
    expect(consoleOutput).toEqual([`Error! :: ${expectedStatus.reqStatus.msg}`]);
  })
})