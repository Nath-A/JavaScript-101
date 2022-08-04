// Coding Challenge #1


const heightMarkTest1 = 1.69;
const massMarkTest1 = 78;
const heightJohnTest1 = 1.95;
const massJohnTest1 = 92;

const heightMarkTest2 = 1.88;
const massMarkTest2 = 95;
const heightJohnTest2 = 1.76;
const massJohnTest2 = 85;

const bmiMarkTest1 = massMarkTest1 / (heightMarkTest1 * heightMarkTest1);
const bmiJohnTest1 = massJohnTest1 / (heightJohnTest1 * heightJohnTest1);
const bmiMarkTest2 = massMarkTest2 / (heightMarkTest2 * heightMarkTest2);
const bmiJohnTest2 = massJohnTest2 / (heightJohnTest2 * heightJohnTest2);

console.log(massMarkTest1 + " / " + heightMarkTest1 + "² =" + bmiMarkTest1);
console.log(massJohnTest1 + " / " + heightJohnTest1 + "² =" + bmiJohnTest1);
console.log(massMarkTest2 + " / " + heightMarkTest2 + "² =" + bmiMarkTest2);
console.log(massJohnTest2 + " / " + heightJohnTest2 + "² =" + bmiJohnTest2);

const markHigherBMITest1 = bmiMarkTest1 > bmiJohnTest1;
const markHigherBMITest2 = bmiMarkTest2 > bmiJohnTest2;

console.log(markHigherBMITest1);
console.log(markHigherBMITest2);