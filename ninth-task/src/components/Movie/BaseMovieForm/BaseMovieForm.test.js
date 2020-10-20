import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieForm from '../../../containers/Movie/MovieForm/MovieForm';
import BaseMovieForm  from './BaseMovieForm';

configure({adapter: new Adapter()});

describe('<BaseMovieForm />', ()=>{
	let wrapper;
	beforeEach(()=>{
		wrapper = shallow(<BaseMovieForm movieData={{title: 'My Title'}} close={()=>{}} />);
	});

	it('should render <label /> when mounted with "add" as content', ()=>{
		wrapper.setProps({action: 'add'})
		expect(wrapper.find('label').contains('add')).toBe(true);
	})

	it('should render <label /> when mounted with "edit" as content', ()=>{
		wrapper.setProps({action: 'edit'})
		expect(wrapper.find('label').contains('edit')).toBe(true);
	})

	it('should render <MovieForm /> when mounted with add as content', ()=>{
		expect(wrapper.find(MovieForm)).toHaveLength(1);
	})
})