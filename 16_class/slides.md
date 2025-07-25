---

marp: true
theme: uncover
class: invert
paginate: true

---

# 🏫 Code the Web – Class 16

## Smarter Storage with IndexedDB

> 🗃️ Store complex data in the browser
> 🧠 Go beyond localStorage
> 💾 Save objects, not just strings!

---

## 🎯 What You’ll Learn Today

* What IndexedDB is and **why we need it**
* How to open and use an IndexedDB database
* How to **add, get, and list** data
* Compare it with localStorage

---

## 🧑‍🏫 Class Format

| Section      | Description                           |
| ------------ | ------------------------------------- |
| **Topic**    | Intro to IndexedDB                    |
| **Duration** | 1.5–2 hours                           |
| **Output**   | Demo: Store and list tasks from DB    |
| **Skills**   | DB setup, transactions, object stores |

---

## 💡 What is IndexedDB?

* A **built-in browser database**
* Stores **structured data** (objects, arrays, etc.)
* Works **asynchronously**
* More powerful than `localStorage`

---

## 🧠 Why Not Just Use localStorage?

| localStorage            | IndexedDB                      |
| ----------------------- | ------------------------------ |
| Strings only            | Full objects and arrays        |
| Simple `set/get`        | Structured queries and indexes |
| Limited size (\~5MB)    | Larger capacity                |
| Synchronous (can block) | Asynchronous (non-blocking)    |

---

## 🛠️ Setup Example (Part 1)

```js
let db;
let request = indexedDB.open("todoDB", 1);

request.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
};
```

> Creates a DB with a `tasks` store

---

## 🛠️ Setup Example (Part 2)

```js
request.onsuccess = function (e) {
  db = e.target.result;
  console.log("DB ready!");
};

request.onerror = function (e) {
  console.error("DB failed", e);
};
```

✅ Now your database is open and ready

---

## 📝 Add a Task to IndexedDB

```js
function addTask(text) {
  let tx = db.transaction("tasks", "readwrite");
  let store = tx.objectStore("tasks");
  store.add({ text: text });
}
```

> Adds a new object with a `text` property

---

## 📋 Show All Tasks

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

## 🧪 Challenge – Basic App Flow

1. Open your IndexedDB
2. Add tasks from an input field
3. Show tasks in the browser (console or list)
4. Optional: Add delete or clear functionality

---

## 📖 Key Concepts Introduced

| Concept             | Description                            |
| ------------------- | -------------------------------------- |
| `indexedDB.open()`  | Open or create a database              |
| `onupgradeneeded`   | Runs when DB is new or version changes |
| `transaction()`     | Used to read or write safely           |
| `objectStore.add()` | Insert an object                       |
| `openCursor()`      | Read all records one by one            |

---

## 🔍 IndexedDB vs. localStorage

| Feature     | localStorage     | IndexedDB          |
| ----------- | ---------------- | ------------------ |
| Data type   | String only      | Structured objects |
| Performance | Blocks UI        | Async, smooth      |
| Complexity  | Simple           | Medium             |
| Use case    | Settings, tokens | Apps, task lists   |

---

## 📝 Homework / Extension

* Build a simple UI that:

  * Adds tasks using `addTask()`
  * Shows tasks using `showTasks()`
* Bonus:

  * Add “Delete All” button
  * Track timestamps or completion status

---

## 🧠 What You Picked Up

| Concept          | Where It Was Used              |
| ---------------- | ------------------------------ |
| IndexedDB basics | `open()`, `objectStore`, `add` |
| Transactions     | To safely read/write           |
| Cursor iteration | To loop through results        |
| Data structure   | Objects stored directly        |

---

## ✅ You Can Now\...

* Open and use IndexedDB
* Store structured data in the browser
* Replace or upgrade localStorage
* Build browser apps that scale with your needs