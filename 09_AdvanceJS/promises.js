// The promise object represents the eventual completion ( or failure) of an asynchronous operation and its resulting value
/*Three states of the promise :
Pending : Initial state, neither fulfilled nor rejected
Fulfilled : meaning that the operation was completed successfully
Rejected : meaning that the operation failed
*/
/*
const promiseOne= new Promise((resolve,rejected)=>{
//Do and async task
//DB calls , cryptography, network
// setTimeout
setTimeout(() => {
    console.log('Async task is complete')
    resolve()
}, 2000);
}) 
//that will create the promise instance

promiseOne.then(()=>{
    console.log('Promise Consumed');
})
*/
// Promise 2
/*
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async Task 2');
        resolve()
        // reject()
    }, 1000);
}).then(()=>{
    console.log('Task 2 Promise Consumed');
}).catch((err)=>{
    console.log(err)
})
*/

// Promise 3
/*
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:'Yatendra singh',email:"yatendrayadav2832@gmail.com"})
    }, 2000);
})
promiseThree.then((user)=>{
console.log(user );
})
*/
// Promise 4
const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error
        if (!error) {
            resolve({ username: "yatendra", passKey: '283204Ys' })
        }
        else {
            reject('Error: Something Went wrong')
        }
    }, 2000);
})

/*
const username = promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
})
.catch((error) => {
        console.log(error)
    })
.finally(()=>{
    console.log("Finally the promise is either resovled or rejected")
})

// console.log(username);
*/

// Promise 5
/*
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let error=1
        let error = false
        if (!error) {
            resolve({ username: "Yatendra Singh", Password: "@Shri123" })
        }
        else {
            reject('Error: JS went Wrong')
        }
    }, 2000);
})
try {
    async function consumePromiseFive() {
        const response = await promiseFive
        console.log("Result: ", response);
    }
    consumePromiseFive()

} catch (error) {
    console.log(error)
}

*/
// getAllUser using try and catch
/*async function getAllUsers() {  
    try {
        const response=await fetch('https://randomuser.me/api/')
        const data= await response.json();
        console.log(data)
    } catch (error) {
        console.log("Error: ",error)
    }
}
getAllUsers()
*/

fetch('https://randomuser.me/api/')
.then((res)=>{
     return res.json()
})
.then((data)=>{
 console.log(data);
})
.catch((error)=> console.log(error))





































