# 📘 Day 5 – JavaScript DOM Manipulation – Instructor Notes

**Class Title:** JavaScript DOM Manipulation
**Class Type:** Applied JavaScript / Practical Web Development
**Format:** Lecture + Live Coding + Hands-on Projects
**Duration:** 120-150 minutes

---

## 🎯 Learning Objectives

By the end of this session, students will:
- Understand what the DOM (Document Object Model) is
- Select HTML elements using various methods
- Modify element content, attributes, and styles
- Create and remove elements dynamically
- Handle user events (click, input, submit)
- Build interactive web applications
- Connect JavaScript knowledge to real webpage interactions

---

## 🛠️ Required Setup

### Instructor:
- Code editor ready
- Browser with DevTools Console open
- Simple HTML template prepared
- Interactive examples ready to demonstrate

### Students:
- Text editor installed
- Browser ready
- Understanding of HTML, CSS, and JavaScript basics from previous days

---

## 📋 Class Outline

### Section 1: Introduction to the DOM (15 mins)

**Opening Context:**

> "So far, we've learned JavaScript in isolation - variables, loops, functions. But how does JavaScript actually interact with our HTML? That's where the DOM comes in!"

**What is the DOM?**

- DOM = Document Object Model
- A programming interface for HTML documents
- Represents the page as a tree of objects
- Every HTML element is an object that JavaScript can manipulate
- Created by the browser when the page loads

**Visual Explanation:**

Draw or show this on screen:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id="container">
      <h1>Hello</h1>
      <p class="text">Paragraph</p>
    </div>
  </body>
</html>
```

Becomes this tree:

```
document
  └─ html
      ├─ head
      │   └─ title
      └─ body
          └─ div#container
              ├─ h1 (Hello)
              └─ p.text (Paragraph)
```

**Key Concepts:**
- `document` object is the entry point
- Each element is a node in the tree
- Nodes can have parents, children, and siblings
- We navigate and manipulate this tree with JavaScript

**Live Demo:**

Open browser console on any webpage:
```javascript
console.log(document);
console.log(document.body);
console.log(document.title);
```

**Why is DOM Important?**
- Makes pages interactive
- Responds to user actions
- Updates content without page reload
- Modern web apps are built on DOM manipulation

---

### Section 2: Selecting Elements (25 mins)

**The Foundation:**

> "Before we can change anything, we need to select it first."

**Method 1: getElementById**

```javascript
// HTML: <h1 id="title">Hello</h1>
let title = document.getElementById('title');
console.log(title);  // <h1 id="title">Hello</h1>
```

- Most specific (IDs must be unique)
- Returns single element
- Returns null if not found
- No # symbol needed (just the ID name)

**Method 2: getElementsByClassName**

```javascript
// HTML: <div class="card">...</div> (multiple)
let cards = document.getElementsByClassName('card');
console.log(cards);  // HTMLCollection
console.log(cards.length);  // How many
console.log(cards[0]);      // First card
```

- Returns HTMLCollection (array-like)
- Live collection (updates automatically)
- No . symbol needed
- Can loop through results

**Method 3: getElementsByTagName**

```javascript
// Select all paragraphs
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
```

- Returns all elements of that tag type
- HTMLCollection
- Useful for bulk operations

**Method 4: querySelector (Modern & Preferred)**

```javascript
// Use CSS selectors!
let title = document.querySelector('#title');        // ID
let card = document.querySelector('.card');           // Class
let para = document.querySelector('p');               // Tag
let button = document.querySelector('div > button'); // Complex
```

- Uses CSS selector syntax
- Returns first matching element
- Returns null if not found
- Most flexible!

**Method 5: querySelectorAll**

```javascript
let allCards = document.querySelectorAll('.card');
console.log(allCards);  // NodeList
allCards.forEach(card => {
  console.log(card);
});
```

- Returns NodeList (can use forEach!)
- Not live (snapshot)
- Very powerful for bulk operations

**Comparison Table:**

| Method | Returns | Use Case |
|--------|---------|----------|
| getElementById | Single element | Unique ID |
| getElementsByClassName | HTMLCollection | Multiple by class |
| getElementsByTagName | HTMLCollection | All of one tag |
| querySelector | Single element | CSS selector (first match) |
| querySelectorAll | NodeList | CSS selector (all matches) |

**Best Practice:**
> "Use `querySelector` and `querySelectorAll` for most cases. They're modern, flexible, and use familiar CSS syntax."

**Live Coding Exercise:**

Create an HTML file with multiple elements:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Selection Practice</title>
</head>
<body>
  <h1 id="main-title">Welcome</h1>
  <p class="text">First paragraph</p>
  <p class="text">Second paragraph</p>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>

  <script>
    // Practice each selection method
    let title = document.getElementById('main-title');
    console.log('Title:', title);

    let firstPara = document.querySelector('.text');
    console.log('First text:', firstPara);

    let allTexts = document.querySelectorAll('.text');
    console.log('All texts:', allTexts);

    let allCards = document.querySelectorAll('.card');
    allCards.forEach((card, index) => {
      console.log(`Card ${index + 1}:`, card);
    });
  </script>
</body>
</html>
```

---

### Section 3: Modifying Content (20 mins)

**textContent Property:**

```javascript
let heading = document.querySelector('h1');

// Get current text
console.log(heading.textContent);  // Current text

// Set new text
heading.textContent = 'New Heading';

// Append to existing
heading.textContent += ' - Updated!';
```

- Gets or sets text content
- Safe (doesn't interpret HTML)
- Best for plain text

**innerHTML Property:**

```javascript
let div = document.querySelector('#content');

// Set HTML content
div.innerHTML = '<strong>Bold text</strong>';

// Add to existing
div.innerHTML += '<p>New paragraph</p>';
```

- Gets or sets HTML content
- Interprets HTML tags
- Powerful but use carefully (security risk with user input!)

**textContent vs innerHTML:**

```javascript
let div = document.querySelector('#test');

// textContent
div.textContent = '<strong>Bold</strong>';
// Result: <strong>Bold</strong> (shows literally)

// innerHTML
div.innerHTML = '<strong>Bold</strong>';
// Result: Bold (renders as HTML)
```

**Live Demo:**

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Original Title</h1>
  <div id="content">Original content</div>
  <button onclick="changeText()">Change Text</button>
  <button onclick="changeHTML()">Change HTML</button>

  <script>
    function changeText() {
      let title = document.querySelector('#title');
      title.textContent = 'Title Changed with textContent';
    }

    function changeHTML() {
      let content = document.querySelector('#content');
      content.innerHTML = '<strong>Bold</strong> and <em>italic</em> text';
    }
  </script>
</body>
</html>
```

**Interactive Exercise:**
Students create a page where a button changes:
1. A heading's text
2. A paragraph's HTML content
3. Multiple elements at once

---

### Section 4: Modifying Styles (20 mins)

**The style Property:**

```javascript
let box = document.querySelector('.box');

// Set individual styles
box.style.color = 'red';
box.style.backgroundColor = 'yellow';  // Note: camelCase!
box.style.fontSize = '24px';
box.style.padding = '20px';
box.style.border = '2px solid black';
box.style.borderRadius = '10px';

// Get computed style
let color = box.style.color;
console.log(color);  // 'red'
```

**Important:** CSS properties in camelCase
- `background-color` → `backgroundColor`
- `font-size` → `fontSize`
- `border-radius` → `borderRadius`

**Working with Classes (Better Approach):**

```css
/* In CSS file */
.highlight {
  background-color: yellow;
  font-weight: bold;
}

.dark-mode {
  background-color: #333;
  color: white;
}
```

```javascript
let element = document.querySelector('#myElement');

// Add class
element.classList.add('highlight');

// Remove class
element.classList.remove('highlight');

// Toggle class (add if absent, remove if present)
element.classList.toggle('dark-mode');

// Check if class exists
if (element.classList.contains('highlight')) {
  console.log('Element is highlighted');
}

// Replace class
element.classList.replace('old-class', 'new-class');
```

**Why classList is Better:**
- Keeps styles in CSS (separation of concerns)
- Easier to maintain
- Can toggle complex style groups
- More professional approach

**Live Demo:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      transition: all 0.3s;
      margin: 20px;
    }

    .box.highlight {
      background-color: yellow;
      transform: scale(1.1);
    }

    .box.dark {
      background-color: #333;
      color: white;
    }
  </style>
</head>
<body>
  <div class="box" id="myBox">Click buttons below</div>
  <button onclick="toggleHighlight()">Toggle Highlight</button>
  <button onclick="toggleDark()">Toggle Dark</button>
  <button onclick="changeInline()">Change Inline Style</button>

  <script>
    function toggleHighlight() {
      let box = document.querySelector('#myBox');
      box.classList.toggle('highlight');
    }

    function toggleDark() {
      let box = document.querySelector('#myBox');
      box.classList.toggle('dark');
    }

    function changeInline() {
      let box = document.querySelector('#myBox');
      box.style.borderRadius = '50%';
      box.style.transform = 'rotate(45deg)';
    }
  </script>
</body>
</html>
```

---

### Section 5: Creating & Removing Elements (20 mins)

**Creating Elements:**

```javascript
// Create new element
let newDiv = document.createElement('div');

// Add content
newDiv.textContent = 'I am a new div!';

// Or with innerHTML
newDiv.innerHTML = '<strong>Bold new div!</strong>';

// Add classes
newDiv.classList.add('box', 'highlight');

// Set attributes
newDiv.setAttribute('id', 'newBox');

// Add inline styles
newDiv.style.padding = '20px';
newDiv.style.backgroundColor = 'lightgreen';

// Append to document
document.body.appendChild(newDiv);
```

**Inserting Elements:**

```javascript
let container = document.querySelector('#container');
let newPara = document.createElement('p');
newPara.textContent = 'New paragraph';

// Append at end
container.appendChild(newPara);

// Prepend at beginning
container.prepend(newPara);

// Insert before specific element
let firstChild = container.firstChild;
container.insertBefore(newPara, firstChild);

// insertAdjacentHTML (flexible)
container.insertAdjacentHTML('beforeend', '<p>HTML string</p>');
container.insertAdjacentHTML('afterbegin', '<p>At start</p>');
```

**Removing Elements:**

```javascript
// Modern way: remove()
let element = document.querySelector('#removeMe');
element.remove();

// Old way: removeChild()
let parent = document.querySelector('#container');
let child = document.querySelector('.child');
parent.removeChild(child);

// Remove all children
parent.innerHTML = '';  // Simple but not best practice

// Or loop and remove
while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
}
```

**Live Example: Dynamic List**

```html
<!DOCTYPE html>
<html>
<body>
  <input id="itemInput" type="text" placeholder="Enter item">
  <button onclick="addItem()">Add Item</button>
  <ul id="itemList"></ul>

  <script>
    function addItem() {
      // Get input value
      let input = document.querySelector('#itemInput');
      let itemText = input.value;

      if (itemText.trim() !== '') {
        // Create new list item
        let li = document.createElement('li');
        li.textContent = itemText;

        // Add delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
          li.remove();
        };

        li.appendChild(deleteBtn);

        // Add to list
        let list = document.querySelector('#itemList');
        list.appendChild(li);

        // Clear input
        input.value = '';
      }
    }
  </script>
</body>
</html>
```

---

### Section 6: Event Handling (30 mins)

**What are Events?**

- User actions: click, type, scroll, etc.
- System actions: page load, window resize
- We "listen" for events and run code in response

**addEventListener (Modern Approach):**

```javascript
let button = document.querySelector('#myButton');

button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Or with arrow function
button.addEventListener('click', () => {
  console.log('Clicked!');
});

// Or with named function
function handleClick() {
  console.log('Clicked!');
}

button.addEventListener('click', handleClick);
```

**Common Events:**

```javascript
// Mouse events
element.addEventListener('click', () => {});
element.addEventListener('dblclick', () => {});
element.addEventListener('mouseenter', () => {});
element.addEventListener('mouseleave', () => {});
element.addEventListener('mousemove', () => {});

// Keyboard events
document.addEventListener('keydown', () => {});
document.addEventListener('keyup', () => {});
document.addEventListener('keypress', () => {});  // Deprecated

// Form events
input.addEventListener('input', () => {});  // Every change
input.addEventListener('change', () => {});  // When loses focus
input.addEventListener('focus', () => {});
input.addEventListener('blur', () => {});
form.addEventListener('submit', () => {});

// Window events
window.addEventListener('load', () => {});
window.addEventListener('resize', () => {});
window.addEventListener('scroll', () => {});
```

**Event Object:**

```javascript
button.addEventListener('click', (event) => {
  console.log(event);              // Event object
  console.log(event.target);       // Element that was clicked
  console.log(event.type);         // 'click'
  console.log(event.timeStamp);    // When
});

input.addEventListener('keydown', (event) => {
  console.log(event.key);          // Which key
  console.log(event.code);         // Key code

  if (event.key === 'Enter') {
    console.log('Enter pressed!');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();  // Stop form submission
  // Handle form data with JavaScript
});
```

**Getting Input Values:**

```javascript
let input = document.querySelector('#nameInput');
let button = document.querySelector('#submitBtn');
let output = document.querySelector('#output');

button.addEventListener('click', () => {
  // Get value
  let name = input.value;

  // Validate
  if (name.trim() === '') {
    alert('Please enter a name');
    return;
  }

  // Display
  output.textContent = `Hello, ${name}!`;

  // Clear input
  input.value = '';
});
```

**Multiple Event Listeners:**

```javascript
let button = document.querySelector('#myButton');

// Can add multiple listeners to same element/event
button.addEventListener('click', () => {
  console.log('First listener');
});

button.addEventListener('click', () => {
  console.log('Second listener');
});

// Both will run!
```

**Removing Event Listeners:**

```javascript
function handleClick() {
  console.log('Clicked!');
}

// Add
button.addEventListener('click', handleClick);

// Remove (must use same function reference)
button.removeEventListener('click', handleClick);
```

---

## 💻 Main Projects

**Project 1: Interactive Counter**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Counter App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
    }

    #count {
      font-size: 72px;
      margin: 20px;
      color: #333;
    }

    button {
      font-size: 24px;
      padding: 15px 30px;
      margin: 10px;
      cursor: pointer;
      border: none;
      border-radius: 8px;
      background-color: #3b82f6;
      color: white;
    }

    button:hover {
      background-color: #2563eb;
    }

    .reset {
      background-color: #ef4444;
    }

    .reset:hover {
      background-color: #dc2626;
    }
  </style>
</head>
<body>
  <h1>Counter App</h1>
  <div id="count">0</div>
  <button id="increment">+</button>
  <button id="decrement">-</button>
  <button id="reset" class="reset">Reset</button>

  <script>
    let countDisplay = document.querySelector('#count');
    let incrementBtn = document.querySelector('#increment');
    let decrementBtn = document.querySelector('#decrement');
    let resetBtn = document.querySelector('#reset');

    let count = 0;

    incrementBtn.addEventListener('click', () => {
      count++;
      countDisplay.textContent = count;
    });

    decrementBtn.addEventListener('click', () => {
      count--;
      countDisplay.textContent = count;
    });

    resetBtn.addEventListener('click', () => {
      count = 0;
      countDisplay.textContent = count;
    });
  </script>
</body>
</html>
```

**Project 2: Todo List with Delete**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
    }

    #todoInput {
      width: 70%;
      padding: 10px;
      font-size: 16px;
    }

    #addBtn {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #10b981;
      color: white;
      border: none;
      border-radius: 4px;
    }

    #todoList {
      list-style: none;
      padding: 0;
    }

    #todoList li {
      background-color: #f3f4f6;
      padding: 15px;
      margin: 10px 0;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .delete-btn {
      background-color: #ef4444;
      color: white;
      border: none;
      padding: 5px 15px;
      border-radius: 4px;
      cursor: pointer;
    }

    .delete-btn:hover {
      background-color: #dc2626;
    }
  </style>
</head>
<body>
  <h1>My Todo List</h1>
  <input id="todoInput" type="text" placeholder="Enter a task">
  <button id="addBtn">Add Task</button>
  <ul id="todoList"></ul>

  <script>
    let input = document.querySelector('#todoInput');
    let addBtn = document.querySelector('#addBtn');
    let list = document.querySelector('#todoList');

    function addTodo() {
      let taskText = input.value.trim();

      if (taskText !== '') {
        // Create list item
        let li = document.createElement('li');

        // Create span for text
        let span = document.createElement('span');
        span.textContent = taskText;

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
          li.remove();
        });

        // Append to li
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Append to list
        list.appendChild(li);

        // Clear input
        input.value = '';
      }
    }

    // Add on button click
    addBtn.addEventListener('click', addTodo);

    // Add on Enter key
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTodo();
      }
    });
  </script>
</body>
</html>
```

---

## 🎯 Challenge Extensions

1. **Counter:** Add max/min limits, prevent going below 0
2. **Todo:** Add "done" checkbox, show completed count
3. **Color Picker:** Multiple buttons that change page background
4. **Modal:** Create popup that opens and closes
5. **Theme Switcher:** Toggle between light and dark mode

---

## 📝 Homework

1. Build an interactive greeting card (input name, display custom message)
2. Create a character counter for a textarea (show remaining characters)
3. Build a color randomizer (button generates random background color)
4. Make a simple quiz (question, buttons, show correct/incorrect)
5. Create an image gallery (click to cycle through images)

---

## 📌 Key Takeaways

Students should leave understanding:
- ✅ DOM is the tree representation of HTML
- ✅ querySelector is the most flexible selection method
- ✅ textContent for text, innerHTML for HTML
- ✅ classList is better than inline styles
- ✅ createElement, appendChild for dynamic content
- ✅ addEventListener for handling events
- ✅ .value gets input values
- ✅ event.preventDefault() stops default behavior

---

## 🎬 Closing (5 mins)

**Recap:**
> "Today you connected JavaScript to HTML! You can now select, modify, create, and respond to user interactions. This is the foundation of modern web development!"

**Preview Tomorrow:**
> "Tomorrow is our big project day - the Certificate Generator! You'll use everything you've learned: HTML structure, CSS styling, JavaScript logic, and DOM manipulation to build a real-world application. It's going to be awesome!"

**Encouragement:**
> "Practice tonight by building small interactive features. Click counters, todo lists, dynamic styling. The more you practice DOM manipulation, the more natural it becomes. See you tomorrow!"

---
