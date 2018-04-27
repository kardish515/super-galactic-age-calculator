import { Age } from './../src/age.js';
const date = new Date();

describe('Age', function(){
  it('should test to find the age in seconds', function(){
    let age = new Age(date.getFullYear()-1, date.getMonth(), date.getDate());
    expect(age.ageCheck()).toEqual(3.154e+7);
  });
  it('should test to return the age of a human in Mercury years', function(){
    let age = new Age(date.getFullYear()-1, date.getMonth(), date.getDate());
    expect(age.mercuryAge()).toEqual(.24);
  });
  it('should test to return the age of a human in Venus years', function(){
    let age = new Age(date.getFullYear()-2, date.getMonth(), date.getDate());
    expect(age.venusAge()).toEqual(1.24);
  });
  it('should test to return the age of a human in Mars years', function(){
    let age = new Age(date.getFullYear()-1, date.getMonth(), date.getDate());
    expect(age.marsAge()).toEqual(1.88);
  });
  it('should test to return the age of a human in Jupiter years', function(){
    let age = new Age(date.getFullYear()-1, date.getMonth(), date.getDate());
    expect(age.jupiterAge()).toEqual(11.86);
  });
  it('should test to return remaining years based on life expectancy', function(){
    let age = new Age(date.getFullYear()-27, date.getMonth(), date.getDate());
    expect(age.remainingYears("Earth")).toEqual("You have 51.7 years left to live");
  });
  it('should test to return years lived past life expectancy', function(){
    let age = new Age(date.getFullYear()-100, date.getMonth(), date.getDate());
    expect(age.remainingYears("Earth")).toEqual("You should have died 21.299999999999997 years ago");
  });
});
