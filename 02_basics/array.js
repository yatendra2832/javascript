// Array:Array is a collection of multiple items under a single variable
const myArr=[0,1,2,3,4,5,6,7,8,9];
const mySubject=["English","Hindi"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr[9]);
console.log(myArr2.length);
// Array Methods
myArr.pop();//that will pop the element in the array at the last
myArr.push(7);//that will psuh the element in the array at the last 
myArr.unshift(9);//Inserts new elements at the start of an array, and returns the new length of the array.
myArr.shift();//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr.includes(10));
console.log(myArr.indexOf(9));

const newArr=myArr.join()
console.log(myArr);
console.log(typeof newArr);

// Slice and Splice
// .slice(a,b) that will return the values from the a to b but it is not including the b





