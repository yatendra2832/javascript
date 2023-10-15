/*
const score = 100
console.log(score);
const balance= new Number(1000)
console.log(balance);

console.log( balance.toString().length); //that will convert the number to the string 
console.log( balance.toFixed(2)); // that is used to define the precision value that will define the upto how many decimal values 

const otherNumber=2223.89534
console.log(otherNumber.toPrecision(2));// format with a 2 significant digit & it will be round off 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
*/
//-----------------------Maths-----------------------

console.log(Math)//that will print the math object
console.log(Math.abs(-4)); // this will give us the absolute value  means make the negative value to be positive but remember only negative value to positve value not positive to negative
let mathNum=4.6
console.log(Math.round(mathNum));//The .round() method is used to round a number to the nearest integer. If the decimal portion is 0.5 or greater, it rounds up; otherwise, it rounds down.
console.log(Math.floor(mathNum));//The .floor() method is used to round a number down to the nearest integer, always discarding the decimal part
console.log(Math.ceil(mathNum));//The .ceil() method is used to round a number up to the nearest integer, always rounding up even if the decimal portion is less than 0.5.
console.log(Math.min(1,4,12,54,-87));// that will return the minimumvalue among them 
console.log(Math.max(4,3,6,8));// that will return the maximum value among them 
console.log(Math.round((Math.random()*100) + 1 ))// that will return the integer value between the 1 to 100

const min =10 
const max =20

console.log(Math.floor(Math.random()*(max - min + 1))+min)
/*Math.random(): This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

max and min: These are the upper and lower bounds of the range for the random integer you want to generate.

(max - min + 1): This part calculates the range of possible values by subtracting the lower bound (min) from the upper bound (max) and adding 1. The +1 is included to ensure that the upper bound (max) is also considered in the range.

Math.floor(...): This function is used to round the random floating-point number to the nearest integer that is less than or equal to the result of Math.random() * (max - min + 1). This ensures that you get a whole number within the specified range.

+ min: Finally, min is added to the result to shift the generated random integer from the range [0, max - min + 1] to the range [min, max].

As a result, this code generates a random integer between min and max, inclusive of both min and max. It's a commonly used technique when you need to create random integers within a specific range for various applications, such as games, simulations, and more.
*/
