---
marp: true
theme: uncover
class: invert
paginate: true
backgroundImage: url('../../settings/kudadonbe_theme_black.png')
---

# 🎯 **Day 5 – JavaScript DOM Manipulation**

> Connecting JavaScript to HTML

---

## 🎯 Today's Goals

- Understand what the DOM is
- Select HTML elements with JavaScript
- Modify element content and attributes
- Change styles dynamically
- Create new elements
- Handle user events (click, input, etc.)
- Build an interactive webpage!

---

## 🌳 What is the DOM?

### **DOM = Document Object Model**

- A tree representation of your HTML
- JavaScript's way of "seeing" the webpage
- Every HTML element is an object
- We can select, modify, create, and delete elements

---

## 🌳 DOM Tree Visualization

```html
<html>
  <body>
    <div id="container">
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  </body>
</html>
```

```
document
  └─ html
      └─ body
          └─ div#container
              ├─ h1 (Title)
              └─ p (Paragraph)
```

---

## 🔍 Selecting Elements

### **4 Main Methods:**

```javascript
// 1. By ID (returns single element)
let element = document.getElementById('myId');

// 2. By Class (returns collection)
let elements = document.getElementsByClassName('myClass');

// 3. By Tag (returns collection)
let paragraphs = document.getElementsByTagName('p');

// 4. Query Selector (CSS selector - most flexible!)
let element = document.querySelector('.myClass');
let elements = document.querySelectorAll('div.card');
```

---

## 🎯 getElementById

```html
<h1 id="title">Hello, World!</h1>
<p id="description">This is a paragraph.</p>

<script>
  // Select by ID
  let title = document.getElementById('title');
  let desc = document.getElementById('description');

  console.log(title);  // <h1 id="title">Hello, World!</h1>
  console.log(desc);   // <p id="description">...</p>
</script>
```

**IDs must be unique on the page!**

---

## 🎯 querySelector

### **Uses CSS Selectors (Most Powerful!)**

```javascript
// Select by ID
let title = document.querySelector('#title');

// Select by class
let card = document.querySelector('.card');

// Select by tag
let paragraph = document.querySelector('p');

// Complex selectors
let firstButton = document.querySelector('div.container button');
let activeLink = document.querySelector('a.active');

// Select all (returns NodeList)
let allCards = document.querySelectorAll('.card');
let allButtons = document.querySelectorAll('button');
```

---

## ✏️ Changing Content

```javascript
let heading = document.querySelector('#title');

// Change text content
heading.textContent = 'New Title';

// Change HTML content
heading.innerHTML = '<strong>Bold Title</strong>';

// Get current content
let current = heading.textContent;
console.log(current);  // 'New Title'
```

---

## 📝 textContent vs innerHTML

```javascript
let div = document.querySelector('#myDiv');

// textContent - just the text (safe)
div.textContent = '<strong>Bold</strong>';
// Result: <strong>Bold</strong> (shows as text)

// innerHTML - interprets HTML (powerful but risky)
div.innerHTML = '<strong>Bold</strong>';
// Result: Bold (renders as HTML)
```

**Use textContent for plain text, innerHTML for HTML**

---

## 🎨 Changing Styles

```javascript
let box = document.querySelector('.box');

// Change individual styles
box.style.color = 'red';
box.style.backgroundColor = 'yellow';
box.style.fontSize = '24px';
box.style.padding = '20px';
box.style.border = '2px solid black';

// Note: CSS properties in camelCase
// background-color → backgroundColor
// font-size → fontSize
```

---

## 🏷️ Changing Attributes

```javascript
let link = document.querySelector('a');

// Get attribute
let href = link.getAttribute('href');
console.log(href);  // Current URL

// Set attribute
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank');

// Remove attribute
link.removeAttribute('target');

// Check if attribute exists
let hasTarget = link.hasAttribute('target');
```

---

## 🎨 Working with Classes

```javascript
let element = document.querySelector('.box');

// Add class
element.classList.add('active');

// Remove class
element.classList.remove('hidden');

// Toggle class (add if not present, remove if present)
element.classList.toggle('dark-mode');

// Check if class exists
if (element.classList.contains('active')) {
  console.log('Element is active');
}

// Replace class
element.classList.replace('old-class', 'new-class');
```

---

## 🆕 Creating Elements

```javascript
// Create new element
let newDiv = document.createElement('div');

// Add content
newDiv.textContent = 'I am a new div!';

// Add classes
newDiv.classList.add('box', 'highlight');

// Set attributes
newDiv.setAttribute('id', 'myNewDiv');

// Add styles
newDiv.style.color = 'blue';
newDiv.style.padding = '10px';

// Append to page
document.body.appendChild(newDiv);
```

---

## 📍 Inserting Elements

```javascript
let container = document.querySelector('#container');
let newElement = document.createElement('p');
newElement.textContent = 'New paragraph';

// Append at end
container.appendChild(newElement);

// Prepend at beginning
container.prepend(newElement);

// Insert before specific element
let firstChild = container.firstChild;
container.insertBefore(newElement, firstChild);

// Insert adjacent
container.insertAdjacentHTML('beforeend', '<p>HTML string</p>');
```

---

## 🗑️ Removing Elements

```javascript
// Select element
let element = document.querySelector('#removeMe');

// Remove it
element.remove();

// Or remove child from parent
let parent = document.querySelector('#container');
let child = document.querySelector('.child');
parent.removeChild(child);

// Remove all children
parent.innerHTML = '';
```

---

## 🖱️ Event Listeners

### **Respond to User Actions!**

```javascript
let button = document.querySelector('#myButton');

// Add event listener
button.addEventListener('click', function() {
  alert('Button was clicked!');
});

// Or with arrow function
button.addEventListener('click', () => {
  console.log('Clicked!');
});
```

---

## 🎯 Common Events

```javascript
let input = document.querySelector('#myInput');
let button = document.querySelector('#myButton');

// Click
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Double click
button.addEventListener('dblclick', () => {
  console.log('Double clicked!');
});

// Input change
input.addEventListener('input', () => {
  console.log('User is typing:', input.value);
});

// Focus
input.addEventListener('focus', () => {
  console.log('Input focused');
});
```

---

## 📋 More Events

```javascript
// Mouse events
element.addEventListener('mouseenter', () => {});
element.addEventListener('mouseleave', () => {});
element.addEventListener('mousemove', () => {});

// Keyboard events
document.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
});

document.addEventListener('keyup', (event) => {
  console.log('Key released:', event.key);
});

// Form events
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop form submission
  console.log('Form submitted');
});
```

---

## 📊 Event Object

```javascript
button.addEventListener('click', (event) => {
  console.log(event);              // Event object
  console.log(event.target);       // Element that was clicked
  console.log(event.type);         // 'click'
  console.log(event.timeStamp);    // When it happened
});

input.addEventListener('keydown', (event) => {
  console.log(event.key);          // Which key was pressed
  console.log(event.code);         // Key code
  if (event.key === 'Enter') {
    console.log('Enter was pressed!');
  }
});
```

---

## 📝 Input Values

```javascript
let input = document.querySelector('#nameInput');
let button = document.querySelector('#submitButton');
let output = document.querySelector('#output');

button.addEventListener('click', () => {
  // Get input value
  let name = input.value;

  // Display it
  output.textContent = `Hello, ${name}!`;

  // Clear input
  input.value = '';
});
```

---

## 💡 Practical Example: Toggle Visibility

```html
<button id="toggleBtn">Toggle</button>
<div id="content" class="visible">
  This content can be hidden!
</div>

<style>
  .visible { display: block; }
  .hidden { display: none; }
</style>

<script>
  let button = document.querySelector('#toggleBtn');
  let content = document.querySelector('#content');

  button.addEventListener('click', () => {
    content.classList.toggle('hidden');
  });
</script>
```

---

## 💡 Practical Example: Counter

```html
<h1 id="count">0</h1>
<button id="increment">+</button>
<button id="decrement">-</button>
<button id="reset">Reset</button>

<script>
  let countDisplay = document.querySelector('#count');
  let count = 0;

  document.querySelector('#increment').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
  });

  document.querySelector('#decrement').addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
  });

  document.querySelector('#reset').addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
  });
</script>
```

---

## 💡 Practical Example: Todo List

```html
<input id="todoInput" type="text" placeholder="Enter task">
<button id="addBtn">Add</button>
<ul id="todoList"></ul>

<script>
  let input = document.querySelector('#todoInput');
  let addBtn = document.querySelector('#addBtn');
  let list = document.querySelector('#todoList');

  addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      // Create new list item
      let li = document.createElement('li');
      li.textContent = input.value;

      // Add to list
      list.appendChild(li);

      // Clear input
      input.value = '';
    }
  });
</script>
```

---

## 🎨 Dynamic Styling

```javascript
let box = document.querySelector('.box');
let colors = ['red', 'blue', 'green', 'yellow'];
let currentIndex = 0;

document.querySelector('#changeColor').addEventListener('click', () => {
  box.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});

// Or toggle dark mode
document.querySelector('#darkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

---

## 🔄 Loop Through Elements

```javascript
// Select all paragraphs
let paragraphs = document.querySelectorAll('p');

// Loop and change each
paragraphs.forEach((p, index) => {
  p.textContent = `Paragraph ${index + 1}`;
  p.style.color = 'blue';
});

// Or with for loop
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.fontSize = '18px';
}
```

---

## 📊 Getting Element Dimensions

```javascript
let box = document.querySelector('.box');

// Dimensions
console.log(box.offsetWidth);   // Width including border
console.log(box.offsetHeight);  // Height including border
console.log(box.clientWidth);   // Width excluding border
console.log(box.clientHeight);  // Height excluding border

// Position
console.log(box.offsetTop);     // Distance from top
console.log(box.offsetLeft);    // Distance from left
```

---

## 🎯 Delegating Events (Advanced)

```javascript
// Instead of adding listener to each button
let container = document.querySelector('#buttonContainer');

container.addEventListener('click', (event) => {
  // Check if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});

// Now any button (even added later) will work!
```

---

## 💻 Today's Project: Interactive Card

```html
<div class="card">
  <h2 id="cardTitle">Click the button!</h2>
  <p id="cardText">This is the original text.</p>
  <input id="nameInput" type="text" placeholder="Enter your name">
  <button id="changeBtn">Change</button>
  <button id="toggleBtn">Toggle Style</button>
</div>

<script>
  let title = document.querySelector('#cardTitle');
  let text = document.querySelector('#cardText');
  let input = document.querySelector('#nameInput');
  let changeBtn = document.querySelector('#changeBtn');
  let toggleBtn = document.querySelector('#toggleBtn');

  changeBtn.addEventListener('click', () => {
    let name = input.value;
    if (name) {
      title.textContent = `Hello, ${name}!`;
      text.textContent = `Welcome to JavaScript DOM manipulation, ${name}!`;
      input.value = '';
    }
  });

  toggleBtn.addEventListener('click', () => {
    let card = document.querySelector('.card');
    card.classList.toggle('dark-theme');
  });
</script>
```

---

## 🎯 Challenge Tasks

**Easy:**
- Create a button that changes the background color of the page
- Make an input that displays what you type in real-time

**Medium:**
- Build a simple calculator with buttons
- Create a todo list with delete functionality

**Hard:**
- Build a modal (popup) that opens and closes
- Create a dynamic theme switcher (light/dark mode)
- Make a character counter for a textarea

---

## 🐛 Common Mistakes

```javascript
// ❌ Selecting before element exists
let button = document.querySelector('#btn');
button.addEventListener('click', () => {}); // Error if #btn doesn't exist

// ✅ Wait for DOM or put script at end
document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('#btn');
  button.addEventListener('click', () => {});
});

// ❌ Forgetting .value for inputs
let input = document.querySelector('#myInput');
console.log(input); // ❌ This is the element, not the value
console.log(input.value); // ✅ This is the value

// ❌ Not preventing default on forms
form.addEventListener('submit', () => {
  // Form submits and page reloads!
});

// ✅ Prevent default
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Now handle the form data
});
```

---

## 📚 DOM Cheat Sheet

```javascript
// Select
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('tag')

// Content
element.textContent = 'text'
element.innerHTML = '<strong>html</strong>'

// Styles
element.style.property = 'value'
element.classList.add('class')
element.classList.remove('class')
element.classList.toggle('class')

// Attributes
element.getAttribute('attr')
element.setAttribute('attr', 'value')

// Create & Remove
document.createElement('tag')
parent.appendChild(child)
element.remove()

// Events
element.addEventListener('event', callback)
```

---

## 🔄 Review

### **What We Learned:**

- ✅ DOM is the tree representation of HTML
- ✅ Select elements with querySelector
- ✅ Change content with textContent/innerHTML
- ✅ Modify styles with .style and .classList
- ✅ Create elements with createElement
- ✅ Handle events with addEventListener
- ✅ Get input values with .value
- ✅ Build interactive webpages!

---

## 🏠 Homework

1. **Build a counter app** (+, -, reset buttons)
2. **Create a todo list** (add and delete items)
3. **Make a color picker** (buttons that change background)
4. **Build a character counter** (textarea with live count)
5. **Create a show/hide toggle** (button that reveals content)

**Goal:** Practice DOM manipulation until it feels natural!

---

## 📚 Resources

- **MDN DOM Guide:** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- **JavaScript.info DOM:** https://javascript.info/document
- **W3Schools DOM:** https://www.w3schools.com/js/js_htmldom.asp
- **DOM Visualizer:** https://bioub.github.io/dom-visualizer/

---

## 🎉 You Can Build Anything Now!

### **You have all the pieces:**

- HTML (structure)
- CSS (style)
- JavaScript (logic)
- DOM (connection)

**Tomorrow: Certificate Generator Project!**

---

## ❓ Preview: Day 6

### **Certificate Generator Project**

- Multi-page application
- Data management
- Template rendering
- Print functionality
- **Everything you've learned in action!**

---

# 🎯 **Practice Makes Perfect!**

> "The DOM is your playground"

**See you tomorrow for the final project!**

---
