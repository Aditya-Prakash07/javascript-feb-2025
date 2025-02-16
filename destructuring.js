// let object = {
//     name: "Aditya",
//     age: "25",
//     city: "Delhi"
// }
// let x = object.name
// let y = object.age
// let z = object.city
//let{name:x, age:y, city:z}=object // above one and this one are exactly the same
//console.log(x, y, z)

// while development 99 out of 100 devlopers will choose below name
// let name = object.name
// let age = object.age
// let city = object.city
//console.log(name, age, city)
// let{name:name, age:age, city:city}=object
// console.log(name, age, city)

//if key and value are same we can write it like below
let name = "Aditya"
let age = 25
let city = "Hajipur"
// let object = {
//     name, // name: name,
//     age, // are: age,
//     city // city: city
// }

let obj = {name, age, city}
console.log(obj)


let library = {
    name: "City Library",
    address: "Hajipur city",
    books : [{ 
        author: "George Orwell", 
        books: ["1984", "Animal Farm"] 
    },
    { 
        author: "J.R.R. Tolkien", 
        books: ["The Hobbit", "The Lord of the Rings"] 
    },
    { 
        author: "Jane Austen", 
        books: ["Pride and Prejudice", "Sense and Sensibility"] 
    },
    { 
        author: "Harper Lee", 
        books: ["To Kill a Mockingbird"] 
    },
    { 
        author: "Fyodor Dostoevsky", 
        books: ["Crime and Punishment", "The Brothers Karamazov"] 
    },
    { 
        author: "Leo Tolstoy", 
        books: ["War and Peace", "Anna Karenina"] 
    },
    { 
        author: "Paulo Coelho", 
        books: ["The Alchemist", "Brida"] 
    }]
}
let authors = library.books
// loop through author and their books
authors.forEach(author => {
    console.log(`${author.author} wrote: ${author.books.join(", ")}`);
});


// find book by specific author
const authorBooks = authors.find(a => a.author === "George Orwell");
console.log(authorBooks); 
// Output: { author: "George Orwell", books: ["1984", "Animal Farm"] }


//Get all books in a single array
const allBooks = authors.flatMap(a => a.books);
console.log(allBooks);


let people = [
    { name: "Aditya", age: 25 },
    { name: "Rohan", age: 30 },
    { name: "Priya", age: 17 },
    { name: "Neha", age: 28 },
    { name: "Amit", age: 15 }
];

// Filtering people who are eligible to vote
let eligibleVoters = people.filter(person => person.age > 18);

// Printing their names
eligibleVoters.forEach(person => console.log(person.name));

