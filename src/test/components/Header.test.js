import React from 'react';
import {shallow} from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {    
    wrapper = shallow(<Header startLogout={() => {}} />);
    startLogout = jest.fn();
  });

test('should render Header correctly',() => {    
    expect(wrapper).toMatchSnapshot();   
});

test ('should call startLogout on button click', ()=>{
    wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

