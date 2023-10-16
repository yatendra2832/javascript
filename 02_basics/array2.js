const product_category=["Sunglasses","Footwear","Clothes"];
const product=["Reynolds","Bata","Zara"];

// product_category.push(product)//we will think that the array will merge into the product_category array but it will not merge whereas the array will store as a element  in the array 
// console.log(product_category);
// console.log(product_category[3][1]);

// const all_products=product_category.concat(product)//concat will merge two arrays and store them in the single array 
// console.log(all_products)

// spread operator ...
const all_products=[...product_category,...product]
console.log("the list of all products: ",all_products);

console.log(Array.isArray(product));//that will check the given passed argument is an array or not 

let product1="T-Shirt"
let product2="Jeans"
let product3="Kurti"

console.log(Array.of(product1,product2,product3,product))




