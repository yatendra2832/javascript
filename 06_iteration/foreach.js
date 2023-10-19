const coding = ["js", "c++", "java", "python", "c#"]
// coding.forEach((val) => {
//     console.log(val)
// });

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// }) 
//that function shows that forEach function can contain multiple parameters inside it that will print the item[array element] , array index at which it is store, arr whole array
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"javascript.js"
    },
    {
        languageName:"python",
        languageFileName:"python.py"
    },
    {
        languageName:"c++",
        languageFileName:"c.cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);

})












