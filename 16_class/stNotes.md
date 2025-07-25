# 🧾 Code the Web – Class 16

## Save Tasks with IndexedDB

---

### 🎯 Goal of This Class

Today you will:

✅ Learn what **IndexedDB** is
✅ Use it to **store your tasks** (objects, not just strings)
✅ Load tasks from the database
✅ Build a smarter, memory-powered To-Do App

---

## 🧠 What is IndexedDB?

* A **browser database**
* Stores **full objects** (like `{ text: "Hello" }`)
* Saves your data even after the tab closes
* More advanced than `localStorage`

---

## 🛠 How to Use It

### Step 1 – Open or create the DB

```js
let request = indexedDB.open("todoDB", 1);
```

### Step 2 – Create a store the first time

```js
request.onupgradeneeded = function (e) {
  let db = e.target.result;
  db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
};
```

---

### Step 3 – When DB is ready

```js
request.onsuccess = function (e) {
  db = e.target.result;
  console.log("DB ready!");
};
```

---

## ✍️ Add a Task

```js
function addTask(text) {
  let tx = db.transaction("tasks", "readwrite");
  let store = tx.objectStore("tasks");
  store.add({ text: text });
}
```

🧠 This stores an object like `{ text: "Buy milk" }`

---

## 👀 Show All Tasks

```js
function showTasks() {
  let tx = db.transaction("tasks", "readonly");
  let store = tx.objectStore("tasks");
  let request = store.openCursor();

  request.onsuccess = function (e) {
    let cursor = e.target.result;
    if (cursor) {
      console.log(cursor.value.text);
      cursor.continue();
    }
  };
}
```

---

## 🧪 In-Class Challenge

✅ Add an input field
✅ Add a button to call `addTask()`
✅ Add a button to run `showTasks()`
✅ Bonus: Show tasks in a list (`<ul>`) instead of console

---

## 🔑 Concepts to Remember

| Concept         | Meaning                                  |
| --------------- | ---------------------------------------- |
| IndexedDB       | A built-in browser database              |
| `objectStore`   | A table where we store our data          |
| `transaction()` | A safe way to write or read              |
| `openCursor()`  | Lets us loop through stored items        |
| `text` field    | We can name and access object properties |

---

## 🏠 Homework

1. Show tasks in the UI instead of console
2. Try deleting or clearing all data
3. Add another field like `done: false` and save it too
4. Use Dev Tools → Application tab → IndexedDB to explore

---

## ✅ You Can Now\...

✔ Save full objects in the browser
✔ Build a real app with memory
✔ Use `transactions`, `objectStore`, and `openCursor()`
✔ Go beyond localStorage!

---