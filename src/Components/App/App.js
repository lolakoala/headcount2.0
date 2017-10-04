import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Search from '../Search/Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: new DistrictRepository(kinderData),
      matches: []
    };
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div>
        <h1 className="header">HeadCount</h1>
        <h2 className="secondHeader">Percentage of Kindergartners Enrolled in School</h2>
        <p className="instructions">Some instructions here</p>
        <Search info={this.state.info}
                setAppState={this.setState}/>
        <CardContainer info={this.state.info.cleanData}
                       matches={this.state.matches}/>

      </div>
    );
  }
}

export default App;
