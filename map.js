// Examples of hof or we can say these are replacement of loops
// 1. map, forEach
// 2. filter
// 3. reduce
// 4. find
// 5. some, every
// 6. sort

let arr = [1, 2, 3, 4, 5];
let square = a => a * a;
let squareArr = arr.map(square); // map expects a function as an argument
console.log(squareArr); // this will print [ 1, 4, 9, 16, 25 ]



let arr2 = [1, 2, 3, 4, 5];
// arr2.map(calculate);
// function calculate(val, ind){
//     console.log(val, ind);
// }

let x =
arr2.map((val, ind)=>{
    console.log(val, ind);
});
console.log(x); // this will print [ undefined, undefined, undefined, undefined, undefined ] because map always return an array and we are not returning anything from the function

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
