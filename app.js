(function(){
    'use strict';

//An array of objects matching sums with coins. Values are in descending order to aid reduce function.  
const coins = [{ pennies: 200, print: '£2' }, { pennies: 100, print: '£1' }, { pennies: 50, print: '50p' }, { pennies: 20, print: '20p' }, { pennies: 10, print: '10p' }, { pennies: 5, print: '5p' }, { pennies: 2, print: '2p' }, { pennies: 1, print: '1p' }];


/* Main function 
- Main function gets the input value as an argument. 
- numcoins gets the minimum number of coins required. It does this by dividing the input value by the first pennies value. The reduce function then takes the remainder, and loops through the coins array until it finds the next largest value it can match the input value with, finally returning a series of pennies amounts(coins) the make up the input value, if needed.
*/
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


//get input field and display area
const inputField = document.querySelector('.input-field');    
const coinsDash = document.querySelector('.coins-dash');

//listen for form submission, get input value, use main function to calculate coins, output values to DOM
document.querySelector('.input-form').addEventListener('submit', function(e) {

const newInput = inputField.value;

coinsDash.innerHTML = `<h1>${getCoins(newInput)}</h1>`;

e.preventDefault();
});
    
})();