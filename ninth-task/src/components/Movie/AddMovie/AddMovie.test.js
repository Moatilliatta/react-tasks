import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddMovie  from './AddMovie';

configure({adapter: new Adapter()});

describe('<AddMovie />', ()=>{
	let wrapper;
	beforeEach(()=>{
		wrapper = shallow(<AddMovie add={()=>{}} />);
	});

	it('should render <button /> when mounted', ()=>{
		expect(wrapper.find('button')).toHaveLength(1);
	})
})