// Memory Management in the javascript
// Stack (Primitive)  , Heap(Non-Primitive)

let myYtName="yadavjiediting";
let anotherName=myYtName;
anotherName="code With yatendra"

console.log(myYtName);//that will return the original name of the myYtName
console.log(anotherName);//that will return the anothername but we will thinking that is taking the reference of the myYtName so it have the value of that but actually that will not happens as that

// that will prove that when we are passing another variable value as a primitive data type the copy of value is passed not the original value is giving

let userOne={
    email:"yatendrayadav2832@gmail.com",
    upi:"yatendra1107@ybl"
}
let userTwo={
    email:"yatendrasingh0765@gmail.com",
    upi:"yatendra1207@ybl"
}

userTwo.email="yatendra@email.com"//that will make changes in the actual value 

console.log(userOne.email);
console.log(userTwo.email);

