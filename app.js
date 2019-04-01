(function(){
    'use strict';
 
const coins = [{ pennies: 200, print: '£2' }, { pennies: 100, print: '£1' }, { pennies: 50, print: '50p' }, { pennies: 20, print: '20p' }, { pennies: 10, print: '10p' }, { pennies: 5, print: '5p' }, { pennies: 2, print: '2p' }, { pennies: 1, print: '1p' }];


function getCoins(penniesToGo) {
    return coins.reduce(function (coinCountStr, ref) {
    const pennies =  ref.pennies;
    const print =  ref.print;
    const numCoins = Math.floor(penniesToGo / pennies);
    
    if (numCoins < 1) return coinCountStr;
        penniesToGo -= numCoins * pennies;
        const thisCoinStr = numCoins + ' x ' + print;
    
        return coinCountStr ? coinCountStr + ', ' + thisCoinStr : thisCoinStr;
          }, 0);
        };


const inputField = document.querySelector('.input-field');    
const coinsDash = document.querySelector('.coins-dash');

document.querySelector('.input-form').addEventListener('submit', function(e) {    

const newInput = inputField.value.replace(/p/ , '');
const poundsTot = /£/;
const decP = /\./;
const rawNumber = parseInt(newInput.match(/\d+/),10);
const poundsInPence = rawNumber * 100; 

//checks if input contains decimal point
decP.test(newInput) === true ? console.log('yes') : console.log('no');

if(poundsTot.test(newInput) === true) {

    coinsDash.innerHTML = `<h1>${getCoins(poundsInPence)}</h1>`;

} else if(isNaN(newInput)) {

    coinsDash.innerHTML = `<h1>Enter amount in Sterling</h1>`;

} else {
    coinsDash.innerHTML = `<h1>${getCoins(newInput)}</h1>`;
}

/*
- We possibly need a switch statement to handle all req scenarios
- otherwise we could use the ? : to check for decimals, which I can't get to work in current structure.
*/

e.preventDefault();
});
    
})();

