
// Higher-Order Functions (HOF) in JavaScript

// 1. What is a Higher-Order Function?
// A higher-order function is a function that takes another function as an argument, returns a function, or both.

// 2. Basic Examples of Higher-Order Functions

// 2.1. Function that takes another function as an argument
function greet(name) {
  return `Hello, ${name}!`;
}

function greetUser(greetFunction, userName) {
  return greetFunction(userName);
}

console.log(greetUser(greet, 'John')); // Hello, John!

// 2.2. Function that returns another function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2);
console.log(double(5)); // 10

// 3. Array Methods as Higher-Order Functions

// 3.1. forEach
let arr = [1, 2, 3, 4, 5];
arr.forEach((value, index) => {
  console.log(`forEach: ${index} = ${value}`);
  // 0 = 1, 1 = 2, 2 = 3, 3 = 4, 4 = 5
});

// 3.2. map
let squaredArr = arr.map(value => value * value);
console.log(`map: ${squaredArr}`); // [1, 4, 9, 16, 25]

// 3.3. filter
let evenArr = arr.filter(value => value % 2 === 0);
console.log(`filter: ${evenArr}`); // [2, 4]

// 3.4. reduce
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`reduce: ${sum}`); // 15

// 3.5. find
let firstEven = arr.find(value => value % 2 === 0);
console.log(`find: ${firstEven}`); // 2

// 3.6. findIndex
let firstEvenIndex = arr.findIndex(value => value % 2 === 0);
console.log(`findIndex: ${firstEvenIndex}`); // 1

// 3.7. some
let hasEven = arr.some(value => value % 2 === 0);
console.log(`some: ${hasEven}`); // true

// 3.8. every
let allEven = arr.every(value => value % 2 === 0);
console.log(`every: ${allEven}`); // false

// 3.9. sort
let sortedArr = arr.sort((a, b) => b - a);
console.log(`sort: ${sortedArr}`); // [5, 4, 3, 2, 1]

// 4. Advanced Examples of Higher-Order Functions

// 4.1. Function Composition
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

let addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(2)); // 9

// 4.2. Currying
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function add(a, b) {
  return a + b;
}

let curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // 3

// 4.3. Partial Application
function partial(f, ...args) {
  return function(...newArgs) {
    return f(...args, ...newArgs);
  };
}

let addFive = partial(add, 5);
console.log(addFive(3)); // 8

// 4.4. Memoization
function memoize(f) {
  let cache = {};
  return function(...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      let result = f(...args);
      cache[key] = result;
      return result;
    }
  };
}

function slowAdd(a, b) {
  for (let i = 0; i < 1e9; i++) {} // Simulate a slow function
  return a + b;
}

let fastAdd = memoize(slowAdd);
console.log(fastAdd(3, 4)); // 7 (slow)
console.log(fastAdd(3, 4)); // 7 (fast)

// 4.5. Higher-Order Function for Event Handling
function addEventListener(element, event, handler) {
  element.addEventListener(event, handler);
}

let button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

addEventListener(button, 'click', () => {
  alert('Button clicked!');
});

// 4.6. Higher-Order Function for Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedLog(message, ms) {
  await delay(ms);
  console.log(message);
}

delayedLog('Hello after 1 second', 1000);

// 4.7. Higher-Order Function for Asynchronous Operations
function asyncOperation(callback) {
  setTimeout(() => {
    callback('Async operation completed');
  }, 1000);
}

function handleAsyncOperation(message) {
  console.log(message);
}

asyncOperation(handleAsyncOperation);
