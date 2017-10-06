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
      <h3 className="card-title">{location}</h3>
      <ul>{listItems}</ul>
    </div>
  );
};

Card.propTypes = {
  location: React.PropTypes.string.isRequired,
  yearAndData: React.PropTypes.object.isRequired,
  className: React.PropTypes.string
};

export default Card;
