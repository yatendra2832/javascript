
fetch('https://randomuser.me/api/')
.then((response)=>{
    if(!response.ok){
        console.log("Network Request was not successfull");
    }
    return response.json()
})
.then((data)=>{
    console.log('Data Received: ',data);
   
})
.catch((err)=>{
    console.log('Error: ',err);
})

// Important notes About the fetch api in js
// Fetch in JS : In JavaScript, "fetch" is a method used to make network requests, typically to retrieve data from a web server or send data to a web server. It is used to make asynchronous HTTP requests to APIs and other resources. Fetch is a relatively new addition to the JavaScript language and provides a more modern and flexible alternative to the older XMLHttpRequest (XHR) object for handling network requests.

// ** if you request to promise and you get the 404 error code then where you will get it in the fetch or response  ->the answer is In a typical Fetch API request, a 404 error code will be received in the response object when the server responds with a 404 status code. It won't result in a JavaScript error, but rather the response object itself will indicate that the request was unsuccessful. You will get the error when it is unable to make the request then the error will be getting in the 
/*
The way JavaScript engines work in a web browser involves multiple components and processes working together. Let's break down these components and their interactions with a simplified diagram:

JavaScript Engine:

The JavaScript engine is responsible for executing JavaScript code. It consists of two main components:
Call Stack: The call stack is a data structure that keeps track of the execution context of functions (i.e., where the program is currently). It follows a Last-In-First-Out (LIFO) order.
Memory Heap: The memory heap is where objects, variables, and function closures are stored. Memory is allocated here when variables and objects are created.
Web APIs:

Web APIs are browser-specific APIs that provide functionality beyond the core JavaScript language. These include the DOM API for manipulating web page content, the Fetch API for making network requests, and the Timer API for handling timers and asynchronous operations. Web APIs are not part of the JavaScript engine but are provided by the browser.
Task Queue:

The task queue (also known as the message queue) is a data structure that stores tasks (events or functions) to be executed. These tasks are generated as a result of asynchronous operations, such as DOM events, timers, and network requests. When a task is ready to be executed, it is placed in the task queue.
Event Loop:

The event loop is a continuous process that monitors the call stack and the task queue. Its primary job is to check if the call stack is empty. If the call stack is empty, it dequeues tasks from the task queue and pushes them onto the call stack for execution.
Now, let's go through a simplified step-by-step process of how these components interact:

Initial Execution:

When a web page is loaded, the JavaScript engine starts executing the initial JavaScript code.
Call Stack:

Functions and their execution contexts are pushed onto the call stack as the code is executed.
Web APIs:

Asynchronous operations (e.g., DOM events, timers, network requests) are initiated and passed to the appropriate Web APIs for handling. The JavaScript engine continues to execute the synchronous code.
Task Queue:

When an asynchronous operation is completed, a task associated with it is placed in the task queue.
Event Loop:

The event loop constantly checks the call stack. If the call stack is empty, the event loop dequeues tasks from the task queue and pushes them onto the call stack.
Call Stack (Again):

The functions from the task queue are executed in the order they were added, one at a time, following the LIFO principle.
Repeat:

The process continues in a loop, allowing for non-blocking execution of asynchronous tasks.
Here's a simplified diagram to help visualize this process:

sql
Copy code
   +------------------+
   |                  |
   |  JavaScript      |
   |   Engine         |
   |                  |
   +--------+---------+
            |
            v
     +------+-------+
     |              |
     |  Call Stack  |  --> Synchronous code execution
     |              |
     +------+-------+
            |
            v
     +------+-------+
     |              |
     |  Web APIs    |  --> Asynchronous operations (e.g., DOM, timers, fetch)
     |              |
     +------+-------+
            |
            v
     +------+-------+
     |              |
     | Task Queue   |  --> Stores tasks from Web APIs
     |              |
     +------+-------+
            |
            v
     +------+-------+
     |              |
     |  Event Loop  |  --> Monitors the call stack and task queue
     |              |
     +------+-------+
     */

/*     In JavaScript, when you make network requests using the Fetch API or other asynchronous operations, they are typically managed through a task queue or message queue, often referred to as the "event loop." Here's how the task queue for Fetch and asynchronous operations works:

     Initiating an Asynchronous Operation:
     
     When you initiate an asynchronous operation, such as a Fetch request, by calling a function like fetch(), the operation begins but does not block the execution of your JavaScript code. Instead, it happens in the background.
     Web API Handling:
     
     Asynchronous operations like Fetch requests are handled by the browser's Web APIs, not by the JavaScript engine itself. The Web API takes care of sending the HTTP request and waiting for the response.
     Callback Function:
     
     You typically provide a callback function to be executed when the asynchronous operation is complete. For Fetch, this is done using .then() or async/await to work with the response.
     Task Queue:
     
     When the asynchronous operation is complete, the associated callback function is placed in the task queue or message queue. This queue holds tasks to be executed when the JavaScript engine is idle. The task queue is sometimes also referred to as the "macrotask queue."
     Event Loop:
     
     The event loop is constantly monitoring the call stack (the stack of functions being executed) and the task queue. When the call stack is empty, the event loop checks the task queue for tasks to execute.
     Task Execution:
     
     If there are tasks in the task queue, the event loop picks one and pushes it onto the call stack for execution.
     Repeat:
     
     The event loop continues this process in a loop, allowing asynchronous tasks to be executed when they're ready without blocking the main thread of execution.
     Here's a simplified diagram to illustrate this process:
     
     sql
     Copy code
        +------------------+
        |                  |
        |  JavaScript      |
        |   Engine         |
        |                  |
        +--------+---------+
                 |
                 v
          +------+-------+
          |              |
          |  Call Stack  |  --> Synchronous code execution
          |              |
          +------+-------+
                 |
                 v
          +------+-------+
          |              |
          | Task Queue   |  --> Stores tasks from Web APIs (e.g., Fetch)
          |              |
          +------+-------+
                 |
                 v
          +------+-------+
          |              |
          |  Event Loop  |  --> Monitors the call stack and task queue
          |              |
          +------+-------+
     This asynchronous pattern ensures that network requests and other time-consuming tasks do not block the main execution thread, allowing your web page to remain responsive. When the response is ready, the associated callback function is executed in the order they were added to the task queue.
  */   
    