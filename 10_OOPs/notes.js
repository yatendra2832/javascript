// Classes and Object
// Javascript and classes: 
// There are different programming paradigm that are for some of the user there are programming used in hte functional and some ofthe using are oops programming
// Does Javascript have classes?
// yes Javascript does have classes. This feature was introduced with the ES6 however it's important to note that js is primarily a prototype based language adn its classes are primarily syntactic sugar over existing prototype baseed inheritance

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet (){
        console.log(`Good Morning ${this.name}`);
    }
}
const user=new Person('yatendra singh',21)
user.greet()

/*
## OOP:it is programming paradigm that is based on objects and classes
Object: collection of properties and methods 
##parts of OOP
Object literal
Constructor function
Prototypes
Classes
Instances(new,this) 

## 4 pillars :
Abstraction : Data hiding
Encapsulation : Wrap up of many function and data
Inheritance : inherited parent->child that are containing the properties of the parent as well as the some additional own properties also contained
Polymorphism : Multiple face with same name with different works

*/
const student  = {
    username:'yatendra singh',
    loginCount: 8,
    signedIn: true,
    getUserDetails:function(){
        console.log(`hello ${this.username}`);
        // console.log(this);
       /* this will return or print that  {
            username: 'yatendra singh',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
          }
          */
    }
}

console.log(student.username);
console.log(student.getUserDetails())
