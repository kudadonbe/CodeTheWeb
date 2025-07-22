## 📝 Class Notes (for students)

### 💡 What is `localStorage`?

* A **built-in browser tool** to save small data
* Keeps your data even after closing the tab
* Stores **only strings**, so we need `JSON.stringify()` and `JSON.parse()`

---

### ✍️ What You’ll Do Today

1. Store tasks in localStorage
2. Load saved tasks when the page opens
3. Automatically update storage after every change

---

### 🔧 Key Code Examples

#### Save to storage

```js
localStorage.setItem("myTasks", JSON.stringify(tasks));
```

#### Load from storage

```js
let saved = localStorage.getItem("myTasks");
if (saved) {
  tasks = JSON.parse(saved);
  renderTasks();
}
```

#### Clear storage

```js
localStorage.removeItem("myTasks");
```

---

### ✅ Your Challenge

1. Make your To-Do list **remember tasks**
2. Test by refreshing your browser
3. Bonus: Add a “Clear All” button

---

### 💭 Extra Thinking

* What else could you save? (Color theme? Name?)
* Why do we convert data with `JSON.stringify()`?
* Try viewing your saved data in **DevTools → Application → localStorage**

---

## 💻 HTML + JavaScript Demo Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To-Do with localStorage</title>
  <style>
    body { font-family: sans-serif; max-width: 500px; margin: auto; padding: 20px; }
    li.done { text-decoration: line-through; opacity: 0.6; }
    button { margin-left: 5px; }
  </style>
</head>
<body>
  <h2>My Tasks</h2>
  <input type="text" id="taskInput" placeholder="New task..." />
  <button onclick="addTask()">Add Task</button>
  <button onclick="clearAll()">Clear All</button>
  <ul id="taskList"></ul>

  <script>
    let tasks = [];

    function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();
      if (taskText === "") return;
      tasks.push(taskText);
      input.value = "";
      saveTasks();
      renderTasks();
    }

    function renderTasks() {
      let list = document.getElementById("taskList");
      list.innerHTML = "";
      for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.onclick = function () {
          tasks.splice(i, 1);
          saveTasks();
          renderTasks();
        };
        li.appendChild(deleteBtn);
        list.appendChild(li);
      }
    }

    function saveTasks() {
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }

    function loadTasks() {
      let saved = localStorage.getItem("myTasks");
      if (saved) {
        tasks = JSON.parse(saved);
        renderTasks();
      }
    }

    function clearAll() {
      tasks = [];
      localStorage.removeItem("myTasks");
      renderTasks();
    }

    loadTasks();
  </script>
</body>
</html>
```