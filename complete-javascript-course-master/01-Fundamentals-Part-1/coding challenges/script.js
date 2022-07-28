alert('Coding Challenges');

//Coding challenge #1
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
}