const myObject={
    js:"javascript",
    cpp:'c++',
    rb:"ruby",
    swift:"Swift by Apple"
}
// For in loop  can be applied on the object
// for (const key in myObject) {
//    console.log(`${key} Shortcut is for ${myObject[key]} `);
// }
// Array key are number starts with 0 which is our index
const myArr=[12,2,33,44,443,23]
for (const key in myArr) {
  console.log(myArr[key]);
}

