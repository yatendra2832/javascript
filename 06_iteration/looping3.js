// for-in loop , for-of loop, for-each loop
// For of loop
const myArray=[1,2,3,4,5,6,7,8,9,0]

// for (const val of myArray) {
//     console.log(`Value is ${val}`);
// }

const greeting = " Hello World ! "
// for (const greet of greeting) {
//     if(greet==" ") {
//         continue
//     }
//     console.log(greet)
// }

// Maps: that will not contain the duplicate value as it contain only the unique value

const map= new Map();
map.set('IN','India')
map.set('USA','United State of America')
console.log(map);

for (const [mapping,value] of map) {
    console.log(mapping,":-",value)
}


