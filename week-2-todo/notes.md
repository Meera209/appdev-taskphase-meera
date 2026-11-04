# Week 2 – JavaScript Fundamentals

## Objective

The objective of this task was to understand the fundamentals of JavaScript and DOM manipulation by building a functional To-Do List application using HTML, CSS and JavaScript.

The application allows users to add tasks, mark them as completed, delete tasks and keep track of the number of incomplete tasks.

## Approach

The application was developed using three main files:

- `index.html` – Defines the structure of the application.
- `style.css` – Handles the styling and layout.
- `script.js` – Contains the JavaScript logic and functionality.

JavaScript was used to interact with HTML elements through the DOM and respond to user actions using event listeners.

## Implementation and Thought Process

### 1. Selecting DOM Elements

The first step was to access the HTML elements that needed to be manipulated.

The `document.querySelector()` method was used to select elements such as the task input, Add button, task list and counter.

### 2. Adding Tasks

When the user enters a task and clicks the Add button:

- The input value is retrieved using `.value`.
- `createElement()` creates a new list item.
- A checkbox, task text and Delete button are created.
- `appendChild()` attaches these elements to the list.
- The input field is cleared after adding the task.

An empty input is ignored using `.trim()` and a conditional statement.

### 3. Completing Tasks

Each task has a checkbox with a `change` event listener.

When the checkbox is selected, `classList.toggle()` adds the completed class to the task. CSS uses this class to apply a strike-through effect.

When unchecked, the class is removed.

### 4. Deleting Tasks

Each task has its own Delete button.

A `click` event listener is attached to the button. When clicked, the corresponding list item is removed using the `remove()` method.

### 5. Updating the Counter

The counter displays the number of incomplete tasks.

The `querySelectorAll()` method is used to count all tasks and completed tasks. The number of remaining tasks is calculated by subtracting completed tasks from the total number of tasks.

The counter is updated using `textContent` whenever a task is added, completed, unchecked or deleted.

## Concepts Learnt

- **JavaScript Variables:** Understanding `var`, `let` and `const`.
- **Functions:** Creating reusable blocks of code.
- **Arrays:** Storing and working with multiple values.
- **DOM (Document Object Model):** Understanding how HTML elements are represented as a tree structure.
- **DOM Manipulation:** Selecting, creating, modifying and removing elements.
- **Event Handling:** Using `addEventListener()` to respond to user interactions.
- **CSS Classes:** Using JavaScript to dynamically change the appearance of elements.
- **Conditional Statements:** Checking whether an input is empty before adding a task.

## Important Takeaway

One of the main concepts understood through this task was that changing a JavaScript variable does not automatically update the webpage.

The DOM must be updated separately to reflect changes in the data.

For example, when a task is marked as completed, the task's appearance and the incomplete-task counter must both be updated. This helps keep the information displayed on the webpage consistent with the actual application state.

## References

1. [MDN – What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)

2. [MDN – DOM Scripting](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)

3. [MDN – Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)

4. [The Odin Project – DOM Manipulation and Events](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events)

5. [JavaScript.info – The JavaScript Language](https://javascript.info/)
