let settingsMenu=document.querySelector(".settings-menu");
let darkBtn=document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");

}

darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
    
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

localStorage.setItem("theme","light");
localStorage.getItem("theme");

// let seemore=document.getElementById("see-more-link");
// function seeMore() {
//     let content=document.getElementById("additional-content");
//     if(content.style.display=="none"){
//         content.style.display="block";
//         seemore.innerHTML="See Less";
//     }
//     else{
//         content.style.display="none";
//         seemore.innerHTML="See More";
//     }
// }
// More better way to implement the seemore fuctinality is to use toggle
let seemore = document.getElementById("see-more-link");
function seeMore() {
    let content = document.getElementById("additional-content");
    content.classList.toggle("show");
    seemore.innerHTML = content.classList.contains("show") ? "See Less" : "See More";
}

