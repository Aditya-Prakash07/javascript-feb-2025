//document.body.style.backgroundColor = "grey"
console.log("Hello Dear")
// let a = 100
// if(10>5){
//     a = 500
//     var x = 1000 // var is always global except in case of function
// }
// console.log(a)
// console.log(x)
// in same scope we can not redeclare a variable
 
// function hello(){
// let a = 3; // let and const are same in terms of scope
// var b = 4;
// c = 500; // window
// }
// hello()
// //console.log(b) //although b is var but it can't be accessed at here because it is inside a function
// console.log(c); // it can be accessed variables which are not decleared with var let or const are true global variables 
var a = 100;
for(let i = 0; i<1; i++){ 
    // whenever there is chaining of scope the local variable has 100% priority
    console.log(a);
    let a = 1000;
}