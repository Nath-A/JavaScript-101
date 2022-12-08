'use strict';

/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries())
// {
//   if (movement > 0)
//   {
//     console.log(`Movement ${i + 1} : You deposit ${movement}`);
//   }
//   else
//   {
//     console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('------FOR EACH-------');
// ! the order matters !
//First parameter always need to be the current element,
//the second parameter always the current index and
//the third one always the entire array that we are looping over
// break; and continue; are not working in a forEach loop at all.
// movements.forEach(function (mov, i, arr)
// {
//   if (mov > 0)
//   {
//     console.log(`Movement ${i + 1} : You deposit ${mov}`);
//   }
//   else
//   {
//     console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
//   }
// });
/////////////////////////////////////////////////
//! MAP
// Same as forEach but create a brand new array
//
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map)
// {
//   console.log(`${key} : ${value}`);
// });

//! SET
// //Set doesnt have key or index
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map)
// _ convention for throwaway variable, variable that is completely unnecessary
// {
//   console.log(`${value} : ${value}`);
// });



/////////////////////////////////////////////////
//! SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2, 4));// ['c','d']
// console.log(arr.slice(-1)); // ['e]
// console.log(arr.slice(1, -2));//['b','c']
// console.log(arr.slice()); // same as spread operator -> [...arr];

//! SPLICE : Extract part of the original array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

//! REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//! CONCAT
// const letters = arr.concat(arr2); // same ass [...arr,arr2]
// console.log(letters);

//!JOIN
// console.log(letters.join(' - '));

//!NEW AT METHOD
// const dummyArr = [23, 11, 64];
// console.log(arr.at(0)); //same as console.log(arr[0]);

//!GETTING THE LAST ELEMENT
// console.log(arr[arr.lengh - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1)); // simplier to get the last element !
// console.log('Nath'.at(-1));

//! MAP METHOD
// Same as forEach but create a brand new array
//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov)
// {
//     return mov * eurToUsd;
// })
console.log('-----ARROW FUNCTION-----');
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);


// console.log('-----FOR-----');
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// movements.forEach(function (mov, i, arr)
// {
//   
//   }
// });

const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(mov)}`);

// Same as -> 
// if (mov > 0)
// {
//     return `Movement ${i + 1} : You deposit ${mov}`;
// }
// else
// {
//     return `Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
// }

console.log(movementsDescriptions);

// ! FILTER
console.log(movements);
const deposits = movements.filter(function (mov)
{
    return mov > 0;
})
console.log(deposits);
// optimization of ==> 
const depositsFor = [];
for (const mov of movements) if (mov > 0)
{
    depositsFor.push(mov);
    console.log(depositsFor);
}

const withdrawals = movements.filter(mov => mov < 0); // Same as (mov => RETURN mov <0)
console.log(withdrawals);


//! REDUCE
// const balance = movements.reduce(function (acc, cur, i, arr)
// {
//     console.log(`Iteration ${i} : ${acc}`);
//     return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
//acc = accumulator keeps accumulating the value that we ultimately want to return -> snowball
//0 = start value
console.log(balance);

//! Maximum value with reduce
// const max = movements.reduce((acc, mov) =>
// {
//     if (acc > mov)
//     {
//         return acc;
//     }
//     else
//     {
//         return mov;
//     }
// }, movements[0]);

const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);

console.log(max);