export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((acc, obj) => {
  if (acc[obj.Location]) {
    acc[obj.Location].push({ 'TimeFrame': obj.TimeFrame, 'Data': obj.Data });
  } else {
    acc[obj.Location] = [];
  }
  return acc;
}, {})
  }

}
