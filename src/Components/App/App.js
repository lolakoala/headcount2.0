import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: new DistrictRepository(kinderData)
    };
  }
  render() {
    return (
      <div>
        <h1>HeadCount</h1>
        <h2>Percentage of Kindergartners Enrolled in School</h2>
        <p>Some instructions here</p>
        <CardContainer info={this.state.info.cleanData}/>
      </div>
    );
  }
}

export default App;
