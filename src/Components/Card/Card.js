import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, yearAndData, className, select }) => {
  let yearAndDataKeys = Object.keys(yearAndData);
  let listItems = yearAndDataKeys.map(key => {
    let liClass = 'aboveHalf';
    if (yearAndData[key] < 0.5) {
      liClass = 'belowHalf';
    }
    return (<li key={Math.random()}
                className={`hover ${liClass}`}>
              {key}: {yearAndData[key]}
            </li>);
  });

  return (

    <div className={`hover card ${className}`}
         onClick={(location) => { select(location); }}>
      <h3 className="hover card-title">{location}</h3>

      <ul className="hover card-list">{listItems}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  yearAndData: PropTypes.object.isRequired,
  className: PropTypes.string,
  select: PropTypes.func.isRequired
};

export default Card;
