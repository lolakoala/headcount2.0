import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ info, string }) =>
      <div className="container">
        {info.findAllMatches(string).map(dataObj =>
                              <Card location={dataObj.location}
                                    yearAndData={dataObj.kidsInSchool}
                                    className={dataObj.class}
                                    key={Math.random()}/>

        )}
      </div>;

CardContainer.propTypes = {
  info: React.PropTypes.object.isRequired,
  string: React.PropTypes.string
};

export default CardContainer;
