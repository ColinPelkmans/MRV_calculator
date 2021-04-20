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

var person = [];

async function main() {

 var gender = await personPrompt("What is your gender? (M/F) ")
 person.push(gender);

 var age = await personPrompt("How old are you? ")
 person.push(age);

 var diet = await personPrompt("How good is your diet? ")
 person.push(diet);

 var experience = await personPrompt("How much experience do you have? ")
 person.push(experience);

 var height = await personPrompt("How tall are you? ")
 person.push(height);

 var sleep = await personPrompt("How much sleep do you get each night? ")
 person.push(sleep);

 var stress = await personPrompt("How much stress do you have outside of training? ")
 person.push(stress);

 var weight = await personPrompt("How much do you weigh? (Kg) ")
 person.push(weight);

 var recovery = await personPrompt("How good is your ability to recover? ")
 person.push(recovery);

 console.log(person)
}

main()