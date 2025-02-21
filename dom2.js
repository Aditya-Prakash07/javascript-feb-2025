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

//way of styling using javascript
let heading1 = document.querySelector('h1');
// heading1.style.color = 'red';
// heading1.style.fontSize = '48px';
// heading1.style.backgroundColor = 'yellow';
// heading1.style.border = '2px solid black';
// heading1.style.padding = '10px';
// heading1.style.margin = '10px';
// heading1.style.borderRadius = '10px';
// heading1.style.boxShadow = '5px 5px 5px gray';
// heading1.style.textAlign = 'center';

 heading1.style.cssText = 'color: red; font-size: 48px; background-color: yellow; border: 2px solid black; padding: 10px; margin: 10px; border-radius: 10px; box-shadow: 5px 5px 5px gray; text-align: center;';

//way of creating elements using javascript
let newDiv = document.createElement('div');
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

//way of removing elements using javascript
let oldDiv = document.querySelector('.old-div');
if (oldDiv) {
  document.body.removeChild(oldDiv);
}



