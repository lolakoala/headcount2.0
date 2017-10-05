import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper = shallow(<App />);
  let mountedWrapper = mount(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have info in state', () => {

    expect(mountedWrapper.node.state.info).toBeDefined();
  });

  it('should have a title', () => {
    let title = wrapper.find('h1');

    expect(title.text()).toEqual('HeadCount');
  });

  it('should have a subtitle', () => {
    let subtitle = wrapper.find('h2');

    expect(subtitle.text())
    .toEqual('Percentage of Kindergartners Enrolled in School');
  });

  it('should have instructions', () => {
    let instructions = wrapper.find('p');

    expect(instructions).toBeDefined();
  });

  it('should render CardContainer', () => {
    let CardContainer = wrapper.find('CardContainer');

    expect(CardContainer.nodes.length).toEqual(1);
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when search input changes', () => {
    let input = mountedWrapper.find('input');

    input.simulate('change', {target: {value: 'colorado'} });
    expect(mountedWrapper.node.state.string).toEqual('colorado');
  });

  it('should display number of cards according to seach results', () => {
    let input = mountedWrapper.find('input');

    input.simulate('change', {target: {value: 'ad'} });
    expect(mountedWrapper.node.state.string).toEqual('ad');

    let currentCards = mountedWrapper.find('Card');
    expect(currentCards.length).toEqual(8);
  });

});
