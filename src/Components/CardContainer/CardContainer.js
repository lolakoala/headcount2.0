import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ info }) =>
      <div className="container">
        {info.map(dataObj => <Card location={dataObj.location}
                                    yearAndData={dataObj.data}
                                    key={Math.random()}/>)}
      </div>;

export default CardContainer;
