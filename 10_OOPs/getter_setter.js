class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    //getter is used to get the value and setter will set the value 
    set email(value) {
        this._email = value
    }
    get email() {
        return this._email.toUpperCase()
    }
    set password(passkey) {
        this._password = passkey
    }
    get password() {
        return this._password.toUpperCase()
    }

}

const user1 = new user('yatendrayadav2832@gmail.com', '283204Ys')
console.log(user1.email)
console.log(user1.password)
/*
Getter:

A getter is a method that allows you to retrieve the value of a property.
It is defined using the get keyword followed by the property name.
It has no parameters and returns the value of the property.
javascript
Copy code
const obj = {
  _value: 0, // Conventionally, prefix the property with an underscore to indicate it's private.

  get value() {
    return this._value;
  }
};

console.log(obj.value); // Access the property using the getter.
Setter:

A setter is a method that allows you to set the value of a property.
It is defined using the set keyword followed by the property name.
It takes one parameter, which is the new value for the property.
javascript
Copy code
const obj = {
  _value: 0,

  set value(newValue) {
    if (newValue >= 0) {
      this._value = newValue;
    } else {
      console.log("Value must be non-negative.");
    }
  }
};

obj.value = 10; // Set the property value using the setter.
obj.value = -5; // This will print the error message since the setter enforces a non-negative value.
*/

/*In JavaScript, you can use getters and setters within a class to control access to class properties. Here's how you can define getters and setters in a class:

javascript
Copy code
class MyClass {
  constructor() {
    this._value = 0; // Conventionally, prefix the property with an underscore to indicate it's private.
  }

  // Getter method
  get value() {
    return this._value;
  }

  // Setter method
  set value(newValue) {
    if (newValue >= 0) {
      this._value = newValue;
    } else {
      console.log("Value must be non-negative.");
    }
  }
}

const myObject = new MyClass();

console.log(myObject.value); // Access the property using the getter.
myObject.value = 10; // Set the property value using the setter.
myObject.value = -5; // This will print the error message since the setter enforces a non-negative value.
In the example above:

The MyClass class has a private property _value which is accessed using a getter and modified using a setter.
The get value() method is a getter for the value property. It allows you to access the value of _value.
The set value(newValue) method is a setter for the value property. It enforces the rule that the value must be non-negative and sets _value accordingly.
By using getters and setters within a class, you can encapsulate the internal state of the class and provide controlled access to its properties. This is a common practice in object-oriented programming and helps maintain data integrity and control access to class members.
*/