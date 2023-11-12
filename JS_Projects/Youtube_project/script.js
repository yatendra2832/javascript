let menuIcon= document.querySelector(".menu-icon");
let sidebar= document.querySelector(".sidebar");
let container= document.querySelector(".container")
menuIcon.onclick=function() {
    sidebar.classList.toggle("small-sidebar");// that will make the sidebar small
    container.classList.toggle("large-container")// that will increase the main container size when the sidebar is small
}