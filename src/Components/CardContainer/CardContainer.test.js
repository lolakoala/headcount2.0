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
    let comparisonContainer = mountContainer.find('.compare-and-button');

    expect(mountContainer.state().comparing).toEqual([]);
    expect(comparisonContainer.length).toEqual(0);
  });

  it('should put card in comparing array when clicked', () => {
    let card1 = mountContainer.find('Card').first();

    expect(mountContainer.state().comparing).toEqual([]);
    card1.simulate('click');
    expect(mountContainer.state().comparing).toEqual(['COLORADO']);

  });

  it('should generate comparing Obj when 2 cards in comparing array', () => {
    let card2 = mountContainer.find('Card').last();

    expect(mountContainer.state().comparing.length).toEqual(1);
    card2.simulate('click');
    expect(mountContainer.state().comparing.length).toEqual(2);
    expect(mountContainer.state().comparingObj).toEqual({
      'YUMA SCHOOL DISTRICT 1': 0.909,
      COLORADO: 0.53,
      compared: 0.583
    });
  });

  it('should render comparison-container if comparingObj has contents', () => {
    let comparisonContainer = mountContainer.find('.compare-and-button');

    expect(comparisonContainer.length).toEqual(1);
  });

});
