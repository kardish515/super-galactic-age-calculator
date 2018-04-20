import { Age } from './../src/age.js';

describe('Age', function(){
  it('should test to find the age in seconds', function(){
    let age = new Age(2017, 3, 20);
    expect(age.ageCheck()).toEqual(3.154e+7);
  });
  it('should test to return the age of a human in Mercury years', function(){
    let age = new Age(2017, 3, 20);
    expect(age.mercuryAge()).toEqual(.24);
  });
});
