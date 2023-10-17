// Function with Array and objects
// E- commerce application add to cart feature where we dont know that how much thing will be add and we have to continuously adding the price also 
// The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

// that function will return all the values from the passed as argument
function calculateCartPrice(...num1) {
    return num1
}

//that will first allocate the first two values to val1, val2 and return all the other values from the passed as argument
function calculateCartPrice(val1 ,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(200,400,500,800,1200,230));

const user={
    coursename:"Javascript for beginners",
    price:199
}

function handleObject(anyObject) {
 console.log(`Coursename is ${anyObject.coursename} and the price is Rs. ${anyObject.price}`);   
}

handleObject(user);

const myNewArray=[200,400,600,800];
function getNewArray(getArray) {
    return getArray[1]
}

console.log(getNewArray(myNewArray))