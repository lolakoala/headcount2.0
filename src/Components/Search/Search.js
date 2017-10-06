import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = ({ setAppState }) => {
  return (
    <div className="searchContainer">
    <input className="search" placeholder='Search by District'
      type='text'
      onChange={(event) => { setAppState({ string: event.target.value }); }}
      // value={event.target.value}
    />
    </div>
  );
};

Search.propTypes = {
  setAppState: PropTypes.func.isRequired
};

export default Search;
