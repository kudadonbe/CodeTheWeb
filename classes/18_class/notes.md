# 📒 Student Notes – Class 18: Build a CRUD App with `json-server`

---

## 🎯 Goal of Today’s Class

* Create a real working To-Do App
* Connect your JavaScript to a **backend** using `json-server`
* Learn how to **Create**, **Read**, **Update**, and **Delete** (CRUD)

---

## 🧩 What is `json-server`?

* A simple tool to simulate a backend using a local `.json` file.
* Acts like a real REST API: you can **fetch**, **add**, **delete**, or **update** data.

---

## 🔧 Setup

**Install once (global):**

```bash
npm install -g json-server
```

**Create `db.json`:**

```json
{
  "tasks": [
    { "id": 1, "text": "Learn JS", "done": false }
  ]
}
```

**Start the server:**

```bash
json-server --watch db.json
```

Visit: [http://localhost:3000/tasks](http://localhost:3000/tasks)

---

## 📬 CRUD with `fetch()`

| Action | Method | Example                            |
| ------ | ------ | ---------------------------------- |
| Create | POST   | `fetch(..., { method: "POST" })`   |
| Read   | GET    | `fetch(...)`                       |
| Update | PATCH  | `fetch(..., { method: "PATCH" })`  |
| Delete | DELETE | `fetch(..., { method: "DELETE" })` |

---

## ✨ Example – Add a Task (POST)

```js
fetch("http://localhost:3000/tasks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ text: "New Task", done: false })
})
```

---

## ✨ Example – Get All Tasks (GET)

```js
fetch("http://localhost:3000/tasks")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## ✨ Example – Delete a Task (DELETE)

```js
fetch("http://localhost:3000/tasks/1", {
  method: "DELETE"
});
```

---

## ✨ Example – Toggle Done (PATCH)

```js
fetch("http://localhost:3000/tasks/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ done: true })
});
```

---

## 💡 Tips

* Use `JSON.stringify()` to send data
* Always set `Content-Type` to `"application/json"`
* Refresh your list after every change

---

## 🧪 Challenges

1. Add a **"Clear All Tasks"** button
2. Show number of completed tasks
3. Display time of creation
4. Add another resource like `notes`, `contacts`, or `projects`

---

## 📝 Homework

* Build a Contact Manager with name, phone, and email
* Try editing a task text using `PATCH`
* Add a timestamp to each task and show it in the UI
