/*//Coding challenge #1
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let markBMI = massMark/(heightMark**2);
let johnBMI = massJohn/(heightJohn**2);

let markHigherBMI = markBMI > johnBMI;

//Coding challenge #2
if (markHigherBMI) {
    console.log(`Marks's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}*/

//Coding Challenge #3
const teamDolphins1 = 96, teamDolphins2 = 108, teamDolphins3 = 89;
const teamKoalas1 = 88, teamKoalas2 = 91, teamKoalas3 = 110;
const teamDolphinsAvg = (teamDolphins1 + teamDolphins2 + teamDolphins3) / 3;
const teamKoalasAvg = (teamKoalas1 + teamKoalas2 + teamKoalas3) / 3;

if (teamDolphinsAvg > teamKoalasAvg && teamDolphinsAvg >= 100) {
    console.log('Dolphins wins');
}
else if (teamKoalasAvg > teamDolphinsAvg && teamKoalasAvg >= 100) {
    console.log('Koalas wins');
}
else if (teamDolphinsAvg === teamKoalasAvg && teamDolphinsAvg >= 100 && teamKoalasAvg >= 100) {
    console.log('Its draw');
}
else {
    console.log('No one wins');
}