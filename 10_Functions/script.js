'use strict';

// const bookings = [];

// const createBooking = function
//     (
//         flightNum,
//         numPassengers = 1,
//         price = 199 * numPassengers
//     )
// {

//     //ES5
//     //numpassengers = numPassengers ||1;
//     //price = price || 199;


//     const booking =
//     {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000); //undefined use to set a default value there

// ///

// const flight = 'LH234';
// const jonas =
// {
//     name: 'Jonas Schmedtmann',
//     passport: 23442122343
// }

// const checkIn = function (flightNum, passenger)
// {
//     flightNum = 'Lh99'; //Not a good practice !
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 23442122343)
//     {
//         alert('Check in')
//     }
//     else
//     {
//         alert('Wrong passport')
//     }
// }

// // checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person)
// {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str)
// {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str)
// {
//     const [first, ...others] = str.split('');
//     return [first.toUpperCase(), ...others].join('');

// }

// const transformer = function (str, fn)
// {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord); //transform the string using this function.
// transformer('JavaScript is the best!', oneWord);
// //We called the transformer function (high order function) and into that function we are passing the callback function (upperFirstWord & oneWord). This is the transformer function that will call these callback functions.

// // JS uses callbacks all the time

// const greet = function (greeting)
// {
//     return function (name)
//     {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// const greeterHellow = greet('Hellow');

// greeterHey('Jonas');
// greeterHellow('Steven');

// greet('Shnaphon')('Jonas');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');
// const lufthansa =
// {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name)
//     {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     },

// };

// lufthansa.book(239, 'Nath Aaah');
// lufthansa.book(578, 'Jean Jacques');
// console.log(lufthansa);

// const eurowings =
// {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

//! Does not work
// book(23, 'Sara Williams');

//!Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 569, 'Mary Cooper');

// const swiss =
// {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 836, 'Marie Cooper');
// console.log(swiss);

//!Apply method (old stuff, not used anymore)
// const flightData = [583, 'Georges Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
// const bookEW = book.bind(eurowings);
// const bookLF = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);

//! With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function ()
// {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };

// // lufthansa.buyPlane();
// const buyButton = document.querySelector('.buy');
// buyButton.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(10));

//Challenge

// const greet = function (greeting)
// {
//     return function (name)
//     {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const addTaxRate = function (rate)
// {
//     return function (value)
//     {
//         return value + value * rate;

//     }
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// function A()
// {
//     console.log('called A');
//     return false;
// }
// function B()
// {
//     console.log('called B');
//     return true;
// }

// console.log(A() && B());



//!IIFE
// (function ()
// {
//     console.log('This will never run again');
// })();
// (() => console.log('This will ALSO never run again'))();

const secureBooking = function ()
{
    let passengerCount = 0;
    //cannot be manipuled from the outside
    return function ()
    {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();


