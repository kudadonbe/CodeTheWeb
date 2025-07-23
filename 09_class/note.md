# 🏫 **Code the Web – Class 9: Building with Arrays (To-Do App – Part 2)**

### 🎯 **Session Goal**

Make the **To-Do List App functional** by allowing students to add tasks dynamically using JavaScript. Use **arrays**, **`push()`**, and **DOM manipulation** to build and display task items.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| Topic         | Build dynamic lists with JavaScript                         |
| Duration      | 1.5–2 hours                                                 |
| Format        | Live coding, demo, student practice                         |
| Prerequisites | Class 8 (app layout ready, understanding of HTML IDs & CSS) |
| Key Concepts  | `array.push()`, input handling, dynamic `<li>` creation     |
| Output        | Fully working “Add Task” feature in To-Do App               |

---

## 🛠️ **Live Demo: Add Task Logic**

Assumes you already have the layout from Class 8.

```html
<script>
  let tasks = [];

  function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    tasks.push(taskText);
    input.value = "";
    renderTasks();
  }

  function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
      let li = document.createElement("li");
      li.innerText = tasks[i];
      list.appendChild(li);
    }
  }
</script>
```

Button:

```html
<button onclick="addTask()">Add Task</button>
```

---

## 📖 **Key Concepts Introduced**

| Concept           | Explanation                                |
| ----------------- | ------------------------------------------ |
| `push()`          | Add item to array                          |
| `trim()`          | Removes leading/trailing spaces from input |
| `createElement()` | Create HTML elements from JS               |
| `appendChild()`   | Add element to DOM                         |
| `innerHTML = ""`  | Clear previous list before updating        |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Review Layout (10 min)

* Review from Class 8: what’s built so far?
* What do we want to *happen* when clicking the button?

### 🔹 Step 2: Add JavaScript Logic (20 min)

* Add `addTask()` and `renderTasks()` functions
* Use `push()` to store tasks in an array
* Loop through tasks to build the list

### 🔹 Step 3: Debugging & Practice (20 min)

* Show empty input prevention (`if input is empty return`)
* Test and display feedback in real-time

---

## 🧪 **In-Class Challenge**

> Extend your app by:

* Showing how many total tasks exist (`tasks.length`)
* Capitalize first letter of each task
* Show latest task at the **top** of the list instead of bottom

```js
tasks.unshift(taskText); // Instead of push()
```

---

## 📝 **Homework / Extension Task**

* Add a timestamp next to each task
* Style completed tasks (optional for next class)
* Try grouping `addTask()` and `renderTasks()` under a single `todoApp` object

---

## 🧠 **Secretly Learned**

| Concept          | Where It’s Used                         |
| ---------------- | --------------------------------------- |
| Array logic      | `tasks.push()` / `unshift()`            |
| DOM manipulation | Build and attach list items dynamically |
| App state        | Data lives in memory using arrays       |
| Input validation | Prevent empty inputs                    |

---

* ✅ `Challenge Time!`
* ✨ `Make It Smarter`
* 📝 `Practice at Home`

You can directly copy this into your teacher guide or slide notes.

---

## ✅ 🧪 Challenge Time – Sample Code & Answers

### 1. Show total number of tasks

Add this to your HTML:

```html
<p>Total Tasks: <span id="taskCount">0</span></p>
```

Update it in JS every time a task is added or removed:

```js
function updateTaskCount() {
  const count = document.getElementById("taskCount");
  count.innerText = tasks.length;
}
```

Call `updateTaskCount()` after modifying the task list.

---

### 2. Capitalize first letter of each task

This is **sentence case**, not full title case.

```js
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const taskText = capitalizeFirstLetter(taskInput.value.trim());
```

---

### 3. Show latest task **on top**

Use `unshift()` instead of `push()`:

```js
tasks.unshift(taskText); // Adds to beginning of array
```

Make sure the list is cleared and redrawn after each update.

---

## ✨ Make It Smarter – Code Examples

### 1. Convert input into **Title Case**

```js
function toTitleCase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const taskText = toTitleCase(taskInput.value.trim());
```

---

### 2. Show a **“No tasks yet”** message

HTML:

```html
<p id="emptyMessage">No tasks yet!</p>
```

CSS (optional):

```css
#emptyMessage {
  font-style: italic;
  color: gray;
}
```

JS:

```js
function updateEmptyMessage() {
  const empty = document.getElementById("emptyMessage");
  empty.style.display = tasks.length === 0 ? "block" : "none";
}
```

Call `updateEmptyMessage()` after adding/removing tasks.

---

### 3. Style completed tasks (Next class preview)

JS:

```js
li.classList.toggle("completed");
```

CSS:

```css
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
```

---

## 📝 Practice at Home – Tips & Code

### 1. Add a **timestamp** to each task

```js
const timestamp = new Date().toLocaleString();
li.innerHTML = `<span>${taskText}</span> <small>${timestamp}</small>`;
```

Use `<small>` to visually separate it.

---

### 2. Group logic inside a `todoApp` object

```js
const todoApp = {
  tasks: [],
  addTask(text) {
    this.tasks.push(text);
    this.render();
  },
  render() {
    // Clear and redraw tasks
  }
};
```

Encourage students to organize their logic in methods like `addTask`, `deleteTask`, etc.

---

### 3. Add light styling

```css
li {
  margin-bottom: 10px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.3s;
}
li:hover {
  background-color: #f0f0f0;
}
```

Students can explore fonts with:

```css
body {
  font-family: 'Segoe UI', sans-serif;
}
```
