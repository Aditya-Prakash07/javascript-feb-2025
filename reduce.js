// Example array
let arr = [1, 2, 3, 4, 5];

// The reduce() method reduces the array to a single value
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Example 1: Sum all the elements of an array
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Example 2: Find the maximum value in an array
let max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
console.log(max); // 5

// Example 3: Flatten an array of arrays
let nestedArr = [[1, 2], [3, 4], [5]];
let flatArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArr); // [1, 2, 3, 4, 5]

// Example 4: Count the occurrences of an element in an array
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let nameCount = names.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(nameCount); // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// Example 5: Remove duplicates from an array
let numbers = [1, 2, 3, 4, 4, 5, 5];
let uniqueNumbers = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Example 6: Using reduceRight to reduce an array from right to left
let rightSum = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log(rightSum); // 15

// Example 7: Using reduce with an initial value
let product = arr.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

// Example 8: Using reduce to implement map
let doubled = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 9: Using reduce to implement filter
let evenNumbers = arr.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(evenNumbers); // [2, 4]

// Example 10: Using reduce to create a lookup table
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
let lookup = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
console.log(lookup); // { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }

// Example 11: Using reduce to count occurrences of elements in an array
let occurrences = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(occurrences); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }

// Example 12: Using reduce to group objects by a property
let people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
let groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person);
  return acc;
}, {});
console.log(groupedByAge); // { '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], '30': [{ name: 'Bob', age: 30 }] }

// Example 13: Using reduce to create a string from an array
let sentence = ['Hello', 'world', '!'].reduce((acc, word) => acc + ' ' + word);
console.log(sentence); // "Hello world !"

// Example 14: Using reduce to find the longest word in an array
let words = ['apple', 'banana', 'cherry', 'date'];
let longestWord = words.reduce((acc, word) => word.length > acc.length ? word : acc, '');
console.log(longestWord); // "banana"

// Example 15: Using reduce to calculate the average of an array
let average = arr.reduce((acc, curr, index, array) => {
  acc += curr;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);
console.log(average); // 3

// Questions and Answers

// Q1: How can you use the reduce method to sum all the elements of an array?
// A1:
let sumAnswer = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumAnswer); // 15

// Q2: How can you use the reduce method to find the maximum value in an array?
// A2:
let maxAnswer = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
console.log(maxAnswer); // 5

// Q3: How can you use the reduce method to flatten an array of arrays?
// A3:
let flatArrAnswer = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArrAnswer); // [1, 2, 3, 4, 5]

// Q4: How can you use the reduce method to count the occurrences of an element in an array?
// A4:
let nameCountAnswer = names.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(nameCountAnswer); // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// Q5: How can you use the reduce method to remove duplicates from an array?
// A5:
let uniqueNumbersAnswer = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueNumbersAnswer); // [1, 2, 3, 4, 5]
