export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    let locationObjectArray = [];
    let locationArray = data.reduce((acc, obj) => {
                          if (!acc.find((location) => {return location === obj.Location})) {
                            acc.push(obj.Location);
                          }
                          return acc;
                        }, []);

    locationArray.forEach((district) => {
      locationObjectArray.push({ 'location': district, 'data': { } });
    });

    let finalArray = data.reduce((acc, obj) => {
      let objectWeNeed = acc.find((elem) => {return obj.Location === elem.location});
      objectWeNeed.data[obj.TimeFrame] = obj.Data;
      return acc;
    }, locationObjectArray)

    return finalArray;
  }

  findByName(string) {

  }

}
