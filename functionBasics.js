// function hello(){
//     console.log("hello1");
//     return "hello2";
//     console.log("hello3")
// }
// console.log(hello())

// function hello(){
//     console.log("heyyyyyyyyy")
//     return 100
// }
// let x = hello()
// console.log("the value of x is : ",x)


// default parameters

// function hello(a=10, name="annonymous"){ // if not passing any name the default name will be annonymous
//     // if(a==undefined){ // this also works fine
//     //     a = 10
//     // }
//     console.log(a,name)
// }
// hello()
// hello(100)
// hello(1000000000, "Aditya")


//rest operator: (...)
function sumOfNumbers(t, ...args){ // this rest operator will internally form an array and collects all the arguments
    console.log(args)
    let sum = 0;
    for(let value of args){
        sum +=value;
    }
    return sum;
}

let sum1 = sumOfNumbers(10,20)
let sum2 = sumOfNumbers(10,20,30,40)
let sum3 =sumOfNumbers(10,20,30,40,50,60)
console.log(sum1)
console.log(sum2)
console.log(sum3)
