const country = "Belgium";
const continent = "Europa";
let population = 11.56;
const isIsland = false;
const language = "french";

// country = "Un endroit ou il fait chaud tout le temps !";

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);

let halfBelgianPopulation = population / 2;
console.log(population++);

let populationFinland = 6;
let higherPopulationThanFinland = population > populationFinland;
console.log(higherPopulationThanFinland);
let averagePopulation = 33;
let higherPopulationThanAverage = population > averagePopulation;
console.log(higherPopulationThanAverage);
let description = country + " is in " + continent + ", and its " + population + "M people speak " + language;
console.log(description);

// const numNeighbours = parseInt(prompt("How many neighbour countries does your country have?"));
// // numNeighbours = Number(numNeighbours);
// if (numNeighbours === 1)
// {
//     console.log('Only 1 border!');
// }
// else if (numNeighbours > 1)
// {
//     console.log('More than 1 border');
// }
// else
// {
//     console.log('No borders');
// }

if (language == "english" && population < 50 && !isIsland)
{
    console.log(`You should live in ${country} :) `);
} else
{
    console.log(`${country} does not meet your criteria :( `);
}

switch (language)
{
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;

    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;

    default:
        console.log('Great language too :D');
        break;
}


console.log(`
    ${country}'s population is 
        ${(population > 33) ? 'above' : 'below'} average`); 
