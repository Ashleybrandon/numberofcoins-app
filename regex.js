let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 



// String to match
const str = 'Gray?';


// Log Results
/* const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
} 

reTest(re, str);
let poundCoins = ifPounds.test(inSterling); //this gave the value of true
*/

let inSterling = '5';
let inDollars = '5p';
let ifPounds = /£/; 
let five = 5; 

if(ifPounds.test(inSterling) === true) {
  let rawNumber = parseInt(inSterling.match(/\d+/),10);
  console.log(`${rawNumber}` * 100);
} else {
  console.log('Sorry, the app is broken. Please refresh the page.');
}
ifPounds.test(inSterling) === true ? console.log(6) : console.log(3);


//testing switch statements




//console.log(parseInt(coin));

 /* if (eh.test(coin)) {
  console.log(5 + 5);
} else {
  console.log(strip);
} 
 */

/* i need to say if it matches the £, get the number from the
input and multiply it by 10
*/

/*
old input/output function

document.querySelector('.input-form').addEventListener('submit', function(e) {

//could define input field with above function here
let newInput = inputField.value.replace('.', '');
// or
//let newInput = inputField.value.replace(/[^\d.-]/g, '');

 if(isNaN(newInput)) {
    coinsDash.innerHTML = `<h1>Enter a number only</h1>`;
} else {
    coinsDash.innerHTML = `<h1>${getCoins(newInput)}</h1>`;
} 

e.preventDefault();
});

*/

