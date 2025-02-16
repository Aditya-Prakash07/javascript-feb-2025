// let sum = (a, b) =>{
//     let addition = a + b;
//     return addition;
// }
// // js function with return statement only
// let sum2 = (a, b) =>{
//     return a + b;
// }
// // if a function have return only no matter how long it the return statement is we can remove the curly braces
// let sum3 = (a, b) => a + b;// this function and sum2 is exactly works same way here also a+b is getting returned
// console.log(sum(2, 3)); // all of these works same way
// console.log(sum2(2, 3));// all of these works same way
// console.log(sum3(2, 3));// all of these works same way
// // if a function have only one argument then we can remove the parenthesis
// let square = a => a * a;
// console.log(square(4));
// // if a function have no argument then we need to use empty parenthesis
// let greet = () => 'Hello World';
// console.log(greet());


// secound use of annonymous function
// concept of IIFE (Immediately Invoked Function Expression)
// ()=>{
//     console.log('Hello World!!!');
// } we can run this function without name as below
console.log('IIFE --> Immediately Invoked Function Expression');
(()=>{
    console.log('Hello World!!!');
})(); // it is working fine all the code in this file is commented out other than this code
// this is the way to run a function without name
// this also works with parameters
((a, b)=>{
    console.log(a + b);
})(2, 3); // this will print 5

// this can be used when you want that this code should not be accessed form anywhere outside of this function
((name)=>{  
    //some sensitive information
    console.log(`${name} You are selected as a raw agent`);
})('John'); // this will print Hello John person with having authority to access this code can only modify this code

//HOF --> Higher Order Function it is any function that takes a function as an argument or returns a function
function greet(function1){
     
}
function greet2(){
    return ()=>{console.log('Hello World!!!')};
}
function greet3(function1){
    return ()=>{console.log('Hello World!!!')};
}
// all of these are HOF
// the function that you are passing as an argument is called callback function
// the function that you are returning is called closure function
function Hello(){
    console.log('System infra solution');
    return function(){
        console.log('SISAXS!!!');
    }
}
Hello()(); // this will print System infra solution and SISAXS!!!
let hello = Hello();
hello(); // this will print System infra solution and SISAXS!!!


function Hello2(){
    console.log('System infra solution');
    return ()=>{
        console.log('SISAXS!!!');
        return ()=>{
            console.log('iProtect');
        }
    }
}
Hello2()()(); // this will print System infra solution, SISAXS!!! and iProtect
let hello2 = Hello2();
hello2()(); // this will print System infra solution, SISAXS!!! and iProtect
let hello3 = hello2();
hello3(); // this will print System infra solution, SISAXS!!! and iProtect




function hi(){
    console.log('A');
    return function(){
        console.log('B');
        return function(){
            console.log('C');
            return function(){
                console.log('D');
            }
        }
    }
}

let x = hi();
let y = x();
let z = y();
z();
