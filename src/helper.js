class DistrictRepository {
  constructor(dirtyData) {
    this.cleanData = this.cleanData(dirtyData);
  }

  stageArray(dirtyData) {
    //  data coming in becomes an array of objects with
    // location and kidsInSchool as properties
    return dirtyData.reduce((acc, elem) => {
      let location = elem.Location.toUpperCase();
      if (!acc.find((objFrame) => { return objFrame.location === location; })) {
        acc.push({'location': location, 'kidsInSchool': { }});
      }
      return acc;
    }, []);
  }

  cleanData(dirtyData) {
  // each object in array collects
  // the info from one location- no duplicating locations.
  // kidsInSchool property is an object  that collects Timeframe as
  // properties and Data as values
    let locationObjectArray = this.stageArray(dirtyData);
    return dirtyData.reduce((acc, dataObj) => {
      let objectWeNeed = acc.find((elem) => {
        return dataObj.Location.toUpperCase() === elem.location;
      });
      if (typeof dataObj.Data === 'number') {
        objectWeNeed.kidsInSchool[dataObj.TimeFrame] =
        this.roundNumbers(dataObj.Data);
      } else {
        objectWeNeed.kidsInSchool[dataObj.TimeFrame] = 0;
      }
      return acc;
    }, locationObjectArray);
  }

  roundNumbers(number) {
    var factor = Math.pow(10, 3);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  findByName(string) {
  //give back the object in cleanData where location matches string
    if (string) {
      return this.cleanData.find((dataObj) => {
        return dataObj.location === string.toUpperCase();
      });
    }
  }

  findAllMatches(string) {
  // give back array of every obj where location matches string
  // no matches? empty array returned
    if (string) {
      return this.cleanData.filter((dataObj) => {
        return dataObj.location.includes(string.toUpperCase());
      });
    }
    return this.cleanData;
  }

  findAverage(string1) {
  //  find average of the data in the kidsInSchool obj of
  // corresponding location
    let firstDistrictData = this.findByName(string1).kidsInSchool;
    let firstDistrictDataKeys = Object.keys(firstDistrictData);
    let total = firstDistrictDataKeys.reduce((acc, key) => {
      acc += firstDistrictData[key];
      return acc;
    }, 0);
    let averaged = total / firstDistrictDataKeys.length;
    return this.roundNumbers(averaged);
  }

  compareDistrictAverages(string1, string2) {
  //  give back object with first location and average, second
  // location and average, and the smaller average divided by larger
    let upperString1 = string1.toUpperCase();
    let upperString2 = string2.toUpperCase();
    let firstDistrictAverage = this.findAverage(upperString1);
    let secondDistrictAverage = this.findAverage(upperString2);
    let largest = Math.max(firstDistrictAverage, secondDistrictAverage);
    let smallest = Math.min(firstDistrictAverage, secondDistrictAverage);
    let comparedAverage = this.roundNumbers(smallest / largest);
    let objToReturn = Object.assign({}, {
      [upperString1]: firstDistrictAverage,
      [upperString2]: secondDistrictAverage,
      compared: comparedAverage
    });
    return objToReturn;
  }

}

module.exports = DistrictRepository;
