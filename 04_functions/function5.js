// When we are referencing to current context there we use the this keyword
// In JavaScript, the this keyword is a special context-sensitive variable that refers to an object, function, or context that is currently executing.
const user={
    username:"Yatendra Singh",
    price:999,
    website:"www.yadavjiediting.com",
    welcomeMessage:function () {
        console.log(`${this.username} , Welcome to Website ${this.website}`);
    }
}
// here this refers to the user object 







