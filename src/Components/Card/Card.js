import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, yearAndData, className }) => {
  let yearAndDataKeys = Object.keys(yearAndData);
  let listItems = yearAndDataKeys.map(key => {
    let liClass = 'aboveHalf';
    if (yearAndData[key] < 0.5) {
      liClass = 'belowHalf';
    }
    return (<li key={Math.random()}
                className={liClass}>
              {key}: {yearAndData[key]}
            </li>);
  });

  return (
    <div className={`card ${className}`}>
      <h3>{location}</h3>
      <ul>{listItems}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  yearAndData: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Card;
