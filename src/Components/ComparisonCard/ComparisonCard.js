import React from 'react';
import PropTypes from 'prop-types';

const ComparisonCard = ({ firstDistrict, firstAvg, secondDistrict, secondAvg, comparedAvg }) => {
  return (
    <div className='comparison-card'>
      <h3 className='first-district'>
        {firstDistrict}: {firstAvg}
      </h3>
      <div className="logo-and-compared">
      <img src='http://www.iconsdb.com/icons/preview/purple/arrow-left-xl.png'
           alt='arrow pointing left' />
      <h2 className='compared-avg'>
        {comparedAvg}
      </h2>
      <img src='http://www.iconsdb.com/icons/preview/purple/arrow-right-xl.png'
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
