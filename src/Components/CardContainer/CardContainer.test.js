import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow, mount } from 'enzyme';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';



describe('CardContainer', () => {
  let district = new DistrictRepository(kinderData);
  let info = district.cleanData;
  let wrapper = shallow(<CardContainer info={district} />);
  let cards = wrapper.find('Card');
  let mountContainer = mount(<CardContainer info={district}/>);

  it('should render a card for each item in info prop', () => {
    expect(cards.nodes.length).toEqual(info.length);
  });

  it('should give location prop that corresponds to info.location', () => {

    expect(cards.nodes[0].props.location).toEqual(info[0].location);
    expect(cards.nodes[36].props.location).toEqual(info[36].location);
    expect(cards.nodes[99].props.location).toEqual(info[99].location);
    expect(cards.nodes[151].props.location).toEqual(info[151].location);
  });

  it('should give yearAndData prop that corresponds to info.kidsInSchool', () => {

    expect(cards.nodes[1].props.yearAndData).toEqual(info[1].kidsInSchool);
    expect(cards.nodes[67].props.yearAndData).toEqual(info[67].kidsInSchool);
    expect(cards.nodes[111].props.yearAndData).toEqual(info[111].kidsInSchool);
    expect(cards.nodes[180].props.yearAndData).toEqual(info[180].kidsInSchool);
  });

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render comparison-container if comparing array is empty', () => {

  });

  it('should render comparison-container if comparingObj has contents', () => {

  });

  it('should compare 2 cards and return comparing Obj', () => {

  });

  it('should put card in comparing array when clicked', () => {
    expect(mountContainer.state().comparing).toEqual([]);

    let card1 = mountContainer.find('Card').first();

    card1.simulate('click');
    expect(mountContainer.state().comparing).toEqual(['COLORADO']);

  });

  it('should generate comparing Obj when 2 cards in comparing array', () => {
    console.log(mountContainer.state().comparing)
  });

});
