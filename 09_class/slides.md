---
marp: true
theme: uncover
class: invert
paginate: true
--------------

# 🏫 Code the Web – Class 9

## Building with Arrays – To-Do App (Part 2)

> 🎯 Make your To-Do App functional
> 🧠 Add tasks with JavaScript and arrays
> ✅ See your code come alive!

---

## 🎯 Today’s Objective

* Use JavaScript to **add tasks** to your To-Do App
* Store task data in an **array**
* Use JavaScript to **create and display** list items
* Prevent empty inputs and keep the list clean

---

## 🧑‍🏫 What’s the Plan?

| Section      | Description                            |
| ------------ | -------------------------------------- |
| **Topic**    | Making the To-Do app work using JS     |
| **Duration** | 1.5–2 hours                            |
| **Output**   | Working "Add Task" feature             |
| **You Know** | HTML layout, IDs, buttons from Class 8 |

---

## 📖 Concepts You’ll Use Today

| Concept           | Explanation                    |
| ----------------- | ------------------------------ |
| `push()`          | Add item to array              |
| `trim()`          | Clean extra spaces from input  |
| `createElement()` | Create new HTML elements       |
| `appendChild()`   | Add elements to page           |
| `innerHTML = ""`  | Clear list before re-rendering |

---

## 🔁 From Class 8

Ask:

* What do you see in your HTML layout?
* Where should new tasks go?

Remember:

* `#taskInput` → user input
* `#taskList` → empty space to display tasks
* `Add Task` → the button to trigger logic

---

## 🛠️ Basic Task Handling

```js
let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  input.value = "";
  renderTasks();
}
```

✅ Prevents empty inputs
✅ Adds task to array

---

## 🔁 Show Tasks on the Page (P1)

```js
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = ""; // Clear old list
```

---

## 🔁 Show Tasks on the Page (P2)

```js
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i];
    list.appendChild(li);
  }
}
```

💡 Renders all tasks from the array

---

## 🔘 HTML Button for Action

```html
<button onclick="addTask()">Add Task</button>
```

When clicked → runs `addTask()` → updates the list!

---

## 🧪 Challenge Time!

Try extending your app:

1. Show total number of tasks

   ```js
   count.innerText = tasks.length;
   ```
2. Capitalize first letter of each task
3. Show latest task **on top** using:

   ```js
   tasks.unshift(taskText);
   ```

---

## ✨ Make It Smarter

* Convert task input into **Title Case**
* Show a **"No tasks yet"** message if list is empty
* Style completed tasks (✅ next class)

---

## 📝 Practice at Home

* Add a **timestamp** next to each task
* Try grouping logic inside a `todoApp` object
* Add light styling: spacing, hover effects, fonts

---

## 🧠 Behind the Code

| Concept          | Where It Appears                        |
| ---------------- | --------------------------------------- |
| Array logic      | `push()` / `unshift()`                  |
| App memory       | Task list lives in `let tasks = []`     |
| DOM rendering    | `createElement()` and `appendChild()`   |
| Input validation | `trim()` and `if (input === "") return` |

---

## ✅ You Can Now\...

* Accept user input
* Store tasks in memory using arrays
* Build and display list items dynamically
* Turn your static page into a working app!

