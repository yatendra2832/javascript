const parent=document.querySelector('.parent')
console.log(parent)// that will return the parent element

console.log(parent.children)// that will return the html collection of the child of the parent  which is collection which is getting in the form of html collection similar to the array

console.log(parent.children[1].innerHTML)// that will return tuesday

// By using simple for loop we can print the whole collection of the element 
for (let i = 0; i < parent.children.length; i++) {
   console.log (parent.children[i].innerHTML)   
}

parent.children[0].style.color='red'// that will change the color of the first element of the parent as the mentioned color

// console.log(parent.firstElementChild.innerHTML);// that will fire the first element child
// We can also move from the child to the parent 
/*const dayOne=document.querySelector('.day')
console.log("Day: ",dayOne.parentElement)

// We can also move to the siblings
console.log(dayOne.nextElementSibling)
*/

console.log("Nodes: ",parent.childNodes)// that will return the 15 items that are not only printing the list of the day but also text  
// Every element have thier own significant every thing are consider to be the node list item 















