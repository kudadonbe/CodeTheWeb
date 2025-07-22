---

marp: true
theme: uncover
class: invert
paginate: true
--------------

# 🏫 Code the Web – Class 10

## Finishing the To-Do App: Delete & Mark Done

> 🎯 Complete your app with interactivity
> ✅ Mark tasks as done
> ❌ Delete tasks from your list

---

## 🎯 What You’ll Accomplish Today

* Add **✔️ mark as done** feature
* Add **❌ delete** feature
* Learn about arrays, objects, and DOM updates
* Make a fully working **interactive task list**

---

## 🧑‍🏫 Today’s Focus

| Section         | Description                            |
| --------------- | -------------------------------------- |
| **Topic**       | Buttons for mark-done and delete       |
| **Duration**    | 1.5–2 hours                            |
| **Output**      | Interactive task list                  |
| **Review From** | Class 9: Add Task logic, `push()`, DOM |

---

## 📖 Concepts Introduced

| Concept        | Explanation                          |
| -------------- | ------------------------------------ |
| `splice(i, 1)` | Remove item from array               |
| Object         | Store task with `{ text, done }`     |
| `classList`    | Add/remove visual styles dynamically |
| Toggle         | Flip between `true` and `false`      |
| `event.target` | Reference clicked element            |

---

## 🔁 What We Have So Far

* A layout built in Class 8
* Functional **Add Task** logic from Class 9
* We can **type and display tasks**
* What’s missing? ❌ ✅

---

## 🧱 Task as an Object

Old version:

```js
tasks.push("Learn JS");
```

New version:

```js
tasks.push({ text: "Learn JS", done: false });
```

✅ Easier to store more info
✅ Needed to track completion status

---

## 🧠 Modified addTask()

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

---

## 🛠️ Display Tasks – Part 1

```js
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i].text;
    li.className = tasks[i].done ? "done" : "";
```

---

## 🛠️ Display Tasks – Part 2

```js
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔️";
    completeBtn.onclick = function () {
      tasks[i].done = !tasks[i].done;
      renderTasks();
    };

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

---

## 🎨 Style Completed Tasks

```css
.done {
  text-decoration: line-through;
  opacity: 0.6;
}
button {
  margin-left: 5px;
}
```

💡 Visual feedback matters!

---

## 🧪 Build This Together

✅ Add “Clear All” button
✅ Add footer: `X of Y tasks completed`

```js
let completed = tasks.filter(t => t.done).length;
footer.innerText = `${completed} of ${tasks.length} tasks completed`;
```

---

## 📝 Try at Home

* Add emojis or icons to completed tasks
* Show **date/time** when task was added
* Add animation on delete or mark done
* Optional: Create a `todoApp` object to group all methods

---

## 🧠 Concepts You’ve Used

| Concept            | Where It’s Used                    |
| ------------------ | ---------------------------------- |
| Objects            | `{ text, done }`                   |
| Boolean toggling   | `task.done = !task.done`           |
| Dynamic classing   | `li.classList = "done"`            |
| DOM updates        | `appendChild()`, `createElement()` |
| Event-driven logic | `onclick` functions for buttons    |

---

## ✅ You Can Now\...

* Add, delete, and mark tasks as done
* Use arrays of **objects** for better data control
* Handle **events** to modify your app live
* You’ve built a **real, dynamic app** from scratch!
