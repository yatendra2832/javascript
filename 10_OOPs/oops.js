function User(username,loginCount, isLoggedIn){
this.username=username;
this.loginCount=loginCount;
this.isLoggedIn=isLoggedIn;
return this
}

const userOne = new  User('yatendra singh',10,true)
const userTwo = new  User('Neeraj Kumar',12,false)
console.log(userOne);
console.log(userTwo);

// the new keyword will help to create the new instance of the function that are having differnt context and dont't interfere in the context of the each other 

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person1 = new Person("John", 30);
  const person2 = new Person("Alice", 25);
  
  console.log(person1.name); // Output: "John"
  console.log(person2.age);  // Output: 25