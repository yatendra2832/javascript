/*
Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

1. false: The boolean value false itself is falsy.
2. 0: The number zero is falsy.
3. '' (empty string): An empty string is falsy.
4. null: The null value is falsy.
5. undefined: The undefined value is falsy.
6. NaN: Not-a-Number is falsy (e.g., the result of dividing by zero).

Truthy values:true, "0", "false", " ",[], {}, function(){},
1.true: The boolean value true is truthy.
2.Numbers other than 0: Any non-zero number is truthy.
3.Non-empty strings: Any string with at least one character is truthy.
4.Objects: Any JavaScript object is truthy.
5.Arrays: Even empty arrays are considered truthy.
6.Functions: Any defined function is truthy.

*/
const  userEmail=[]
if (userEmail){
    console.log("Got user Email")
}else{
    console.log("Don't have user Email")
}

if(userEmail.length===0){
    console.log("Empty Array")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Empty object");
}

// Nullish coalescing operator (??):null undefined
// The nullish coalescing operator (??) is a feature in many modern programming languages, including JavaScript, that provides a concise way to handle default values for variables or expressions. It's used to select the right-hand operand if the left-hand operand is null or undefined, otherwise, it selects the left-hand operand. This operator helps avoid errors and unexpected behavior when working with potentially missing or undefined values.
let val1;
// val1=5 ?? 10 //that will assign the 5 as the value in the variable val1
// val1=null ?? 10 //that will assign the 10 as the value in the variable val1
// val1 =undefined ?? 15 // that will assign the 15 as value in the variable  val1
val1 =null ?? 10 ??20 // that will assign the 10 as the value of the variable 
console.log(val1);


// Ternary Operator condition ? true: false

const iceTeaPrice=100
iceTeaPrice>50 ? console.log("Tea is expensive"):console.log("Tea is not expensive")














