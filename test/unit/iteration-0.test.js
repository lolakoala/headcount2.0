import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(kinderData);

  test('district has data in an object', () => {
    expect(typeof district.cleanData).toBe('object');
  });

  test('data coming in has no duplicates', () => {
    expect(Object.keys(district.cleanData).length).toBe(181);
  });

});
