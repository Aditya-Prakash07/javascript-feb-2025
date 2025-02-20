
// 1. Basic Loops

// 1.1. For Loop
// The for loop is used to repeat a block of code a known number of times.
for (let i = 0; i < 5; i++) {
  console.log(`For Loop: ${i}`); // 0, 1, 2, 3, 4
}

// 1.2. While Loop
// The while loop repeats a block of code as long as a specified condition is true.
let j = 0;
while (j < 5) {
  console.log(`While Loop: ${j}`); // 0, 1, 2, 3, 4
  j++;
}

// 1.3. Do-While Loop
// The do-while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
let k = 0;
do {
  console.log(`Do-While Loop: ${k}`); // 0, 1, 2, 3, 4
  k++;
} while (k < 5);

// 2. Advanced Loops

// 2.1. For-In Loop
// The for-in loop is used to iterate over the properties of an object.
let person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
  console.log(`For-In Loop: ${key} = ${person[key]}`);
  // name = John, age = 30, city = New York
}

// 2.2. For-Of Loop
// The for-of loop is used to iterate over the values of an iterable object (like an array, string, or Map).
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(`For-Of Loop: ${value}`); // 1, 2, 3, 4, 5
}

// 2.3. ForEach Loop
// The forEach loop is an array method that executes a provided function once for each array element.
arr.forEach((value, index) => {
  console.log(`ForEach Loop: ${index} = ${value}`);
  // 0 = 1, 1 = 2, 2 = 3, 3 = 4, 4 = 5
});

// 2.4. Map Loop
// The map loop is an array method that creates a new array populated with the results of calling a provided function on every element in the calling array.
let squaredArr = arr.map(value => value * value);
console.log(`Map Loop: ${squaredArr}`); // [1, 4, 9, 16, 25]

// 2.5. Filter Loop
// The filter loop is an array method that creates a new array with all elements that pass the test implemented by the provided function.
let evenArr = arr.filter(value => value % 2 === 0);
console.log(`Filter Loop: ${evenArr}`); // [2, 4]

// 2.6. Reduce Loop
// The reduce loop is an array method that executes a reducer function on each element of the array, resulting in a single output value.
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Reduce Loop: ${sum}`); // 15

// 2.7. Some Loop
// The some loop is an array method that tests whether at least one element in the array passes the test implemented by the provided function.
let hasEven = arr.some(value => value % 2 === 0);
console.log(`Some Loop: ${hasEven}`); // true

// 2.8. Every Loop
// The every loop is an array method that tests whether all elements in the array pass the test implemented by the provided function.
let allEven = arr.every(value => value % 2 === 0);
console.log(`Every Loop: ${allEven}`); // false

// 2.9. Nested Loops
// Nested loops are loops inside other loops. They are used to perform more complex iterations.
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`Nested Loop: i = ${i}, j = ${j}`);
    // i = 0, j = 0
    // i = 0, j = 1
    // i = 0, j = 2
    // i = 1, j = 0
    // i = 1, j = 1
    // i = 1, j = 2
    // i = 2, j = 0
    // i = 2, j = 1
    // i = 2, j = 2
  }
}

// 2.10. Loop Control: Break and Continue
// The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(`Break Loop: ${i}`); // 0, 1, 2
}

// The continue statement terminates the execution of the statements in the current iteration of the current or labeled loop and continues execution of the loop with the next iteration.
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(`Continue Loop: ${i}`); // 0, 1, 2, 4
}
