import React, { Component } from 'react';
import './Search.css'
import DistrictRepository from '../../helper.js';
import kinderData from '../../../data/kindergartners_in_full_day_program.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      <div className="searchContainer">
      <input className="search" placeholder='Search by District'
        type='text'
        onChange={(event) => { this.searchCards(event); }}
        defaultValue={this.state.searchInput} />
      </div>
    );
  }

  // setAndSearch(event) {
  //   this.setState({ searchInput: event.target.value });
  //   console.log(this.state.searchInput);
  //   this.searchCards();
  //
  // }

  searchCards(event) {
    let matches = this.props.info.findAllMatches(event.target.value);
    console.log(matches);
    matches.forEach(dataObj => {
      dataObj.class = 'match';
    });

    this.props.setAppState({ matches });
  }

}

// set state on searchinput is one letter behind
// search functionality is slow as fuck

export default Search;
