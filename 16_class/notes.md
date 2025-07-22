# 🏫 **Code the Web – Class 16**

**Smarter Storage with IndexedDB**

---

### 🎯 **Session Goal**

Students will learn how to use **IndexedDB** to store structured data like objects and arrays. Unlike `localStorage`, this enables real database-like storage inside the browser — ideal for real apps.

This class introduces:

* The structure of a browser database
* Reading/writing objects
* How to open, update, and iterate with **IndexedDB**

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                              |
| ------------- | -------------------------------------------------------- |
| Topic         | IndexedDB: storing and reading objects in the browser    |
| Duration      | 1.5–2 hours                                              |
| Format        | Explanation → Live coding → IndexedDB demo               |
| Prerequisites | Class 15 (localStorage basics), working To-Do project    |
| Key Concepts  | `indexedDB.open()`, transactions, object stores, cursors |
| Output        | Browser-based task store using IndexedDB                 |

---

## 🧠 **Why IndexedDB?**

| localStorage         | IndexedDB                               |
| -------------------- | --------------------------------------- |
| Stores only strings  | Stores full objects/arrays              |
| Synchronous/blocking | Asynchronous, doesn't freeze UI         |
| Good for settings    | Good for apps, lists, multiple items    |
| 5MB max (approx)     | More space allowed (depends on browser) |

---

## 🛠️ **Example: Open/Create a DB**

```js
let request = indexedDB.open("todoDB", 1);

request.onupgradeneeded = function (e) {
  let db = e.target.result;
  db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
};
```

> The `onupgradeneeded` block only runs the first time or on version change.

---

## 🔄 **onSuccess & Error**

```js
request.onsuccess = function (e) {
  db = e.target.result;
  console.log("DB opened");
};

request.onerror = function () {
  console.error("Something went wrong");
};
```

---

## 📝 **Add a Task**

```js
function addTask(text) {
  let tx = db.transaction("tasks", "readwrite");
  let store = tx.objectStore("tasks");
  store.add({ text: text });
}
```

> This stores a new object with a `text` field into the database.

---

## 📋 **Read All Tasks**

```js
function showTasks() {
  let tx = db.transaction("tasks", "readonly");
  let store = tx.objectStore("tasks");
  let req = store.openCursor();

  req.onsuccess = function (e) {
    let cursor = e.target.result;
    if (cursor) {
      console.log(cursor.value.text);
      cursor.continue();
    }
  };
}
```

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap localStorage vs. IndexedDB (5–10 min)

* Ask: What were localStorage’s limits?
* Introduce the idea of storing full tasks as **objects**

### 🔹 Step 2: Live Demo: Setup DB + Add Task (20–25 min)

* Use `indexedDB.open()` with `onupgradeneeded`
* Show how `objectStore.add()` works

### 🔹 Step 3: Displaying Data (15–20 min)

* Introduce `openCursor()` and `console.log()` each task
* Encourage students to list it in a `<ul>`

### 🔹 Step 4: Group Work / Enhancement (30 min)

* Add input field to save real tasks
* Optional: Add delete/clear features

---

## 🧪 **In-Class Challenge**

> Build a basic IndexedDB-powered To-Do viewer

* Input → add task
* Button → list all tasks
* Bonus: Add completion status or timestamp

---

## 📝 **Homework / Extension Tasks**

* Show tasks in the DOM, not just console
* Add “Clear All” button
* Track whether a task is complete
* Allow renaming the database (e.g. `todoDB`, `notesDB`)

---

## 📖 **Key Concepts Introduced**

| Concept             | Use Case                       |
| ------------------- | ------------------------------ |
| `indexedDB.open()`  | Create or open a browser DB    |
| `onupgradeneeded`   | Set up tables (object stores)  |
| `transaction()`     | Safe read/write to DB          |
| `objectStore.add()` | Insert object                  |
| `openCursor()`      | Loop through all saved entries |

---

## 🧠 **Secretly Learned**

| Concept           | Example                                      |
| ----------------- | -------------------------------------------- |
| Async programming | All IndexedDB code uses `onsuccess` handlers |
| Real-world DB     | Browser DBs follow key/value structure       |
| JSON object use   | Store and access objects directly            |
| UI <-> DB flow    | Sync input fields with DB entries            |
