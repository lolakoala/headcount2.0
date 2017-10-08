import React from 'react';
import PropTypes from 'prop-types';
import rightArrow from '../../../assets/right-arrow.png';
import leftArrow from '../../../assets/left-arrow.png';

const ComparisonCard = ({ firstDistrict,
                          firstAvg,
                          secondDistrict,
                          secondAvg,
                          comparedAvg }) => {
  return (
    <div className='comparison-card'>
      <h3 className='first-district'>
        {firstDistrict}: {firstAvg}
      </h3>
      <div className="logo-and-compared">
      <img className="left-arrow"
        src={leftArrow}
           alt='arrow pointing left' />
      <h2 className='compared-avg'>
        {comparedAvg}
      </h2>
      <img className="right-arrow"
           src={rightArrow}
           alt='arrow pointing right' />
         </div>
      <h3 className='second-district'>
        {secondDistrict}: {secondAvg}
      </h3>
    </div>
  );
};

ComparisonCard.propTypes = {
  firstDistrict: PropTypes.string.isRequired,
  firstAvg: PropTypes.number.isRequired,
  secondDistrict: PropTypes.string.isRequired,
  secondAvg: PropTypes.number.isRequired,
  comparedAvg: PropTypes.number.isRequired
};

export default ComparisonCard;
