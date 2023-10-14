let singleQuotedString='this is the single quoted string'
let doubleQuotedString='this is the double quoted string'

// string concatenation 
let first_name="yatendra"
let last_name="Singh"

let full_name=first_name+" "+last_name//that is used for the string concatenation
// but present we will use the backticks for the strings
// console.log(full_name.charAt(2));
// console.log(` The name of the student is ${first_name} ${last_name}`);
// string is a type of obejct ehich will store in the form of the key value pair
console.log(full_name[0]);
console.log(full_name.__proto__);
console.log(full_name.length);
console.log(full_name.toUpperCase());
console.log(full_name.toLowerCase());
console.log(full_name.charAt(2))
console.log(full_name.indexOf('S'));//that will returnthe index of the given character where it is present and it will return -1 if the character is not present in the string

let newString=full_name.substring(0,8);//that will make the copy of the substring from starting index to the last index but the last index will not included
console.log(newString);

let anotherString=full_name.slice(0,8);
console.log(anotherString);

// when in the string there are so many charctes are present means the whitespace then there is a string method used in the 
const newStringOne="    yatendra   singh "
console.log(newStringOne);
console.log(newStringOne.trimStart());







