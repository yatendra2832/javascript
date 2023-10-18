// When we are referencing to current context there we use the this keyword
// In JavaScript, the this keyword is a special context-sensitive variable that refers to an object, function, or context that is currently executing.
const user={
    username:"Yatendra Singh",
    price:999,
    website:"www.yadavjiediting.com",
    welcomeMessage:function () {
        console.log(`${this.username} , Welcome to Website ${this.website}`);
        console.log(this)
    }
}
// here this refers to the user object 
// user.welcomeMessage();
// user.username="Yatendra Yadav"
// user.welcomeMessage();//that will use the username as the yatendra yadav as we replace it with the name yatendra singh
// console.log(this)// that will return an empty object but in the browser this will refer to the window


function thisFunction(params) {
    console.log(this);
}
// thisFunction();

// Arrow Function
 const arrowFunction = () => {
    let username="Yatendra Singh"
    console.log(this.username)
 }
//  arrowFunction();

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// Implicit return
const addTwo = (num1,num2)=> num1+num2


console.log(addTwo(3,4));














