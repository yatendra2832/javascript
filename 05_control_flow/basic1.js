// if :if condition is true then the block of code of if will be executed and when the if condition is false then no execution of block will take place

if(true){
    // that will be executed
}
if(false){
    // that will not be executed
}

// > greater than  < less than 
// >= greater than or equal to  <= less than or equal to 
// = assignment operator  == equal to operator  
// === that will check the equality as well as their datatype also when the both things are true then the condition is evaluated as true
// !== 
/*
const temp=50
if(temp<50){
    console.log(`Temperature is ${temp} which is less than  50`);
}else if(temp>50){
    console.log(`Temperature is ${temp} which is greater than  50`);
}else{
    console.log(`Temperature is ${temp} which is equal to 50`);
}

*/

const balance=100
// if(balance<500) console.log("test") // that is known as implicit scope we have to write a single line  this is not a multiple line scope 

const userLoggedIn=true
const debitCard =true
const userLoggedInFromGoogle=false
const userLoggedInFromEmail=true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
} else {
    console.log("Not allow to buy course");
}
// && for that both the condition to be true 
// || for that any of the condition to be true 

if((userLoggedInFromEmail||userLoggedInFromGoogle)&& debitCard)  {
    console.log("Allowed to purchase the course");
} else {
    console.log("Not Allowed to purchase the course ");
}






