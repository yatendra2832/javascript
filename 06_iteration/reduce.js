// Reduce:The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const myNums=[1,2,3,4]
const myTotal=myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval
},0)
console.log(myTotal);
//  reduce method can be used in the shopping cart feature  where as we add the product simultaneously we also want wo show sum of the price and the grand total of the products

const shoppingCart=[
    {itemName:"JS course",price: 299},
    {itemName:"Data Science course",price: 1299},
    {itemName:"Mobile dev course",price: 299},
    {itemName:"DSA course",price: 2999}

]

const priceToPay=shoppingCart.reduce((acc, item)=>{
   console.log(`acc: ${acc} and itemPrice:${item.price}`);
   return acc+item.price
},0)
console.log(priceToPay);

