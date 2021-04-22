const athleteInfo = require("../main");

class MrvCalculator {
  constructor() {
    this.total = 0;
    this.setsWeight = [4,2,-2,-4];
    this.setsHeight = [2,1,-1,-2];
    this.maleWeight = [75,100,120, 125];
    this.femaleWeight = [50,65,75,86];
    this.maleHeight = [170,182,195, 196];
    this.femaleHeight = [160,167,175,176];
  }

  calculate(){

    let genderSelector = (athleteInfo.gender == 'M');

    let weight = genderSelector ? this.maleWeight : this.femaleWeight;
    let height = genderSelector ? this.maleHeight : this.femaleHeight;
      
    this.total += this.getTotal(weight, this.setsWeight, athleteInfo.weight);
    this.total += this.getTotal(height, this.setsHeight, athleteInfo.height);
    console.log(this.total)
    return this.total;
    }
    
    getTotal = (value, sets, athleteInfo) => {
      for (let index = 0; index < value.length; index++) {
        if(athleteInfo <= value[index]){
          return sets[index];
        }
      }
    }
  }

module.exports = MrvCalculator;