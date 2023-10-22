const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body')
buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (event) => {
        // console.log(event)
        console.log(event.target);
        if (event.target.id === 'grey') {
           body.style.backgroundColor='grey'
           body.style.color='red'
        } 
         if (event.target.id === 'white') {
            body.style.backgroundColor='white ' 
           body.style.color='black'
        } 
         if (event.target.id === 'blue') {
            body.style.backgroundColor='blue'
            body.style.color='yellow'
        } 
         if (event.target.id === 'yellow') {
            body.style.backgroundColor='yellow'
            body.style.color='red'
        }
       

    })
})