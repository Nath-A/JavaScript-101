"use strict";
//LECTURE: Functions
// function describeCountry(country, population, capitalCity)
// {
//     return `${country} has ${population} milions people and its capital city is ${capitalCity}.`;
// }

// const belgium = describeCountry("Belgium", 11.56, "Brussels");
// const france = describeCountry("France", 67.39, "Paris");
// const cameroun = describeCountry("Cameroun", 26.55, "Yaoundé");

// console.log(belgium, france, cameroun);

//LECTURE: Function Declarations vs. Expressions
// function percentageOfWorld1(population)
// {
//     const worldPopulation = 7900;
//     const percentage = (population / worldPopulation) * 100;
//     return `${population} = ${percentage} % of world population`
// }

// const percentageOfWorld2 = function (population)
// {
//     const worldPopulation = 7900;
//     const percentage = (population / worldPopulation) * 100;
//     return `${population} = ${percentage} % of world population`
// }

// const belgiumPopulation = percentageOfWorld2(11.56);
// const francePopulation = percentageOfWorld2(67.39);
// const chinaPopulation = percentageOfWorld2(1441);

// console.log(belgiumPopulation, francePopulation, chinaPopulation);

// LECTURE: Arrow Functions
const worldPopulation = 7900;
const percentageOfWorld3 = population => (population / worldPopulation) * 100;
const belgiumPopulation = percentageOfWorld3(11.56);
const francePopulation = percentageOfWorld3(67.39);
const chinaPopulation = percentageOfWorld3(1441);

console.log(belgiumPopulation, francePopulation, chinaPopulation);
