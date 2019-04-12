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
const poundsTot = /£|\d\.\d\d/;
const zeroPointPence = /(0)\.*/;
const decP = /\./;
const rawNumber = parseInt(newInput.match(/\d+/),10);
const poundsInPence = rawNumber * 100;
const downToPence = rawNumber / 100;
//one that divides by 100 if pence



zeroPointPence.test(newInput) === true ? 
coinsDash.innerHTML = `<h1>${getCoins(downToPence)}</h1>` : 
coinsDash.innerHTML = `<h1>Enter amount in Sterling</h1>`;

//checks if input contains decimal point
if(poundsTot.test(newInput) === true) {


//interprets input intention as £
    coinsDash.innerHTML = `<h1>${getCoins(poundsInPence)}</h1>`;

} else if(isNaN(newInput)) {

    //handles NaN errors
    coinsDash.innerHTML = `<h1>Enter amount in Sterling</h1>`;

} else {

    //interprets input intention as pence
    coinsDash.innerHTML = `<h1>${getCoins(newInput)}</h1>`;
}




//decP.test(newInput) === true ? console.log('yes') : console.log('no');
/*

now that we can add or/ || in regex - we could probs define pounds or pence in that


- We possibly need a switch statement to handle all req scenarios
- otherwise we could use the ? : to check for decimals, which I can't get to work in current structure.

alternatively you could make an array of regex objects, and a loop that says if there's a match, output that one


---12/04/2019
- you can't have conditional cases in switch statements. switches only test strings, numbers, specific values etc.
- At this point it seems like you need to define more scenarios as variables and say || or && in the if/else

*/

e.preventDefault();
});
    
})();

