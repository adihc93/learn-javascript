//Values and Variables
let country = 'India';
let continent = 'Asia';
let population = 1350;

console.log(country);
console.log(continent);
console.log(population);

//Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

//let, const and var
language = 'Hindi'; 

//Basic operator

let halfPopulation = population/2;
console.log(halfPopulation);
console.log(halfPopulation+1);

let finlandPopulation = 60;
console.log(population > finlandPopulation);

let averagePoplulation = 33;
console.log(population < averagePoplulation);

let description = country+' is in '+continent+', and its '+population+' million people speaks '+language;
console.log(description);

//Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;
console.log(description);

//Taking decisions
if (population > averagePoplulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePoplulation - population} million below average`);
}

//Equality operators
const numNeighbours = Number(prompt('How many neighbour countries does your countries have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No border');
}  

//Logical operators
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`${country} is the country you are looking for`);
}
else {
    console.log(`${country} is not the country you are looking for`);
}