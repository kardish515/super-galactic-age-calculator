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
}

export {Age}
