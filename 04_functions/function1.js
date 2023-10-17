// Function : function is a block of code that can be resused in the code
function greeting() {
    console.log("Good Morning")
} 
// greeting();

// this is the function to add the number it is simple fucntion for adding th number 
// in function definition when we passed some variable then it is known as parameter
// In function calling when we passes variable then it is known as argument
/*
function addNumber(num1,num2) {
    console.log("Sum of number is : ",num1+num2);
}
const result=addNumber(7,4);
console.log(result);
// num1 num2 => parameter
// 7,4 =>argument
*/
/*
function addTwoNumber(num1,num2) {
    let result=num1+num2
    return result //after return the function there will no code will be executed after the return statement 
}
const result=addTwoNumber(3,5)
console.log("Result: ",result);
*/

function loginUserMessage(username) {
    if (username===undefined){
        console.log("Please Enter a Username");
        return
    }
    
    return `${username} just LoggedIn`
}

const login=loginUserMessage("yatendra singh");
console.log(login);








