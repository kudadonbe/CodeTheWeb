# 🏫 **Code the Web – Class 15**

**Save Your Work with localStorage**

### 🎯 **Session Goal**

Students will enhance their To-Do App by adding **data persistence** using the browser’s `localStorage`. This introduces real-world app behavior: tasks don’t disappear after refresh.

Focus is on using the browser’s **built-in storage**, and understanding how to convert between **JavaScript objects** and **string format** using `JSON`.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| Topic         | Add persistence with `localStorage`                           |
| Duration      | 1.5–2 hours                                                   |
| Format        | Code-along with explanation and individual enhancement tasks  |
| Prerequisites | Class 9 (To-Do app logic and DOM rendering)                   |
| Key Concepts  | `localStorage`, `JSON.stringify()`, `JSON.parse()`, data flow |
| Output        | A persistent To-Do app that remembers tasks on page reload    |

---

## 💡 **What is localStorage?**

* Browser storage for saving **key–value pairs**
* Values must be **strings**
* Stored data remains **after refresh or browser restart**
* Accessible using:

  * `localStorage.setItem(key, value)`
  * `localStorage.getItem(key)`
  * `localStorage.removeItem(key)`

---

## 🛠️ **Code Example: Saving to Storage**

```js
localStorage.setItem("myTasks", JSON.stringify(tasks));
```

> Converts tasks array to string and saves it under a custom key.

---

## 🛠️ **Code Example: Loading from Storage**

```js
let saved = localStorage.getItem("myTasks");
if (saved) {
  tasks = JSON.parse(saved);
  renderTasks();
}
```

> Loads string from storage, parses it into an array, then displays it.

---

## 📖 **Key Concepts Introduced**

| Concept              | Description                                       |
| -------------------- | ------------------------------------------------- |
| `localStorage`       | Built-in browser storage system                   |
| `setItem`, `getItem` | Methods to save and retrieve values               |
| `JSON.stringify()`   | Converts array → string for storage               |
| `JSON.parse()`       | Converts string → array for use                   |
| `removeItem()`       | Clears saved data (used for reset or “Clear All”) |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap the To-Do App (10 min)

* Review how tasks are added and rendered
* Ask: What happens when you refresh the page?

---

### 🔹 Step 2: Introduce `localStorage` (15 min)

* Explain that data only lives in memory unless saved
* Show how to stringify and save data manually in DevTools Console
* Highlight `.setItem()` and `.getItem()`

---

### 🔹 Step 3: Add Save Functionality (15–20 min)

* Modify `addTask()` and `deleteTask()` to call `saveTasks()`
* Implement `saveTasks()` that uses `localStorage.setItem()`

---

### 🔹 Step 4: Load Saved Tasks (15 min)

* At the bottom of the script, check for saved data:

  ```js
  let saved = localStorage.getItem("myTasks");
  if (saved) {
    tasks = JSON.parse(saved);
    renderTasks();
  }
  ```

* Discuss what happens when no data exists yet

---

### 🔹 Step 5: Bonus – “Clear All” Button (10 min)

* Add a new button to the UI:

  ```html
  <button onclick="clearAll()">Clear All</button>
  ```

* Implement function:

  ```js
  function clearAll() {
    tasks = [];
    localStorage.removeItem("myTasks");
    renderTasks();
  }
  ```

---

## 🧪 **In-Class Challenge**

> 🎯 Enhance your app with full memory support:

* Make the app remember tasks after refresh
* Add a “Clear All” button
* Check your storage in DevTools → Application → localStorage
* Bonus: Save and show task count too

---

## 📝 **Homework / Extension Task**

* Add a timestamp to each task
* Try saving multiple To-Do lists (e.g., work vs personal) under different keys
* Use a simple `<select>` to switch between lists
* Add minimal CSS to distinguish loaded vs newly added items

---

## 🧠 **Secretly Learned**

| Concept          | Where It’s Used                           |
| ---------------- | ----------------------------------------- |
| Data persistence | `localStorage.setItem()` and `.getItem()` |
| Serialization    | `JSON.stringify()` / `JSON.parse()`       |
| Frontend storage | App saves data without a server           |
| UX improvement   | App feels more “real” with memory         |
