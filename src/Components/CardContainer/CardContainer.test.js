import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';

describe('CardContainer', () => {
  let district = new DistrictRepository(kinderData);
  let info = district.cleanData;
  let wrapper = shallow(<CardContainer info={info} />);
  let cards = wrapper.find('Card');

  it('should render a card for each item in info prop', () => {

    expect(cards.nodes.length).toEqual(info.length);
  });

  it('should give location prop that corresponds to info.location', () => {

    expect(cards.nodes[0].props.location).toEqual(info[0].location);
    expect(cards.nodes[36].props.location).toEqual(info[36].location);
    expect(cards.nodes[99].props.location).toEqual(info[99].location);
    expect(cards.nodes[151].props.location).toEqual(info[151].location);
  });

  it('should give yearAndData prop that corresponds to info.data', () => {

    expect(cards.nodes[1].props.yearAndData).toEqual(info[1].data);
    expect(cards.nodes[67].props.yearAndData).toEqual(info[67].data);
    expect(cards.nodes[111].props.yearAndData).toEqual(info[111].data);
    expect(cards.nodes[180].props.yearAndData).toEqual(info[180].data);
  });

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
