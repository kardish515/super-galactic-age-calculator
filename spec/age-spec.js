import { Age } from './../src/age.js';

describe('Age', function(){
  it('should test to find the age in seconds', function(){
    let age = new Age(2017, 1, 1);
    expect(age.ageCheck()).toEqual(3.154e+7);
  });
});
