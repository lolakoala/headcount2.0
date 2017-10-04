import React from 'react';
import Card from './Card.js';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  it('should shallow mount', () => {
    let yearAndData = { '2001': .99, '2002': .98, '2003': .97 };
    let wrapper = shallow(<Card location='Denver'
                                yearAndData={yearAndData}/>);
    console.log(wrapper.debug());
  });
});
