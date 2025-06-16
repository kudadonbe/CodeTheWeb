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