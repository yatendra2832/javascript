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

/*Here is explaination of the code that how it is working behind the scene
1.The code starts with console.log('Hello'), which simply logs the message "Hello" to the console, indicating the program has 
started.

2.It sets the reqURL variable to the URL 'https://randomuser.me/api/', which is the endpoint of an API. This API provides random
 user data when queried.

3.It creates a new XMLHttpRequest object named xhr. The XMLHttpRequest object is used for making HTTP requests to a server.
 In this case, it's configured to make a GET request to the URL specified in reqURL.

4.The xhr.onreadystatechange event handler is set to a function. This function is called whenever the state of the XMLHttpRequest 
object changes. When xhr.readyState equals 4, it means the request is complete.

5.Inside the if (xhr.readyState === 4) block, it checks if the xhr.status is 200. A status code of 200 indicates that the request
 was successful. If the status is not 200, it logs an error message.

6.If the status is 200, it proceeds to parse the response. It uses JSON.parse(xhr.responseText) to convert the JSON response 
from the API into a JavaScript object.

7.Finally, it logs the parsed data object to the console. The data object should contain random user information.
*/