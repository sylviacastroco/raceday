let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const age = 0;

if(early && age > 18){
  raceNumber += 1000;
}

if(early && age >= 18){
  console.log(`Race will begin at 9:30am, your race number is ${raceNumber}.`);
} else if(!early && age >= 18){
  console.log(`Race will begin at 11:00am, your race number is ${raceNumber}.`)
} else if (age < 18 && age > 0){
  console.log(`Youth registrants run at 12:30pm, your race number is ${raceNumber}.`)
} else {
  console.log(`Please see the registration desk.`)
}


