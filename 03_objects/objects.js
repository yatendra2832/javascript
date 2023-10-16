// Singleton object.create

//object literals
const users={
    name:"Yatendra Singh",
    age:18,
    location:"Jaipur",
    email:"yatendrayadav2832@gmail.com",
    isLoggedIn:true, 
    greeting:function () {
        console.log("Hello Js Users");
    }
}

// Object.freeze(users);//after freezing we cannot be able to modify and update the values of the object
users.email="yatendrasingh465@gmail.com"// this is the one method to access the elements in the object
console.log(users["email"]);// this is the another method to access the elements in the object using square brackets

console.log(users.greeting);
users.greetingTwo=function (name) {
    console.log(`Hello Js Users,${name}`)
}
console.log(users.greetingTwo(users.name));
















