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
// const worldPopulation = 7900;
// const percentageOfWorld3 = population => (population / worldPopulation) * 100;
// const belgiumPopulation = percentageOfWorld3(11.56);
// const francePopulation = percentageOfWorld3(67.39);
// const chinaPopulation = percentageOfWorld3(1441);

// console.log(belgiumPopulation, francePopulation, chinaPopulation);

//LECTURE: Functions Calling Other Functions
// const describePopulation = function (country, population)
// {
//     const percentageOfWorld = population => (population / worldPopulation) * 100;
//     const worldPopulation = 7900;
//     const percentage = percentageOfWorld(population);
//     return `${country} has ${population} million people which is about ${percentage}% of the world.`;
// }

// console.log(describePopulation('somewhere', 999));
// console.log(describePopulation('somewhere else', 57));
// console.log(describePopulation('another somewhere else', 790));

//LECTURE: Introduction to Arrays
// const populations = [11.56, 67.39, 26.55, 1441];
// console.log(populations.length == 4);
// function percentageOfWorld(population)
// {
//     const worldPopulation = 7900;
//     const percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];

// console.log(percentages);

//LECTURE: Basic Array Operations (Methods)
// const neighbours = ["France", "Germany", "Luxembourg"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (neighbours.includes("Germany"))
// {
//     console.log(`Probably a central European country :D'`);
// }
// else if (!neighbours.includes("Germany"))
// {
//     console.log(`Probably not a central European country :D'`);
// }

// const index = neighbours.indexOf("Luxembourg");
// console.log(index);

// neighbours.fill("Grand Duchy of Luxembourg", 2);
// console.log(neighbours);

// LECTURE: Introduction to Objects
// const myCountry =
// {
//     country: 'Belgium',
//     capital: 'Brussels',
//     language: 'french',
//     population: 11.56,
//     neighbours: ['France', 'Luxembourg', 'Netherlands', 'Germany']
// }

// LECTURE: Dot vs. Bracket Notation
// const myCountry =
// {
//     country: 'Belgium',
//     capital: 'Brussels',
//     language: 'french',
//     population: 11.56,
//     neighbours: ['France', 'Luxembourg', 'Netherlands', 'Germany']
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry['population'] -= 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//LECTURE: Iteration: The for Loop
// for (let i = 1; i <= 50; i++)
// {
//     console.log(`Voter number ${i} is currently voting.`);
// }

//LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [11.56, 67.39, 26.55, 1441];
// const percentageArray = [];
// function percentageOfWorld(population)
// {
//     const worldPopulation = 7900;
//     const percentage = (population / worldPopulation) * 100;
//     return percentage;
// }
// for (let i = 0; i < populations.length; i++)
// {
//     const perc = percentageOfWorld(populations[i]);
//     percentageArray.push(perc);

// }
// console.log(percentageArray);


// LECTURE: Looping Backwards and Loops in Loops
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++)
// {
//     for (let j = 0; j < listOfNeighbours[i].length; j++)
//     {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// LECTURE: The while Loop
const populations = [11.56, 67.39, 26.55, 1441];
const percentageArray = [];
let i = 0;
function percentageOfWorld(population)
{
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return percentage;
}
while (i < populations.length)
{
    const perc = percentageOfWorld(populations[i]);
    percentageArray.push(perc);
    i++;
}
console.log(percentageArray);