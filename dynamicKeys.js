let object = {
    a: 10,
    b: 20,
    c:30
}
console.log(object)
let b = "apple";
let object1 = {
    a: 10,
    [b]: 20, // dynamic key
    c:30
}
console.log(object1)

let personalDetails = {
    name: "Aditya",
    city: "Delhi",
    age: 25
}
let medicalDetails = {
    height: 6,
    weight: 70,
    bloodGroup: "O-"
}
let object3 = {}
for(let key in personalDetails){
    //console.log(key, personalDetails[key])
    object3[key] = personalDetails[key]

}
for(let key in medicalDetails){
    object3[key] = medicalDetails[key]
}
console.log(object3)


let obj1 = {
    name: "Mayank",
    age: 25,
    city: "Hajipur"
}
let obj2={
    ...obj1, // copying one object to another using spread operator
    height: 6,
    weight: 70,
    bloodGroup: "O+"
}
console.log(obj2)