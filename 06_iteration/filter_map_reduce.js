// const coding=["yatendra ","neeraj", "Sapna", "sushant"]

// const values=coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values) // that will return undefined as the foreach loop will not return anything that is only be used for iterating over the array to the all element
// The forEach loop does not return anything; it's mainly used for its ability to execute a function for each element in the array.

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const result=myNums.filter((num)=>{
//    return num<5 
// })
// console.log(result);
// filter(): The filter function is used to create a new array that includes elements from the original array that satisfy a specified condition.
// filter inside is also will take the callback function
//filter will return something  in the example itwill return num which  is less than 5 we have to do explicit or by implicit return
// if we are in scope we have to return by using return keyword

// map(): The map function is used to create a new array by applying a provided function to each element of the original array.
const myArr=[1,2,3,4,5]
const squaredNumbers=myArr.map(num=>num*num*num)
console.log(squaredNumbers);
//  myArr.map((num)=>{
//     console.log(num*num)
// })

// reduce(): The reduce function is used to reduce an array to a single value by applying an accumulator function to each element of the array. This can be used to perform operations like summing up all elements or concatenating strings.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// sum will be 15

const books =[
    {title:"System design Interview",genre:"CSE",publish:2016},
    {title:"Operating System",genre:"IT",publish:2015},
    {title:"DBMS",genre:"CSE",publish:2019},
    {title:"TOC",genre:"IT",publish:2021},
    {title:"BEEE",genre:"CSE",publish:2023},
    {title:"CAHM",genre:"CSE",publish:2005},

]

// const userBooks= books.filter((bk)=>{
// return bk.genre==='IT'
// })

// Giving the multiple condition 
const userBooks=books.filter((bk)=>{
    return bk.publish>=2020 && bk.genre=="IT"
})
console.log(userBooks)













