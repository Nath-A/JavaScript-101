// Coding Challenge #1

// const heightMarkTest1 = 1.69;
// const massMarkTest1 = 78;
// const heightJohnTest1 = 1.95;
// const massJohnTest1 = 92;

// const heightMarkTest2 = 1.88;
// const massMarkTest2 = 95;
// const heightJohnTest2 = 1.76;
// const massJohnTest2 = 85;

// const bmiMarkTest1 = massMarkTest1 / (heightMarkTest1 * heightMarkTest1);
// const bmiJohnTest1 = massJohnTest1 / (heightJohnTest1 * heightJohnTest1);
// const bmiMarkTest2 = massMarkTest2 / (heightMarkTest2 * heightMarkTest2);
// const bmiJohnTest2 = massJohnTest2 / (heightJohnTest2 * heightJohnTest2);

// console.log(massMarkTest1 + " / " + heightMarkTest1 + "² =" + bmiMarkTest1);
// console.log(massJohnTest1 + " / " + heightJohnTest1 + "² =" + bmiJohnTest1);
// console.log(massMarkTest2 + " / " + heightMarkTest2 + "² =" + bmiMarkTest2);
// console.log(massJohnTest2 + " / " + heightJohnTest2 + "² =" + bmiJohnTest2);

// const markHigherBMITest1 = bmiMarkTest1 > bmiJohnTest1;
// const markHigherBMITest2 = bmiMarkTest2 > bmiJohnTest2;



// Coding Challenge #2

//test 1


// if (bmiMarkTest1 > bmiJohnTest1)
// {
//     console.log(`TEST 1 : Mark's BMI (${bmiMarkTest1}) is higher than John's (${bmiJohnTest1})`);
// }
// else
// {
//     console.log(`TEST 1 : John's BMI (${bmiJohnTest1}) is higher than Mark's (${bmiMarkTest1})`);
// }
// if (bmiMarkTest2 > bmiJohnTest2)
// {
//     console.log(`TEST 2 : Mark's BMI (${bmiMarkTest2}) is higher than John's (${bmiJohnTest2})`);
// }
// else
// {
//     console.log(`TEST 2 : John's BMI (${bmiJohnTest2}) is higher than Mark's (${bmiMarkTest2})`);
// }



// Coding Challenge #3

// Test 1 data
// const DolphinsScore1 = 96;
// const DolphinsScore2 = 108;
// const DolphinsScore3 = 89;

// const KoalasScore1 = 88;
// const KoalasScore2 = 91;
// const KoalasScore3 = 110;

//Bonus 1 data
// const DolphinsScore1 = 97;
// const DolphinsScore2 = 112;
// const DolphinsScore3 = 101;

// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 123;

// const DolphinsScore1 = 97;
// const DolphinsScore2 = 112;
// const DolphinsScore3 = 101;

// const KoalasScore1 = 109;
// const KoalasScore2 = 95;
// const KoalasScore3 = 106;

// const DolphinsScoreAverage = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;

// const KoalasScoreAverage = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;

// const minScore = 100;

// if (DolphinsScoreAverage >= minScore || KoalasScoreAverage >= minScore)
// if (DolphinsScoreAverage >= minScore && KoalasScoreAverage >= minScore)
// {
//     if (DolphinsScoreAverage > KoalasScoreAverage)
//     {
//         console.log(`The winner of the competition are the Dolphins ! 🏆`);
//     } else if (DolphinsScoreAverage === KoalasScoreAverage)
//     {
//         console.log(`The winner of the competition are both teams ! 🏆`);
//     }
//     else
//     {
//         console.log(`The winner of the competition are the Koalas ! 🏆`);
//     }
// }
// else
// {
//     console.log(`No one wins the trophy 😢`);
// }


// Coding Challenge #4
// const bill = 275;
// const bill = 40;
const bill = 430;


const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${Number(bill + tip)}`);




