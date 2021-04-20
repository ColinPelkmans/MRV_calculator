class MrvCalculator {
    constructor(gender, weight, height, strength, experience, age, diet, sleep, stress, recovery) {
      this.gender = gender;
      this.weight = weight;
      this.height = height;
      this.strength = strength;
      this.experience = experience;
      this.age = age;
      this.diet = diet;
      this.sleep = sleep;
      this.stress = stress;  
      this.recovery = recovery;  
    }

    // selectGender() {
    //     if (this.gender == 'M' /*|| "m" || 'Male' || 'male'*/){
            
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.gender == 'F' /*|| 'f' || 'Female' || 'female'*/){
    //         // return 5;
    //         console.log(`5`)
    //     }
    // }

    // selectWeight() {
    //     if (this.weight <= 75){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.weight >= 20 && this.weight <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.weight >= 30 && this.weight <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.weight >= 40 && this.weight <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.weight >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }

    // selectHeight() {
    //     if (this.height <= 75){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.height >= 20 && this.height <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.height >= 30 && this.height <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.height >= 40 && this.height <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.height >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }

    // selectStrength() {
    //     if (this.strength <= 75){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.height >= 20 && this.height <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.height >= 30 && this.height <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.height >= 40 && this.height <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.height >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }

    // selectExperience() {
    //     if (this.experience <= 19){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.experience >= 20 && this.experience <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.experience >= 30 && this.experience <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.experience >= 40 && this.experience <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.experience >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }

    // selectAge() {
    //     if (this.age <= 19){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.age >= 20 && this.age <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.age >= 30 && this.age <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.age >= 40 && this.age <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.age >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }

    // selectDiet() {
    //     if (this.diet <= 19){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.diet >= 20 && this.diet <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.diet >= 30 && this.diet <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.diet >= 40 && this.diet <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.diet >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }
  
    //   selectSleep() {
    //     if (this.sleep <= 19){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.sleep >= 20 && this.sleep <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.sleep >= 30 && this.sleep <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.sleep >= 40 && this.sleep <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.sleep >= 50){
    //         // return 5;
    //         console.log(`4`)
    //     }
    // }

    //   selectStress() {
    //       if (this.height <= 75){
    //           // return 0;
    //           console.log(`0`)
    //       }else if (this.height >= 20 && this.height <= 29){
    //           // return 5;
    //           console.log(`1`)
    //       }else if (this.height >= 30 && this.height <= 39){
    //           // return 5;
    //           console.log(`2`)
    //       }else if (this.height >= 40 && this.height <= 49){
    //           // return 5;
    //           console.log(`3`)
    //       }else if (this.height >= 50){
    //           // return 5;
    //           console.log(`4`)
    //       }
    // }

    // selectRecovery() {
    //     if (this.recovery <= 19){
    //         // return 0;
    //         console.log(`0`)
    //     }else if (this.recovery >= 20 && this.recovery <= 29){
    //         // return 5;
    //         console.log(`1`)
    //     }else if (this.recovery >= 30 && this.recovery <= 39){
    //         // return 5;
    //         console.log(`2`)
    //     }else if (this.recovery >= 40 && this.recovery <= 49){
    //         // return 5;
    //         console.log(`3`)
    //     }else if (this.recovery >= 50){
    //         // return 5;
    //          console.log(`4`)
    //     }
    // }
}

module.exports = MrvCalculator;


// const genderPrompt = () => {
//   return new Promise((resolve, reject) => {
//     readline.question(`What is your gender? (Male / Female) `, (gender) => {
//       readline.question(`How old are you? `, (age) => {
//         readline.question(`How much do you weigh? `, (weight) => {
//           readline.question(`How much stress do you have outside of training?`, (stress) => {
//             readline.question(`How much sleep do you get?`, (sleep) => {
//               readline.question(`How tall are you?`, (height) => {
//                 readline.question(`How experienced are you?`, (experience) => {
//                   readline.question(`How good is your diet?`, (diet) => {
//                     person.push(gender);
//                     person.push(age);
//                     person.push(weight);
//                     person.push(stress);
//                     person.push(sleep);
//                     person.push(height);
//                     person.push(experience);
//                     person.push(diet);
//                     resolve();
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// }