import React, { Component } from 'react';
import './Search.css';

const Search = ({ info, setAppState }) => {
  let searchCards = (event) => {
    let matches = info.findAllMatches(event.target.value);
    matches.forEach(dataObj => {
      dataObj.class = 'match';
    });

    setAppState({ matches });
  };

  return (
    <div className="searchContainer">
    <input className="search" placeholder='Search by District'
      type='text'
      onChange={(event) => { searchCards(event); }} />
    </div>
  );
};


// class Search extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className="searchContainer">
//       <input className="search" placeholder='Search by District'
//         type='text'
//         onChange={(event) => { this.searchCards(event); }} />
//       </div>
//     );
//   }
//
//   searchCards(event) {
//     let matches = this.props.info.findAllMatches(event.target.value);
//     matches.forEach(dataObj => {
//       dataObj.class = 'match';
//     });
//
//     this.props.setAppState({ matches });
//   }
//
// }

// set state on searchinput is one letter behind
// search functionality is slow as fuck

export default Search;
