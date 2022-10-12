const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);

// for another test with same variable names, use a let !

function checkWinner(avgDolphins, avgKoalas)
{
    if (avgDolphins >= 2 * avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} VS ${avgKoalas})`);
        // const result = `Dolphins win (${avgDolphins} VS ${avgKoalas})`;
        // console.log(result);
        // return result;
    }
    else if (avgKoalas >= 2 * avgDolphins)
    {
        console.log(`Koalas win (${avgKoalas} VS ${avgDolphins})`);

        // const result = `Koalas win (${avgKoalas} VS ${avgDolphins})`;
        // console.log(result);
        // return result;
    }
    else 
    {
        console.log(`No one wins...`);
        // const result = `No one wins...`
        // console.log(result);
        // return result;
    }

}

const match1 = checkWinner(dolphinsAverage1, koalasAverage1);
// console.log(match1);
const match2 = checkWinner(dolphinsAverage2, koalasAverage2);
// console.log(match2);


function calcTip(billValue)
{
    const tip = (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.2;
    return tip;
}

// const test = calcTip(100);
// console.log(test);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
console.log(bills, tips, totals);

const Mark =
{
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI()
    {
        const bmi = this.mass / (this.height * this.height)
        return bmi;
    }
}
const John =
{
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI()
    {
        const bmi = this.mass / (this.height * this.height)
        return bmi;
    }
}
const higherBMI = Mark.calcBMI() > John.calcBMI ? `${Mark.fullName}'s BMI (${Mark.calcBMI()} is higher than John's (${John.calcBMI()}))` : `${John.fullName}'s BMI (${John.calcBMI()} is higher than Mark's (${Mark.calcBMI()}))`;

console.log(higherBMI);


