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
  it('should test to return the age of a human in Venus years', function(){
    let age = new Age(2016, 3, 20);
    expect(age.venusAge()).toEqual(1.24);
  });
  it('should test to return the age of a human in Mars years', function(){
    let age = new Age(2017, 3, 20);
    expect(age.marsAge()).toEqual(1.88);
  });
  it('should test to return the age of a human in Jupiter years', function(){
    let age = new Age(2017, 3, 20);
    expect(age.jupiterAge()).toEqual(11.86);
  });
  it('should test to return remaining years based on life expectancy', function(){
    let age = new Age(1990, 5, 16);
    expect(age.remainingYears("Earth")).toEqual(50.855688015218774);
  });
});
