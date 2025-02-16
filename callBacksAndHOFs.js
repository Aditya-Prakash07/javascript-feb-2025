// function hello1(){
//     console.log("hello...");
// }
// let hello2 = ()=>{
//     console.log("hello.... arrow");
// }
// hello1();
// hello2();
// // function consist of two parts value and variable
// // we can call a normal function before declaration and it works perfectly but arrow fuction will behave like a variable tdz(temporal dead zone)
// let sum = (...args)=>{
//     let sum = 0;
//     for(let value of args){
//         sum+= value;
//     }
//     return sum
// }
// let add = sum
// console.log(sum(5,6))
// console.log(add(5, 6, 9))


// //callback function
// function hello(a, b, c, d, e, f){
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// }
// let x1 = 10
// let x2 = 20.5
// let x3 = "hello"
// let x4 = true
// let x5 = [1, 2, 3, 4]
// let x6 = {name: "hello"}
// hello(x1, x2, x3, x4, x5, x6)

// function hi(n, fun1){
//     console.log(n)
//     console.log(fun1)
//     fun1();
// }
// let x = 70;
// let greet = ()=>{
//     console.log("good evening")
// }
// hi(x, greet);
// hi(x, greet()); // this is not a correct way to pass a function as a parameter


//Anonymous function or no name function 
// function(){
//     console.log("hello")
// }
// ()=>{
//     console.log("hello")
// }
// one way to call a anonymous function is to assign it to a variable and then call it
// let greet1 = ()=>{
//     console.log("hello")
// }
// 2nd way to call a anonymous function is to call it directly
// function hi(n, fun1){
//     console.log(n)
//     console.log(fun1)
//     fun1();
// }
// let x = 70;
// hi(x, ()=>{
//     console.log("good evening")
// });

// function hello(fun1){
//     fun1();
// }
// let sum = (a, b)=>{
//     return a+b;
// }
// hello(()=>{
//     console.log(sum(5, 6))
// })



//in javascript many of the inbuilt functions accepts parameters as a function and these functions are called as higher order functions . if you need to call that function with a funciton having parameter hello(()=>{sum(10,20)}) this is the only way to call that function
//there hello(fun1) will not work because the function fun1 is having parameter

function hello(fun1){
    console.log("fun1")
    fun1();
}
function sum(a, b){
    console.log(a+b)
}
hello(()=>{sum(10,20)})