import React from 'react';
import './Card.css'

const Card = ({ location, yearAndData }) => {
  let yearAndDataKeys = Object.keys(yearAndData);

  return (
    <div className=".card">
      <h3>{location}</h3>
      <ul>{yearAndDataKeys.map(key => <li key={Math.random()}>
                                        {key}: {yearAndData[key]}
                                      </li>)}</ul>
    </div>
  );
};


export default Card;
