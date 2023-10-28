function createUser(username,score) {
    this.username=username
    this.score=score 
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printScore = function () {
   console.log(`Score is  ${this.score}`);
}

const user1=new createUser('Yatendra singh',86)
const user2= new createUser('Yatendra yadav',89)
user1.increment();// that will increase the score by +1
user1.printScore()// that will print the score of the user 1
user2.printScore() // that will print the score of the user 2
/*
Here is what happens behind the scenes when the new keyword is used:
 A new object is created: The new keyword indicates the creation of a new javascript object.

 A Prototype is linked: The newly created objects get linked to the prototypes property of the constructor function, This means that it has access to properties and methods defined on the constructors prototype. 

 The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicits return value is specified from the constructor Javascript assumes this the newly created object to be intended return value,

 the new object is returned: after the constructor function has been called if it doesn't return a non-primitive value (object, array , function) the newly created object is returned

*/


