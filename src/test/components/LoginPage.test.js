import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper;

beforeEach(() => {    
    wrapper = shallow(<LoginPage />);
    startLogin = jest.fn();
  });

test('should correctly render LoginPage', () => {  
  expect(wrapper).toMatchSnapshot();
});

test ('should call startLogin on button click', ()=>{
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});