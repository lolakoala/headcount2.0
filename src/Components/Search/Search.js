import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

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

Search.propTypes = {
  info: React.PropTypes.shape()
};

export default Search;
