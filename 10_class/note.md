# 🏫 **Code the Web – Class 10: Finishing the To-Do App (Delete & Mark Done)**

### 🎯 **Session Goal**

Complete the **To-Do App** by allowing students to **delete tasks** and **mark them as done**. Focus on working with **array indexing**, **custom attributes**, and **updating the DOM on user actions**.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| Topic         | Add Delete & Complete buttons to each task                      |
| Duration      | 1.5–2 hours                                                     |
| Format        | Code-along, discussion, practice                                |
| Prerequisites | Class 9 (functional "Add Task" logic using arrays + DOM)        |
| Key Concepts  | `splice()`, `dataset`, `classList`, `event.target`, CSS toggles |
| Output        | Interactive, functional task list with delete + mark done       |

---

## 🛠️ **Live Demo: Add, Delete & Mark as Done**

Add these changes to the render function:

```js
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i].text;
    li.className = tasks[i].done ? "done" : "";

    // Complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔️";
    completeBtn.onclick = function () {
      tasks[i].done = !tasks[i].done;
      renderTasks();
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.onclick = function () {
      tasks.splice(i, 1);
      renderTasks();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}
```

Update add logic:

```js
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push({ text: taskText, done: false });
  input.value = "";
  renderTasks();
}
```

Add CSS:

```css
.done {
  text-decoration: line-through;
  opacity: 0.6;
}
button {
  margin-left: 5px;
}
```

---

## 📖 **Key Concepts Introduced**

| Concept            | Explanation                                     |
| ------------------ | ----------------------------------------------- |
| `splice(index, 1)` | Removes one item from an array                  |
| `object`           | Store `text` and `done` in each task            |
| `classList`        | Add/remove CSS classes dynamically              |
| `toggle`           | Flip a boolean or class for "mark done"         |
| Event handler      | Buttons inside a loop need closures or indexing |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Class 9 (10 min)

* Show the working "Add Task" code
* Ask: How do we display multiple tasks?

### 🔹 Step 2: Add “Done” Button (15 min)

* Show how to toggle `.done` on click
* Update CSS with `text-decoration: line-through;`

### 🔹 Step 3: Add “Delete” Button (15–20 min)

* Use `splice(i, 1)` to remove item
* Rerender after removal

### 🔹 Step 4: Convert to Object-Based Tasks (15–20 min)

* Replace string tasks with objects like: `{ text: "Learn JS", done: false }`

---

## 🧪 **In-Class Challenge**

> Add two more features:

* ✅ Button to "Clear All" tasks
* ✅ Add a footer that shows:
  “2 of 5 tasks completed”

**Example code:**

```js
let completed = tasks.filter(t => t.done).length;
footer.innerText = `${completed} of ${tasks.length} tasks completed`;
```

---

## 📝 **Homework / Extension Task**

* Style completed tasks with icons or emojis
* Show date/time added next to each task
* Animate task deletion or completion

---

## 🧠 **Secretly Learned**

| Concept          | Where It’s Used                         |
| ---------------- | --------------------------------------- |
| Object structure | `{ text, done }` for task info          |
| Boolean toggling | `done = !done`                          |
| Dynamic classing | `li.classList = "done"`                 |
| DOM update       | `appendChild`, `createElement`, buttons |
| Event-driven UI  | Handle user clicks to modify content    |

---