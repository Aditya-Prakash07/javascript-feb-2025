let playerCollection = document.querySelectorAll('input');
let scoreSpan = document.querySelectorAll('span');
let rollTheDiceButton = document.querySelectorAll('button');
let endGameBtn = document.querySelector('#endBtn');
//rollTheDiceButton[0]
//rollTheDiceButton[1]
//rollTheDiceButton[2]
//rollTheDiceButton[3]
//rollTheDiceButton[4]
//rollTheDiceButton[5] => end button
rollTheDiceButton.forEach((btn, index)=>btn.addEventListener('click',diceRoll));
// for(let btn of rollTheDiceButton){
//     btn.addEventListener('click',diceRoll);
// } // this and forEach both are same

function diceRoll(e){
   // console.log(e.target.innerText);
   let targetElement = e.target.id; // through this we can came to know on which particular element event has happened
   let targetElementId = targetElement[3]-1;
    console.log(targetElementId);
    // perform the dice roll
    // 1. Generate a random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    // we can also generate random number as below
    // let arr = [1,2,3,4,5,6];
    // let randomIndex = Math.floor(Math.random() * arr.length);
    // let randomElement = arr[randomIndex];
    // console.log(randomElement);
    console.log(randomNumber);
    scoreSpan[targetElementId].innerText = randomNumber;

}



