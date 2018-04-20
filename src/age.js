class Age {
  constructor(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
  }
  ageCheck(){
    const date = new Date();
    let ageYears = (date.getFullYear() - this.year) * 3.154e+7;
    let ageMonths = (date.getMonth() - this.month) * 2.628e+6;
    let ageDays = (date.getDate() - this.day) * 86400;
    return ageYears + ageMonths + ageDays;
  }
  mercuryAge(){
    let age = this.ageCheck();
    return age / 3.154e+7 * .24;
  }
  venusAge(){
    let age = this.ageCheck();
    return age / 3.154e+7 * .62;
  }
  marsAge(){
    let age = this.ageCheck();
    return age / 3.154e+7 * 1.88;
  }
  jupiterAge(){
    let age = this.ageCheck();
    return age / 3.154e+7 * 11.86;
  }
  remainingYears(planet){
    console.log(planet);
    const lifeExpectancy = 78.7;
    if(planet === "Mercury"){
      let remainingYears = lifeExpectancy * .24 - this.mercuryAge();
      if(remainingYears >= 0){
        return "You have " + remainingYears + " years left to live";
      } else{
        return "You should have died " + Math.abs(remainingYears) + " years ago";
      }
    } else if(planet === "Venus"){
      let remainingYears = lifeExpectancy * .62 - this.venusAge();
      if(remainingYears >= 0){
        return "You have " + remainingYears + " years left to live";
      } else{
        return "You should have died " + Math.abs(remainingYears) + " years ago";
      }
    } else if(planet === "Mars"){
      let remainingYears = lifeExpectancy * 1.88 - this.marsAge();
      if(remainingYears >= 0){
        return "You have " + remainingYears + " years left to live";
      } else{
        return "You should have died " + Math.abs(remainingYears) + " years ago";
      }
    } else if(planet === "Jupiter"){
      let remainingYears = lifeExpectancy * 11.86 - this.jupiterAge();
      if(remainingYears >= 0){
        return "You have " + remainingYears + " years left to live";
      } else{
        return "You should have died " + Math.abs(remainingYears) + " years ago";
      }
    } else if(planet === "Earth"){
      let remainingYears = lifeExpectancy - (this.ageCheck() / 3.154e+7);
      if(remainingYears >= 0){
        return "You have " + remainingYears + " years left to live";
      } else{
        return "You should have died " + Math.abs(remainingYears) + " years ago";
      }
    }
  }
}

export {Age}
