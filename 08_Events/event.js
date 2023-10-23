// events are runs sequentially these are invoked by some activity
/*document.getElementById('river').onclick=function () {

    alert('River')
}
*/

// third parameter we have to pass as the false so that the every application will worked as fine
/*document.getElementById('river').addEventListener('click',(e)=>{
    console.log("River is clicked")
    console.log(e);
},false)
*/
/* Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.*/
/*JavaScript (JS) is a versatile programming language used to make web pages interactive and dynamic. Events and event listeners are crucial for creating responsive web applications. Here are some important events and corresponding event listeners in JavaScript:

click Event

Event: Occurs when the mouse button is clicked on an element.
Event Listener: element.addEventListener('click', function)
keydown Event

Event: Triggered when a key is pressed down.
Event Listener: element.addEventListener('keydown', function)
keyup Event

Event: Occurs when a key is released.
Event Listener: element.addEventListener('keyup', function)
mouseenter and mouseleave Events

Event: Fired when the mouse pointer enters or leaves an element.
Event Listeners:
element.addEventListener('mouseenter', function)
element.addEventListener('mouseleave', function)
mouseover and mouseout Events

Event: Similar to mouseenter and mouseleave, but also triggers for child elements.
Event Listeners:
element.addEventListener('mouseover', function)
element.addEventListener('mouseout', function)
submit Event

Event: Fired when a form is submitted.
Event Listener: formElement.addEventListener('submit', function)
change Event

Event: Triggered when the value of an input element changes.
Event Listener: inputElement.addEventListener('change', function)
resize Event

Event: Occurs when the browser window is resized.
Event Listener: window.addEventListener('resize', function)
load Event

Event: Fired when a page or resource has finished loading.
Event Listener: window.addEventListener('load', function)
DOMContentLoaded Event

Event: Triggered when the DOM is fully loaded, but resources may still be loading.
Event Listener: document.addEventListener('DOMContentLoaded', function)
error Event

Event: Occurs when an error is thrown, e.g., a failed image load or script error.
Event Listener: element.addEventListener('error', function)
focus and blur Events

Event: Fired when an element gains or loses focus.
Event Listeners:
element.addEventListener('focus', function)
element.addEventListener('blur', function)
contextmenu Event

Event: Triggered when the right mouse button is clicked.
Event Listener: element.addEventListener('contextmenu', function)
scroll Event

Event: Occurs when an element is scrolled.
Event Listener: element.addEventListener('scroll', function)
touchstart, touchmove, and touchend Events

Event: For touch-based interactions on touchscreen devices.
Event Listeners:
element.addEventListener('touchstart', function)
element.addEventListener('touchmove', function)
element.addEventListener('touchend', function)
Custom Events

You can create your own custom events and event listeners using the CustomEvent constructor.
Event Listener: element.addEventListener('yourCustomEvent', function)
*/

/*In JavaScript, preventDefault() is a method used to prevent the default behavior of an event from occurring. It's commonly used with event listeners to control how events are handled. Here's how it works:

Event Default Behavior:
Many HTML elements have default behaviors associated with them. For example, clicking a link (<a>) element typically navigates to a new page, submitting a form (<form>) sends data to the server, and pressing the "Enter" key in a form field submits the form.

Preventing Default Behavior:
When you call the preventDefault() method on an event object within an event listener, it tells the browser not to execute the default behavior associated with that event.

javascript
Copy code
element.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the default click behavior (e.g., navigating to a new page).
});
Similarly, you can use event.preventDefault() for other events, such as form submissions, key presses, and more.

Use Cases:

Preventing form submission to validate user input before sending data to the server.
Stopping links from navigating to another page to handle navigation within a single-page application.
Disabling the default context menu (right-click) to display a custom context menu.
Preventing the default behavior of certain keys in a text input to implement custom key functionality.
Here's an example of preventing a form from submitting when the "Submit" button is clicked:

html
Copy code
<!DOCTYPE html>
<html>
<head>
  <title>Prevent Default Example</title>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" placeholder="Enter your username">
    <button type="submit">Submit</button>
  </form>

  <script>
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      alert('Form submission prevented. You can add validation logic here.');
    });
  </script>
</body>
</html>
In this example, when the "Submit" button is clicked, the event.preventDefault() method prevents the form from actually submitting to the server, and instead, an alert is shown. This allows you to add custom validation logic or handle the submission differently.
*/

/*target , toElement, srcElement, currentTarget

In JavaScript, these are properties and methods associated with the handling of events. They are often used in event listeners to access information about the event and the elements involved. Here's an explanation of each:

event.target:

This property returns a reference to the DOM element that triggered the event. It is the most commonly used property to access the element that directly caused the event.
Example:


document.getElementById('myButton').addEventListener('click', function(event) {
  console.log(event.target); // The element with the id 'myButton' is the target.
});
event.toElement (Obsolete):

This property was used in older versions of Internet Explorer (IE) and some other browsers to refer to the element to which the mouse pointer moved. It is obsolete and no longer recommended for use because it's not supported in modern browsers.
event.srcElement (Obsolete):

Similar to toElement, this property was used in older versions of IE to get the source element that triggered the event. Like toElement, it's also considered obsolete and should not be used in modern web development.
event.currentTarget:

This property returns a reference to the element that is currently handling the event. It is particularly useful when you have event listeners on multiple elements, and you want to determine which one is currently executing the listener.
Example:


var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    console.log(event.currentTarget); // The button that was clicked is the currentTarget.
  });
});
In modern web development, it's recommended to primarily use event.target and event.currentTarget to access elements involved in an event, as they are widely supported in all major browsers. The use of toElement and srcElement is discouraged due to their obsolescence and limited browser support.
*/
// Bubbling up concept:Event propagation means child to parent 
document.getElementById('images').addEventListener('click',()=>{
    console.log("Clicked inside the ul")
    
   },false)
   document.getElementById('mountain').addEventListener('click',(e)=>{
    console.log("Clicked mountain")
   e.stopPropagation()
   },false)
   
   // in capturing mode first ul will print and then the li 
   /*When you call event.stopPropagation() within an event listener, it prevents the event from moving further in both the capturing and bubbling phases. In other words, the event will not reach any other elements beyond the one where stopPropagation() is called.
   */
   /*In the DOM (Document Object Model), event propagation occurs in two main phases: the capturing phase and the bubbling phase. These phases describe the order in which events are dispatched and propagate through the DOM tree.
   
   Capturing Phase:
   
   During the capturing phase, the event travels from the root of the DOM tree to the target element, which is the element where the event originated.
   The event starts at the root element (usually the document), and it moves downward through the ancestor elements to the target element.
   Event listeners attached during the capturing phase will be triggered as the event moves from the root toward the target.
   Example:
   
   javascript
   Copy code
   document.getElementById('myElement').addEventListener('click', function(event) {
     console.log('Capturing phase: This event listener is triggered during the capturing phase.');
   }, true);
   In this example, the third argument true indicates that the event listener should be in the capturing phase. This listener will be executed as the event propagates from the root toward the myElement.
   
   Bubbling Phase:
   
   After the event reaches the target element, it enters the bubbling phase, during which it travels back up the DOM tree from the target to the root.
   Event listeners attached during the bubbling phase will be triggered as the event moves from the target element toward the root.
   Example:
   
   javascript
   Copy code
   document.getElementById('myElement').addEventListener('click', function(event) {
     console.log('Bubbling phase: This event listener is triggered during the bubbling phase.');
   });
   In this example, the event listener does not specify a capturing phase (default is false), so it will be executed during the bubbling phase.
   
   Event Flow:
   
   The capturing and bubbling phases make up the complete event flow in the DOM. First, events propagate through the capturing phase, followed by the bubbling phase.
   Event listeners can be attached in either or both phases, allowing developers to control at which point in the event flow they respond to events.
   Understanding event propagation phases is essential for controlling event behavior in your web applications. By attaching event listeners to specific elements in the capturing or bubbling phase, you can respond to events in a more controlled and efficient manner. You can also use methods like event.stopPropagation() to stop events from continuing in one or both phases.
   */
   /*
   document.getElementById('road').addEventListener('click',(e)=>{
       e.preventDefault()
       console.log('Road Clicked');
   })
   */
   /*
   document.querySelector('#images').addEventListener('click',(e)=>{
       console.log(e.target);
   })
   */
   document.querySelector('#images').addEventListener('click',(e)=>{
       console.log(e.target.parentNode);
       let removeIt=e.target.parentNode
       // removeIt.remove();
       
   })
   