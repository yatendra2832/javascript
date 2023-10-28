// let name = 'yatendra singh               '
// we have to make the method which will remove the whitespace from the value 
// console.log(name.length);

// if we give the power to the object then the power will give the array , object and functions
// if we give the power to the 
let myArr=[12,3,4,5,6,78,9,0]

let heroPower={
    0:'yatendra singh',
    1:'Sararswati Nagar Tundla'
}
let details={
    0:'yatendra singh',
    1:'Sararswati Nagar Tundla'
}

Object.prototype.heyUser= function(){
    console.log(`Hello from Yatendra singh `);
} // that can be used by any object that will create in the code 

heroPower.heyUser();
details.heyUser();

// inheritance

const Teacher={
    makeVideo:true
}

const TeacherSupport={
    isAvailable:false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:TeacherSupport
}

// Teacher.__proto__=User 