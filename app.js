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
const poundsDec = /\d\.\d\d|\d\.\d|\+\.d\d/;
const rawNumber = parseFloat(newInput.match(/\d+/),10);
// rnPounds is potential inputs of amounts in pounds
const rnPounds = parseFloat(newInput.match(/\d\.\d\d|\d\.\d|\+\.d\d/),10);
const poundsInPence = rawNumber * 100;
const poundsWDec = rnPounds * 100;

//checks if input contains £ or #.## / #.#
if(poundsTot.test(newInput) === true || poundsDec.test(newInput) === true ) {



//interprets input intention as £
    coinsDash.innerHTML = `<h1>${getCoins(poundsWDec)}</h1>`;

} else if(isNaN(newInput)) {

    //handles NaN errors
    coinsDash.innerHTML = `<h1>Enter amount in Sterling</h1>`;

} else {

    //interprets input intention as pence
    coinsDash.innerHTML = `<h1>${getCoins(newInput)}</h1>`;
}



e.preventDefault();
});
    
})();

/*
It needs to be able to handle pounds amounts without decimals, which it returns NaN for currently. if it's returning NaN, that means it's returning in 'if', and we aren't handling all possible £ scenarios correctly in that statement.
*/