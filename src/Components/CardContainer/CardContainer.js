import React from 'react';
import Card from '../Card/Card.js';
import ComparisonCard from '../ComparisonCard/ComparisonCard.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      comparing: [],
      comparingObj: {}
    };
  }

  selectToCompare = (string) => {
    if (this.state.comparing.includes(string)) {
      let stringIndex = this.state.comparing.findIndex(elem => elem === string);
      this.state.comparing.splice(stringIndex, 1);
      this.setState({ comparing: this.state.comparing });
      return;
    }
    if (this.state.comparing.length === 2) {
      this.state.comparing.pop();
    }
    this.state.comparing.unshift(string);
    let compObj = this.props.info.compareDistrictAverages(this.state.comparing[0], this.state.comparing[1]);
    this.setState({ comparing: this.state.comparing, comparingObj: Object.assign({}, compObj) });
  }

  clearComparisons = () => {
    this.setState({ comparing: [], comparingObj: {} });
  }

  renderComparisons() {
    if (Object.keys(this.state.comparingObj).length) {
      let comparing = this.state.comparing;
      let firstToCompare = this.props.info.findByName(comparing[0]);
      let secondToCompare = this.props.info.findByName(comparing[1]);
      let comparingObj = this.state.comparingObj;
      return (
        <div className='compare-and-button'>
          <div className="compare-container">
          <Card location={firstToCompare.location}
                yearAndData={firstToCompare.kidsInSchool}
                className={'selected'}
                key={Math.random()}
                select={() => this.selectToCompare(firstToCompare.location)}/>
          <ComparisonCard firstDistrict={comparing[0]}
                          firstAvg={comparingObj[comparing[0]]}
                          secondDistrict={comparing[1]}
                          secondAvg={comparingObj[comparing[1]]}
                          comparedAvg={comparingObj.compared}/>
          <Card location={secondToCompare.location}
                yearAndData={secondToCompare.kidsInSchool}
                className={'selected'}
                key={Math.random()}
                select={() => this.selectToCompare(secondToCompare.location)}/>
         </div>
         <button onClick={() => this.clearComparisons()}>Clear Comparisons</button>
      </div>
      );
    }
  }



  render() {
    return (
      <div>
        {this.renderComparisons()}
        <div className= "container">{this.props.info.findAllMatches(this.props.string).map(dataObj =>
                              <Card location={dataObj.location}
                                    yearAndData={dataObj.kidsInSchool}
                                    className={
                                      this.state.comparing.includes(dataObj.location) ? 'selected' : dataObj.class
                                      }
                                    key={Math.random()}
                                    select={() => this.selectToCompare(dataObj.location)}/>
        )}</div>
      </div>
    );
  }
}

CardContainer.propTypes = {
  info: PropTypes.object.isRequired,
  string: PropTypes.string
};

export default CardContainer;
