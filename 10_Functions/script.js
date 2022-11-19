'use strict';

const bookings = [];

const createBooking = function
    (
        flightNum,
        numPassengers = 1,
        price = 199 * numPassengers
    )
{

    //ES5
    //numpassengers = numPassengers ||1;
    //price = price || 199;


    const booking =
    {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000); //undefined use to set a default value there

///

const flight = 'LH234';
const jonas =
{
    name: 'Jonas Schmedtmann',
    passport: 23442122343
}

const checkIn = function (flightNum, passenger)
{
    flightNum = 'Lh99'; //Not a good practice ! 
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 23442122343)
    {
        alert('Check in')
    }
    else
    {
        alert('Wrong passport')
    }
}

// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person)
{
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str)
{
    return str.replace(/ /g, '').toLovercase();
}

const upperFirstWord = function (str)
{
    const [first, ...others] = str.split('');
    return [first.UpperCase(), ...others].join('');

}

const transformer = function (str, fn)
{
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord); //transform the string using this function.
transformer('JavaScript is the best!', oneWord);
//We called the transformer function (high order function) and into that function we are passing the callback function (upperFirstWord & oneWord). This is the transformer function that will call these callback functions.

// JS uses callbacks all the time