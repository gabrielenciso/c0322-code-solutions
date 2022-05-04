const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let [, , num1, condition, num2] = process.argv;
num1 = parseInt(num1);
num2 = parseInt(num2);

if (condition === 'plus') {
  console.log('result:', add(num1, num2));
} else if (condition === 'minus') {
  console.log('result: ', subtract(num1, num2));
} else if (condition === 'times') {
  console.log('result: ', multiply(num1, num2));
} else if (condition === 'divide' || condition === 'over') {
  console.log('result: ', divide(num1, num2));
} else {
  console.log('invalid expression');
}
