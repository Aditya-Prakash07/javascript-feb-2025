// Example array
let arr = [1, 2, 3, 4, 5];

// Example 1: Basic usage of find
let result = arr.find((item) => item > 3);
console.log(result); // 4

// Example 2: Finding an object in an array
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
let user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: 'Bob' }

// Example 3: Handling undefined when no element satisfies the condition
let notFound = arr.find((item) => item > 10);
console.log(notFound); // undefined

// Example 4: Using findIndex to find the index of the first element that satisfies a condition
let index = arr.findIndex((item) => item > 3);
console.log(index); // 3

// Example 5: Using find with complex conditions
let complexArr = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
let person = complexArr.find((person) => person.age > 30);
console.log(person); // { name: 'Charlie', age: 35 }

// Example 6: Using find with arrow functions
let evenNumber = arr.find(item => item % 2 === 0);
console.log(evenNumber); // 2

// Example 7: Using find with a function declaration
function isOdd(number) {
  return number % 2 !== 0;
}
let oddNumber = arr.find(isOdd);
console.log(oddNumber); // 1

// Example 8: Using find with an array of strings
let fruits = ['apple', 'banana', 'cherry'];
let fruit = fruits.find(fruit => fruit.startsWith('b'));
console.log(fruit); // 'banana'

// Example 9: Using find with a sparse array
let sparseArr = [1, , 3, , 5];
let sparseResult = sparseArr.find((item) => item === undefined);
console.log(sparseResult); // undefined

// Example 10: Using find with a sum function
let sum = (...args) => {
  return args.reduce((a, b) => a + b);
};
console.log(sum(1, 2, 3, 4, 5)); // 15