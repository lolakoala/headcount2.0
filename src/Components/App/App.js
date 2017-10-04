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
        <h1 className="header">HeadCount</h1>
        <h2 className="secondHeader">Percentage of Kindergartners Enrolled in School</h2>
        <p className="instructions">Click on a few districts to compare them!</p>
        <CardContainer info={this.state.info.cleanData}/>
      </div>
    );
  }
}

export default App;
