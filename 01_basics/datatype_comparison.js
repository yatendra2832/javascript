/*
console.log("02">1);//true
console.log("2">1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

// The reason is that an equality check == and comparsion > <> = <= work differently
// Comparsion convert null to a number , treating it as 0 that's why (3) null>=0 is true and (1) null >0 is false

// these all three are false 
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);
*/
// === it will check the value strictly eans it will not check only the value but also the datatype 
console.log("2"===2);// that will return false as "2" string datatype and as 2 is a Number so these are not equal and make the return result as false







