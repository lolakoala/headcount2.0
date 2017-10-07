import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import checkMark from '../../../assets/checkmark-xl.png';
import xMark from '../../../assets/x-mark-xl.png';

const Card = ({ location, yearAndData, className, select }) => {
  let yearAndDataKeys = Object.keys(yearAndData);
  let listItems = yearAndDataKeys.map(key => {
    let img = <img src={checkMark}
                   alt='check mark, above half'/>;
    let liClass = 'aboveHalf';
    if (yearAndData[key] < 0.5) {
      img = <img src={xMark}
                 alt='x mark, below half'/>;
      liClass = 'belowHalf';
    }
    return (<li key={Math.random()}
                className={`hover ${liClass}`}>
              {img}

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
