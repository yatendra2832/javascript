/* In javascript there we can classify our data into the two types as:
These classification are done on the basis of the how the data are stored and how the data is accessed
1.Primitive:there are 7 types these are generally call by value means copy of data is available  
    String , Number , Boolean , Null , Undefined , Symbol , BigInt
*/
let name="Yatendra singh" //String
let roll_no=18 //Number
let userLoggedIn=true //Boolean
let time=null;//Null
let userEmail;//undefined
const id=Symbol('123');//Symbol
const anotherId=Symbol('123');
console.log(id===anotherId);// that will return false as symbol are used for the uniqueness
let stock_amount=21423445555;//BigInt

/*
2.Non-Primitive:It is reference types 
    Array , Objects , Functions 

Javascript is dynamically typed language in which we dont have to define the datatype in the variable 
*/

const heroes=["Shaktiman","Doga"]

const student_details={
    name:"yatendra singh",
    age:21
}

let greet=function greet(params) {
    console.log("Good Morning");
}

console.log(typeof heroes);

















