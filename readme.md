1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : getElementById is the method that works only with an element’s id. It returns just that one element because ids are supposed to be unique.

getElementsByClassName is the method that works with class names. It gives back a collection of all elements with that class, and that collection is live, meaning it updates automatically if the DOM changes.

querySelector is the method that works with any CSS selector, not just id or class. It only gives you the first matching element.

querySelectorAll is almost the same, but it gives you all the matches. The difference is the result is static, so it won’t change automatically if the DOM updates.

2. How do you create and insert a new element into the DOM?

Answer : Creating a new element in the DOM starts with document.createElement, which makes an element in memory but not yet on the page. After that, the element is customized by adding text, attributes, or classes. Finally, the element is inserted into the document using methods such as appendChild, append, or prepend on a parent element, which places it inside the DOM.

3. What is Event Bubbling and how does it work?

Answer : Event bubbling is the process where an event starts from the deepest target element and then moves upward through its ancestors in the DOM tree. For example, when a click happens on a button inside a div, the event is first handled by the button itself, then by the parent div, then by higher-level ancestors, and finally by the document if they have event listeners. This upward travel of the same event is what’s called bubbling.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer : Event delegation is a technique where a single event listener is added to a parent element to handle events on its child elements, instead of adding separate listeners to each child. When an event occurs on a child, it bubbles up to the parent, and the parent’s listener can check which child triggered it.

It is useful because it reduces memory usage, makes the code cleaner, and allows handling dynamic elements that are added to the DOM later without needing to attach new listeners.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() is a method that stops the default action of an element from happening. For example, it can prevent a link from navigating or a form from submitting.

stopPropagation() is a method that stops the event from bubbling up (or capturing down) the DOM. It prevents parent elements from being notified of the event.

In short, preventDefault() stops the browser’s default behavior, while stopPropagation() stops the event from reaching other elements.
