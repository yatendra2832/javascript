// const tinderUser=new Object();
// console.log(tinderUser);

const tinderUser={}
tinderUser.id="yatendra2832"
tinderUser.name="Yatendra Singh"
tinderUser.isLoggedIn=true
tinderUser.academics={
    name:"Yatendra Singh",
    roll_no:5085668,
    board:"CBSE",
    marks:{
        english:78,
        hindi:78,
        science:89,
        mathematics:95,
        social_science:93
    }
}
// console.log(tinderUser)
// console.log(tinderUser.academics.board)

// Object Merging

const obj1={
    0:"a",
    1:"b"
}

const obj2={
    2:"c",
    3:"d"
}
// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
console.log(obj3);

// In real world scenarios there are many cases where the data comes from the database and that will storing in the form of array of objects
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"y@gmail.com"
    }
]

// console.log(users[0].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));









