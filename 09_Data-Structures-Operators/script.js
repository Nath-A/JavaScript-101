'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex)
  {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', adress })
  {
    console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3)
  {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}`);
  }
};
// 1) Destructering
//REST, because on LEFT side of the = 
const arr = [1, 2, ...[3, 4]];

// SPREAD, bécause on RIGHT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// 2) Functions 
const add = function (...numbers)
{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
// const newRestaurantCopy = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(newRestaurantCopy.name);

// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)];

// restaurant.orderPasta(...ingredients);

//Iterables : arrays, strings, maps, sets. NOT objects

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Other stuff'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// restaurant.orderDelivery({
//   adress: 'Bd Lambermont 214',
//   starterIndex: 1,
// })

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   starterIndex: 3,
//   mainIndex: 1,
//   time: '21:00',
//   adress: 'Bd Lambermont 214',
// });

// const { name, openingHours, categories } = restaurant;

// const
//   {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
//   } = restaurant

// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);


// // Nested objects
// const {
//   fri: { open: o, close: c } } = openingHours;
// console.log(o, c);



// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values (to avoid undefined)
// const [p = 0, q = 0, r = 0] = [8, 9];
// console.log(p, q, r);