// Examples of hof or we can say these are replacement of loops
// 1. map, forEach
// 2. filter
// 3. reduce
// 4. find
// 5. some, every
// 6. sort

// Example array
let arr = [1, 2, 3, 4, 5];

// Example 1: Basic usage of map
let square = a => a * a;
let squareArr = arr.map(square);
console.log(squareArr); // [1, 4, 9, 16, 25]

// Example 2: Using map with objects
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
let userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

// Example 3: Using map with index
let indexedArr = arr.map((value, index) => `${index}: ${value}`);
console.log(indexedArr); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']

// Example 4: Using map with thisArg
let multiplier = {
  factor: 2,
  multiply(value) {
    return value * this.factor;
  }
};
let multipliedArr = arr.map(function(value) {
  return this.multiply(value);
}, multiplier);
console.log(multipliedArr); // [2, 4, 6, 8, 10]

// Example 5: Chaining map with other methods
let evenSquares = arr
  .filter(value => value % 2 === 0)
  .map(square);
console.log(evenSquares); // [4, 16]

// Example 6: Using map with arrow functions
let doubled = arr.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 7: Using map with a function declaration
function increment(value) {
  return value + 1;
}
let incrementedArr = arr.map(increment);
console.log(incrementedArr); // [2, 3, 4, 5, 6]

// Example 8: Using map with an array of strings
let fruits = ['apple', 'banana', 'cherry'];
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ['APPLE', 'BANANA', 'CHERRY']

// Example 9: Using map with a sparse array
let sparseArr = [1, , 3, , 5];
let filledArr = sparseArr.map((item, index) => item || `empty-${index}`);
console.log(filledArr); // ['1', 'empty-1', '3', 'empty-3', '5']

// Example 10: Using map with a sum function
let sum = (...args) => {
  return args.reduce((a, b) => a + b);
};
console.log(sum(1, 2, 3, 4, 5)); // 15

//forEach and map are exactly same but forEach does not return anything in map you are expected to return something
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach((val, ind)=>{
    console.log(val, ind);
    if(val%2 == 0){
        console.log('Even');
    }
});

let arr4 = [10, 20, 30, 40, 50];
arr4.forEach((val, ind)=>console.log(val, ind))
