import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  let yearAndData = { '2001': .99, '2002': .98, '2003': .97 };
  let wrapper = shallow(<Card location='Denver'
                              yearAndData={yearAndData}
                              select={jest.fn()}/>);

  it('should have a district', () => {
    let district = wrapper.find('h3');

    expect(district.text()).toEqual('Denver');
  });

  it('should have an <li> for every key in yearAndData', () => {
    let yearAndDataKeys = Object.keys(yearAndData);
    let listItems = wrapper.find('li');

    expect(listItems.nodes.length).toEqual(yearAndDataKeys.length);
  });

  it('should display key value pairs at <li>', () => {
    let listItems = wrapper.find('li');
    let yearAndDataKeys = Object.keys(yearAndData);

    expect(listItems.nodes[0].props.children.join(''))
    .toEqual(`${yearAndDataKeys[0]}: ${yearAndData[yearAndDataKeys[0]]}`);
    expect(listItems.nodes[1].props.children.join(''))
    .toEqual(`${yearAndDataKeys[1]}: ${yearAndData[yearAndDataKeys[1]]}`);
    expect(listItems.nodes[2].props.children.join(''))
    .toEqual(`${yearAndDataKeys[2]}: ${yearAndData[yearAndDataKeys[2]]}`);
  });

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
