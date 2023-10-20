const myNum = [1,2,3,4,5,6,7,8,9]
// const newArr=myNum.map((num)=>{
//     return num+10
// })
// console.log(newArr);

// Chaining in js
const newNums=myNum
.map((num)=>num*10) //[10,20,30,40,50,60,70,80,90]
.map((num)=>num+1)  //[11,21,31,41,51,61,71,81,91]
.filter((num)=>num>50)//[51,61,71,81,91]
console.log(newNums);