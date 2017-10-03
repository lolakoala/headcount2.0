export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    // make an empty array to push objects into
    let locationObjectArray = [];
    // reduce data comming in to an array of location strings
    let locationArray = data.reduce((acc, obj) => {
                          if (!acc.find((location) => {return location === obj.Location})) {
                            acc.push(obj.Location);
                          }
                          return acc;
                        }, []);
    // iterate through array of location strings to push an object skeleton into locationObjectArray for each location
    locationArray.forEach((district) => {
      locationObjectArray.push({ 'location': district.toUpperCase(), 'data': { } });
    });
    // finally, use locationObjectArray which now has object skeletons as an accumulator
    // to reduce data coming in by finding the object in the locationObjectArray with matching location
    // and adding a year key with value of data to corresponding object for each object in data
    let finalArray = data.reduce((acc, obj) => {
      let objectWeNeed = acc.find((elem) => {return obj.Location.toUpperCase() === elem.location});
      if(typeof obj.Data === 'number') {
        objectWeNeed.data[obj.TimeFrame] = this.roundNumbers(obj.Data, 3);
      } else {
        objectWeNeed.data[obj.TimeFrame] = 0
    }
      return acc;
    }, locationObjectArray)
    // one last thing- gimme the array that we formatted so nicely to be what we want
    return finalArray;
  }

  roundNumbers(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

  findByName(string) {
    //calling find on this.data and comparing the location property of each object to the string converted to upppercase and returning the one that matches. 
    if(string) {
      const foundObject = this.data.find((obj) => {
        return obj.location === string.toUpperCase();
      })
      return foundObject;
    }
  }
}
