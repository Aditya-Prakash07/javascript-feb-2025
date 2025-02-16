let arr = [1, 2, 3, 4, 5];
let x = arr.filter((val, ind)=>{
    return val%2 == 0;
});
let y = arr.filter((val, ind)=>val%2 != 0)
console.log(x); // this will print [ 2, 4 ]
console.log(y)
let arr2 = [1, -1, 2, 3, 5, -7];
let u = arr2.filter((val, ind)=>val>0);
let z = arr2.map((val, ind)=>val>0);
console.log(u); // this will print [ 1, 2, 3, 5 ]
console.log(z); // this will print [ true, false, true, true, true, false ] because map always return an array and we are not returning anything from the function