const passwordBox =document.getElementById("Password");
const length= 8;
const upperCase="ABCDE"
const lowerCase= "abcde"
const number="01234"
const symbol ="@$&"

const allChars= upperCase+lowerCase+number+symbol;

function createPassword() {
    let password = "";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}











