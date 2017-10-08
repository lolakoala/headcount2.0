import React from 'react';
import Search from './Search.js';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper = shallow(<Search setAppState={jest.fn()}/>);

  it('should have a search container', () => {
    let searchContainer = wrapper.find('.searchContainer');

    expect(searchContainer.length).toEqual(1);
  });

  it('should have an input', () => {
    let input = wrapper.find('input');

    expect(input.length).toEqual(1);
  });
});
