 class DistrictRepository {
   constructor(dirtyData) {
     this.cleanData = this.cleanData(dirtyData);
   }

   cleanData(dirtyData) {
    // make an empty array to push objects into
     let locationObjectArray = [];
    // reduce data comming in to an array of location strings
     let locationArray = dirtyData.reduce((acc, elem) => {
       let findLocation = acc.find((location) => {
         return location === elem.Location;
       });
       if (!findLocation) {
         acc.push(elem.Location);
       }
       return acc;
     }, []);
    // iterate through array of location strings to push an object
    // skeleton into locationObjectArray for each location
     locationArray.forEach((district) => {
       locationObjectArray.push({
         'location': district.toUpperCase(), 'kidsInSchool': { }, class: 'district-obj' });
     });
    // finally, use locationObjectArray which now has object skeletons
    // as an accumulator

    // to reduce data coming in by finding the object in the
    // locationObjectArray with matching location

    // and adding a year key with value of data to corresponding object
    // for each object in data

     let finalArray = dirtyData.reduce((acc, dataObj) => {
       let objectWeNeed = acc.find((elem) => {
         return dataObj.Location.toUpperCase() === elem.location;
       });
       if (typeof dataObj.Data === 'number') {
         objectWeNeed.kidsInSchool[dataObj.TimeFrame] =
         this.roundNumbers(dataObj.Data, 3);
       } else {
         objectWeNeed.kidsInSchool[dataObj.TimeFrame] = 0;
       }
       return acc;
     }, locationObjectArray);
    // one last thing- gimme the array that
    //we formatted so nicely to be what we want
     return finalArray;
   }

   roundNumbers(number, precision) {
     var factor = Math.pow(10, precision);
     var tempNumber = number * factor;
     var roundedTempNumber = Math.round(tempNumber);
     return roundedTempNumber / factor;
   }

   findByName(string) {
    //calling find on this.cleanData and comparing the location
    //property of each object to the
    // string converted to upppercase and returning the one that matches.
     if (string) {
       const foundObject = this.cleanData.find((dataObj) => {
         return dataObj.location === string.toUpperCase();
       });
       return foundObject;
     }
   }

   findAllMatches(string) {
    // if we don't get an arg, we return this.cleanData.
    //if we do, we filter this.cleanData for any obj with location
    // that includes the string converted to upppercase
    // no matches? empty array returned
     if (string) {
       let matchesArray = this.cleanData.filter((dataObj) => {
         return dataObj.location.includes(string.toUpperCase());
       });
       return matchesArray;
     }  else {
       return this.cleanData;
     }
   }
 }

 module.exports = DistrictRepository;
