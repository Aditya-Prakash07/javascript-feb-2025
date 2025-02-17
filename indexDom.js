let input_box = document.querySelector('#amount');
let btn = document.querySelector('button');
let output = document.querySelector('.message');


//events : anyway the user wants to interact with the websites
// eg. click, hover, keypress, keydown, keyup, change, input, blur, focus, submit, scroll, resize, load, unload, mouseenter, mouseleave, mouseover, mouseout, dblclick, contextmenu, etc.

btn.addEventListener('click', ()=>{
    let amount = input_box.value;
    if(amount > 0){
        output.innerHTML = `You have entered ₹${amount}`;
    }else{
        output.innerHTML = `Please enter a valid amount`;
    }
    input_box.value = '';
});

function calculateTip(){
    let amount = input_box.value;
    let tip = amount * 0.15;
    output.innerHTML = `You should tip ₹${tip}`;
    input_box.value = '';
}

