let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");
scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollContainer.scrollLeft +=event.deltaY;
})

nextbtn.addEventListener("click",()=>{
    // console.log("clicked")
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=900;
})
backbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -= 900;
})