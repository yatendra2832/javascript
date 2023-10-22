// console.log(parseInt(Math.random()*100+1));
let randomNum=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessLot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGues=[]
let numGuess=1
let playGame=true

if(playGame){
  submit.addEventListener('click',(event)=>{
    event.preventDefault()
    const guess =parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess) {
    //Validation code goes here
    if( isNaN(guess)|| guess<1 || guess>100){
        alert('Please Enter a valid Number between 1 and 100.')  
    }else{
        prevGues.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //check guess code here
    if(guess===randomNum){
        displayMessage(`You Guessed it right`)
        endGame()
    }else if(guess<randomNum){
        displayMessage(`Number is too low`)
    }else if(guess>randomNum){
        displayMessage(`Number is too high`)
    }

}

// function displayGuess() {
//     //
//     userInput.value=''
//     prevGues.push(guess)
//     guessLot.innerHTML+=`${guess}`
//     numGuess++
//     remaining.innerHTML=`${11-numGuess}`
// }

function displayGuess(guess) {
    userInput.value = '';
    // prevGues.push(guess); // Add the guess to the array of previous guesses
    guessLot.innerHTML = prevGues.join(','); // Display all previous guesses separated by a comma
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    //
    lowOrHigh.innerHTML=`<h2>${message}</h2>`

}

function newGame(){
    //
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click', (event)=>{
        randomNum=parseInt(Math.random()*100+1)
        prevGues=[]
        numGuess=1
        guessLot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true

    })
    
}

function endGame(){
    //
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}












