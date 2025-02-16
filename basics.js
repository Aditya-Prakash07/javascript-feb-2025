
// Variables
let name = 'John';
const age = 30;
var isMarried = false;

// Data Types
let stringType = 'Hello';
let numberType = 123;
let booleanType = true;
let nullType = null;
let undefinedType;
let objectType = { key: 'value' };
let arrayType = [1, 2, 3];

// Operators
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;
let exponentiation = 2 ** 3;

// Comparison Operators
let isEqual = 10 == '10'; // true
let isStrictEqual = 10 === '10'; // false
let isNotEqual = 10 != '10'; // false
let isStrictNotEqual = 10 !== '10'; // true
let isGreaterThan = 10 > 5; // true
let isLessThan = 10 < 5; // false
let isGreaterThanOrEqual = 10 >= 5; // true
let isLessThanOrEqual = 10 <= 5; // false

// Logical Operators
let andOperator = true && false; // false
let orOperator = true || false; // true
let notOperator = !true; // false

// Functions
function greet(name) {
  return `Hello, ${name}!`;
}
let greeting = greet('John');
console.log(greeting); // Hello, John!

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Objects
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet: function() {
    return `Hello, ${this.firstName} ${this.lastName}!`;
  }
};
console.log(person.greet()); // Hello, John Doe!

// Arrays
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Apple
fruits.push('Date');
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date']

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

let j = 0;
while (j < 5) {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
}

let k = 0;
do {
  console.log(k); // 0, 1, 2, 3, 4
  k++;
} while (k < 5);

// Conditionals
let number = 10;
if (number > 5) {
  console.log('Number is greater than 5');
} else if (number < 5) {
  console.log('Number is less than 5');
} else {
  console.log('Number is 5');
}

// Switch Statement
let fruit = 'Apple';
switch (fruit) {
  case 'Apple':
    console.log('Apple is red');
    break;
  case 'Banana':
    console.log('Banana is yellow');
    break;
  default:
    console.log('Unknown fruit');
}

// Try-Catch
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log('An error occurred:', error.message);
}

// Promises
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Promise resolved successfully');
  } else {
    reject('Promise rejected');
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Async-Await
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

fetchData();
