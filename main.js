// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const { read } = require('fs');
// const { resolve } = require('path');
// const { rawListeners } = require('process');
// const MrvCalculator =  require('./src/mrvCalculator');

// var questions = {
//     gender: 'What is your gender? (M/F) ',
//     age: 'How old are you? ',
//     weight: 'How much do you weigh? (Kg) ',
//   }

// function personPrompt() {
//   for(let property in questions){
//     return new Promise((resolve, reject) => {
//       readline.question(`${questions[property]}`, (answer) => resolve(answer) );
//     });
//   }
// }

// function personPrompt() {
//   return new Promise((resolve, reject) => {
//       readline.question(questions, (answer) => resolve(answer) );
//   });
// }

// personPrompt()
// .then((result) => { console.log(result); return personPrompt(); })
// .then((result) => { console.log(result); return personPrompt(); })
// .then(result => { console.log(result); readline.close() });


var person = [];

function personPrompt(query) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return  new Promise(resolve => readline.question(query, ans => {
  readline.close();
  resolve(ans);
}))
}

 
// example useage
async function main() {

 var gender = await personPrompt("What is your gender? (M/F) ")
 person.push(gender);

 var age = await personPrompt("How old are you?")
 person.push(age);
 console.log(person)
}

main()