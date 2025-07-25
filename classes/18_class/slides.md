---

marp: true
theme: uncover
class: invert
paginate: true
--------------

# 🏫 Code the Web – Class 18

## Full CRUD App with `json-server`

> 🎯 Use `json-server` to simulate a real backend
> ✏️ Add, display, edit, and delete items
> 🔄 Practice full Create, Read, Update, Delete operations

---

## 🎯 Goal of Today’s Class

* Run a local server using `json-server`
* Connect it using `fetch()`
* Implement full CRUD:

  * ✅ Create
  * 👁️ Read
  * ✏️ Update
  * ❌ Delete

---

## 🧑‍🏫 What You’ll Build

| Feature     | Description                   |
| ----------- | ----------------------------- |
| Add Task    | POST new task to server       |
| View Tasks  | GET all tasks from server     |
| Edit Task   | PATCH or PUT to update a task |
| Delete Task | DELETE task from server       |

---

## 🧰 What You Need Installed

```bash
npm install -g json-server
```

Start with:

```bash
json-server --watch db.json
```

✅ Opens at: `http://localhost:3000/tasks`

---

## 🗂 Sample `db.json`

```json
{
  "tasks": [
    { "id": 1, "text": "Learn JS", "done": false },
    { "id": 2, "text": "Practice fetch()", "done": true }
  ]
}
```

> You can edit it manually or let the app update it

---

## ✅ POST – Add New Task

```js
fetch("http://localhost:3000/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: "New Task", done: false })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## 📥 GET – Show Tasks

```js
fetch("http://localhost:3000/tasks")
  .then(res => res.json())
  .then(tasks => {
    // Loop and show
  });
```

---

## 📝 PATCH – Mark as Done

```js
fetch("http://localhost:3000/tasks/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ done: true })
});
```

---

## ❌ DELETE – Remove Task

```js
fetch("http://localhost:3000/tasks/2", {
  method: "DELETE"
});
```

---

## 🧪 In-Class Project

🎯 Build a Mini Task Manager:

* Add tasks to server
* Show all tasks in a list
* Allow delete & toggle done
* Bonus: Edit task text inline

---

## 📝 Homework / Extension

* Add an “Edit” button
* Display creation time (use `Date.now()` or `new Date()`)
* Save other data types (notes, books, contacts, etc.)
* Try a second resource in `db.json` (like `"users"`)

---

## 🧠 What You Learned

| Concept      | Example Used                  |
| ------------ | ----------------------------- |
| Fake Backend | `json-server --watch db.json` |
| POST         | Add new task                  |
| GET          | Show all tasks                |
| PATCH        | Mark task as done             |
| DELETE       | Remove task                   |

---

## ✅ You Can Now\...

* Run your own local API with `json-server`
* Use all 4 CRUD methods in real JS apps
* Handle JSON data dynamically
* Build complete apps that **talk to a backend**
