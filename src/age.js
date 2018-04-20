class Age {
  constructor(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
  }
  ageCheck(){
    const date = new Date();
    let ageYears = (date.getFullYear() - this.year) * 3.154e+7;
    return ageYears;
  }
}

export {Age}
