function athleteInfoPrompt(query) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return  new Promise(resolve => readline.question(query, ans => {
  readline.close();
  resolve(ans);
  }));
}

var athleteInfo = new Object();

async function main() {
  var gender = await athleteInfoPrompt("What is your gender? (M/F) ");
  athleteInfo.gender = gender;

  var weight = await athleteInfoPrompt("How much do you weigh? (Kg) ");
  athleteInfo.weight = weight;

  var height = await athleteInfoPrompt("How tall are you? (cm) ");
  athleteInfo.height = height;

  // var strength = await athleteInfoPrompt("Strength: Class IV-III / Class II-I / Master-Elite / Intl Elite ");
  // athleteInfo.strength = strength;

  // var experience = await athleteInfoPrompt("Experience: <4 years / 4-8 years / 8-12 years / 12+ years ");
  // athleteInfo.experience = experience;

  // var age = await athleteInfoPrompt("How old are you? ");
  // athleteInfo.age = age;

  // var diet = await athleteInfoPrompt("Diet: Poor / Average / Good ");
  // athleteInfo.diet = diet;

  // var sleep = await athleteInfoPrompt("How much sleep do you get each night? ");
  // athleteInfo.sleep = sleep;

  // var stress = await athleteInfoPrompt("Stress: High / Medium / Low ");
  // athleteInfo.stress = stress;

  // var recovery = await athleteInfoPrompt("Recovery: Poor / Below average / Average / Good / Exceptional ");
  // athleteInfo.recovery = recovery;

  // var squat = await athleteInfoPrompt("What is your max squat? (Kg) ");
  // athleteInfo.squat = squat;

  // var bench = await athleteInfoPrompt("What is your max bench? (Kg) ");
  // athleteInfo.bench = bench;

  // var deadlift = await athleteInfoPrompt("What is your max deadlift? (Kg) ");
  // athleteInfo.deadlift = deadlift;
  
  const calculator = require('./src/mrvCalculator')
  let calc = new calculator;
  calc.calculate()
//  console.log(athleteInfo);
}

main()

module.exports = athleteInfo;