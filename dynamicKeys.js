// Example 1: Basic usage of dynamic keys
let object = {
    a: 10,
    b: 20,
    c: 30
};
console.log(object);

let b = "apple";
let object1 = {
    a: 10,
    [b]: 20, // dynamic key
    c: 30
};
console.log(object1);

// Example 2: Merging objects using dynamic keys
let personalDetails = {
    name: "Aditya",
    city: "Delhi",
    age: 25
};
let medicalDetails = {
    height: 6,
    weight: 70,
    bloodGroup: "O-"
};
let object3 = {};
for (let key in personalDetails) {
    object3[key] = personalDetails[key];
}
for (let key in medicalDetails) {
    object3[key] = medicalDetails[key];
}
console.log(object3);

// Example 3: Using spread operator to copy objects
let obj1 = {
    name: "Mayank",
    age: 25,
    city: "Hajipur"
};
let obj2 = {
    ...obj1, // copying one object to another using spread operator
    height: 6,
    weight: 70,
    bloodGroup: "O+"
};
console.log(obj2);

// Example 4: Dynamic keys in function parameters
function createObject(key, value) {
    return {
        [key]: value
    };
}
let dynamicObject = createObject('dynamicKey', 'dynamicValue');
console.log(dynamicObject); // { dynamicKey: 'dynamicValue' }

// Example 5: Using dynamic keys in loops
let keys = ['name', 'age', 'city'];
let values = ['John', 30, 'New York'];
let dynamicObj = {};
for (let i = 0; i < keys.length; i++) {
    dynamicObj[keys[i]] = values[i];
}
console.log(dynamicObj); // { name: 'John', age: 30, city: 'New York' }

// Example 6: Nested dynamic keys
let nestedKey = 'nested';
let nestedObject = {
    [nestedKey]: {
        innerKey: 'innerValue'
    }
};
console.log(nestedObject); // { nested: { innerKey: 'innerValue' } }

// Example 7: Dynamic keys with computed property names
let prefix = 'user';
let id = 1;
let userObject = {
    [`${prefix}${id}`]: 'John Doe'
};
console.log(userObject); // { user1: 'John Doe' }

// Example 8: Using dynamic keys with arrays
let arrayKey = 'items';
let arrayObject = {
    [arrayKey]: [1, 2, 3, 4, 5]
};
console.log(arrayObject); // { items: [1, 2, 3, 4, 5] }

// Example 9: Dynamic keys with symbols
let sym = Symbol('uniqueKey');
let symbolObject = {
    [sym]: 'Symbol Value'
};
console.log(symbolObject); // { [Symbol(uniqueKey)]: 'Symbol Value' }

// Example 10: Dynamic keys with template literals
let templateKey = `key${Math.random()}`;
let templateObject = {
    [templateKey]: 'Random Value'
};
console.log(templateObject); // { key0.123456789: 'Random Value' }