// IIFE: Immediately Invoked Function Expression
// it is used in two cases for calling immediately a function and second reason is to stop polluting our scope from the global scope
// function dbConnection() {
//     console.log('DB Connected');
// }
// dbConnection()

// calling it Immediately
(function dbConnection() {
    console.log('DB Connected');
})();
// For terminating the our iife function we have to end it with the semicolon
(function sqlConnection(name) {
    console.log(`SQL Connection Successfully  UserName : ${name}`)
})('Yatendra')