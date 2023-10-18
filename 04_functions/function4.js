// Nested Scope

function one() {
    const username="yatendra singh"
    function two() {
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()
// the inner function can access the variable of the outer function but the outer function cannot access the variable of the inner function 
// child function can access the variable of the parent function  but the parent function cannot access the variables of the child function 

if(true){
    const username="yatendra singh"
    if(username==="yatendra singh"){
        const website=" youtube "
        console.log(username+ website)
    }
    // console.log(website);
}

// console.log(username);
addOne(5);//this will work
function addOne(num) {
    return num+1
}
// console.log(addOne(5));

// addTwo(5)//this will throw an error as we are decalring our function by initialising a varaible and it is not called 
const addTwo=function (num) {
    return num+2
}
// console.log(addTwo(5));
