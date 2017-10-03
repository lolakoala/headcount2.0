import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({ info }) =>
      <div>
        {info.map(dataObj => <Card location={dataObj.location}
                                    yearAndData={dataObj.data}
                                    key={Math.random()}/>)}
      </div>;

export default CardContainer;
