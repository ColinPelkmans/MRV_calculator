const athleteInfo = require("../main");

class MrvCalculator {
  constructor() {
    this.total = 0;

    this.maleWeight = [75,100,120, 125];
    this.femaleWeight = [50,65,75,86];
    this.setsWeight = [4,2,-2,-4];

    this.maleHeight = [170,182,195, 196];
    this.femaleHeight = [160,167,175,176];
    this.setsHeight = [2,1,-1,-2];

    this.age = [19,29,39,49,50];
    this.setsAge = [2,1,0,-2,-4.5];

    this.experience = ['B','I','A','VA'];
    this.setsExperience = [0,2,0,-2];

    this.strength = ['L','M','H','VH'];
    this.setsStrength = [1,0,-1,-3];

    this.diet = ['P','A','G'];
    this.dietSets = [-3.5,0,1];

    this.sleep = [5,7,8];
    this.setsSleep = [-3.5,0,1];

    this.stress = ['P','A','L'];
    this.stressSets = [-3.5,0,1];

    this.recovery = ['P','BA','A','G','E'];
    this.recoverySets = [-2,-1,0,1,2];
  }

  calculate(){

    let genderSelector = (athleteInfo.gender == 'M');

    let weight = genderSelector ? this.maleWeight : this.femaleWeight;
    let height = genderSelector ? this.maleHeight : this.femaleHeight;
      
    this.total += this.getTotal(weight, this.setsWeight, athleteInfo.weight);
    this.total += this.getTotal(height, this.setsHeight, athleteInfo.height);
    this.total += this.getTotal(this.age, this.setsAge, athleteInfo.age);
    this.total += this.getTotal(this.sleep, this.setsSleep, athleteInfo.sleep);
    this.total += this.getTotal(this.strength, this.setsStrength, athleteInfo.strength);

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