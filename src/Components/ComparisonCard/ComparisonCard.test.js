import React from 'react';
import ComparisonCard from './ComparisonCard.js';
import { shallow } from 'enzyme';

describe('ComparisonCard', () => {
  let wrapper = shallow(<ComparisonCard firstDistrict='Denver'
                                        firstAvg={0.5}
                                        secondDistrict='Englewood'
                                        secondAvg={0.4}
                                        comparedAvg={0.65}/>);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have first district with avg', () => {
    let firstInfo = wrapper.find('.first-district');

    expect(firstInfo.length).toEqual(1);
    expect(firstInfo.text()).toEqual('Denver: 0.5');
  });

  it('should have second district with avg', () => {
    let secondInfo = wrapper.find('.second-district');

    expect(secondInfo.length).toEqual(1);
    expect(secondInfo.text()).toEqual('Englewood: 0.4');
  });

  it('should have two arrow images', () => {
    let arrows = wrapper.find('img');

    expect(arrows.length).toEqual(2);
  });

  it('should have compared avg', () => {
    let comparedNum = wrapper.find('.compared-avg');

    expect(comparedNum.length).toEqual(1);
    expect(comparedNum.text()).toEqual('0.65');
  });
});
