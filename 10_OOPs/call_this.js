// In call stack when any function comes that will come with their own execution context in the call stack . 
// This keyword will tell the present execution context 
// a function inside the function 
function seatUserName(username) {
    // Complex calculation 
    this.username=username
    console.log('called');
} 

function createUser(username,email,password) {
    seatUserName.call(this,username) // but that is not able to set the username as it will not called as we are giving the  reference of the function but not called so we have to use call keyword in js 
//    by that way we can set call method
    // this.username = username
    this.email = email
    this.password = password
}

const user1 = new createUser('yatendra singh','yatendrayadav2832@gmail.com','1234')
console.log(user1)













