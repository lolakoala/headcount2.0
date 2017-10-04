import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have info in state', () => {
    let wrapper = mount(<App />);

    expect(wrapper.node.state.info).toBeDefined();

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

});
