# Number of Coins App
Simple application that takes an input of pennies, and calculates the minimum number of coins needed to make the amount.

- Written in combination of JS es5 and es6 for easy comprehension and browser compatibility. See https://babeljs.io/repl to convert one way or the other.

## How it works
- coins is an array of objects arranged in descending order so that the loop finds the biggest values first. The properties of the objects are pennies and print.
- The main function gets the input value as an argument. 
- The numcoins variable gets the minimum number of coins required. It does this by dividing the input value by the first pennies value. The reduce function then takes the remainder, and loops through the coins array until it finds the next largest value it can match the input value with, finally returning a series of pennies amounts(coins) the make up the input value.

#### Please send me feedback on how this could be improved. Thanks :)
