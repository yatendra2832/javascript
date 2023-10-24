// Generate a Random Color
const randomColor = function () {
    const hex = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;

const startChangingColor = function () {
if(!intervalId){
    intervalId =setInterval(changeBGColor,1000)
}

    function changeBGColor() {
        document.body.style.backgroundColor = randomColor();
       document.getElementById('heading').style.color=randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId=null
}
// console.log(randomColor());
document.querySelector('#start').addEventListener('click', () => {
    startChangingColor()
})

document.querySelector('#stop').addEventListener('click', () => {
    stopChangingColor()
})