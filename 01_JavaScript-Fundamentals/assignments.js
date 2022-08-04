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
let description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);
