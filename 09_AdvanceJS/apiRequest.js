// API:API is just a programming paradigm 
// API helps two programs or applications to communicate with each other by providing them with the necessary tools and functions. It takes the request from the user and sends it to the service provider and then again sends the result generated from the service provider to the desired user. 
// When any response comes form the url that will come in the form of the string 

// https://randomuser.me/api/
console.log('Hello');
const reqURL = 'https://randomuser.me/api/';
const xhr = new XMLHttpRequest();
xhr.open('GET', reqURL);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // You should use `xhr.readyState`, not `CharacterData.readyState`
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data); // You can log the entire data object
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  }
};
xhr.send();
