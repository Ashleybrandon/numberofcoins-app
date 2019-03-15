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

const newInput = inputField.value;

if(isNaN(newInput)) {

    coinsDash.innerHTML = `<h1>Enter a number only</h1>`

} else {
    
    coinsDash.innerHTML = `<h1>${getCoins(newInput)}</h1>`;
}

e.preventDefault();
});
    
})();