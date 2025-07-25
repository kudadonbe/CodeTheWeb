# 🧑‍🏫 Teacher Guide – Class 18: Full CRUD App with `json-server`

---

## 🎯 Class Summary

Today’s lesson introduces students to full-stack simulation by using `json-server` as a local backend API. Students will practice all CRUD operations — Create, Read, Update, Delete — through the `fetch()` API and connect JavaScript to a fake server.

---

## 🛠️ Setup Before Class

1. **Install json-server globally**:

```bash
npm install -g json-server
```

2. **Create a `db.json` file**:

```json
{
  "tasks": [
    { "id": 1, "text": "Learn JS", "done": false }
  ]
}
```

3. **Start server**:

```bash
json-server --watch db.json
```

4. The API will now be available at:

* `GET`/`POST`: `http://localhost:3000/tasks`
* Individual task: `http://localhost:3000/tasks/1`

---

## 📚 Teaching Flow

### 🔹 1. Introduction (5–10 min)

* What is a CRUD app?
* How real websites communicate with a server.
* Explain what `json-server` simulates.

### 🔹 2. Set Up Local Server (10 min)

* Walk through installing and running `json-server`.
* Show the running server in the browser.

### 🔹 3. Create UI (HTML + JS Template)

* A form with a textbox and “Add Task” button.
* An empty list area for rendering tasks.
* Prepare basic styles.

### 🔹 4. Implement POST (15 min)

* Teach how to send a `POST` request with `fetch()`.
* Use `JSON.stringify()` to send new task data.
* On success, re-fetch task list.

### 🔹 5. Implement GET (10 min)

* On page load, fetch all tasks and render in UI.
* Build a `renderTasks()` function.

### 🔹 6. Implement DELETE + PATCH (20–25 min)

* Add delete button → use `fetch(..., { method: "DELETE" })`.
* Add done-toggle button → use `PATCH` to change `done` field.
* Re-render list after each action.

### 🔹 7. Test & Debug (10–15 min)

* Delete all tasks, try invalid inputs.
* Try editing `db.json` manually and seeing UI updates.

---

## 🔁 Key Concepts Recap

| Concept       | Action                           |
| ------------- | -------------------------------- |
| `fetch()`     | API call                         |
| `POST`        | Add task                         |
| `GET`         | Fetch all tasks                  |
| `PATCH`       | Toggle task done status          |
| `DELETE`      | Remove task                      |
| `json-server` | Fake REST API using a local file |

---

## 💡 Pro Tips

* Encourage use of `console.log()` after each step to debug.
* Let students use `id` from the server’s response instead of manual ID creation.
* Emphasize `Content-Type: application/json` in headers for POST/PATCH.

---

## 🧪 Mini Challenge Ideas

* Display total task count and completed count.
* Allow inline editing of task text using `PUT` or `PATCH`.
* Show time of creation using `Date.now()` in task object.

---

## 📝 Homework

* Add a second resource like `users`, `books`, or `notes`.
* Build a mini contact manager with `name`, `phone`, `email`.
* Save timestamp with each task and show it on screen.

---

## ✅ Exit Goals

By the end of this class, students should be able to:

* Set up and run `json-server`
* Perform CRUD operations via `fetch()`
* Build a working to-do app with real data storage simulation