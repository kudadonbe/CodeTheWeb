---

marp: true
theme: uncover
class: invert
paginate: true

---

# 🏫 Code the Web – Class 15

## Save Your Work with localStorage

> 💾 Make your data stay after refresh
> 🧠 Learn how browsers store strings
> ✅ Give your To-Do App memory!

---

## 🎯 What You’ll Do Today

* Learn what `localStorage` is
* Save the tasks array to storage
* Load saved tasks when the page starts
* Update saved data when tasks change

---

## 🧑‍🏫 Class Format

| Section      | Description                        |
| ------------ | ---------------------------------- |
| **Topic**    | Browser storage using localStorage |
| **Duration** | 1.5 hours                          |
| **Output**   | To-Do App that remembers tasks     |
| **Skills**   | `JSON.stringify()`, `JSON.parse()` |

---

## 💡 What Is localStorage?

* A **built-in browser storage** system
* Stores only **strings** — not arrays or objects
* Data stays even after you close the browser
* Perfect for things like **task lists**, **themes**, or **user settings**

---

## 🧪 Saving to Storage

```js
localStorage.setItem("myTasks", JSON.stringify(tasks));
```

✅ Converts array → string
✅ Stores under the key `"myTasks"`

---

## 🔍 Loading from Storage

```js
let saved = localStorage.getItem("myTasks");
if (saved) {
  tasks = JSON.parse(saved);
  renderTasks();
}
```

✅ Retrieves and converts string → array
✅ Only runs if there’s saved data

---

## 🔁 Update After Change

Inside `addTask()` or `deleteTask()`:

```js
localStorage.setItem("myTasks", JSON.stringify(tasks));
```

💡 Always update storage after you **change** the data

---

## 🔐 Pro Tip: Check with Dev Tools

* Open your browser Dev Tools
* Go to the **Application** tab
* Look for the **localStorage** section
* View your data in real time!

---

## 🛠 Update To-Do App (Part 1)

Add this at the end of `addTask()`:

```js
localStorage.setItem("myTasks", JSON.stringify(tasks));
```

And in `deleteTask()` too!

---

## 🛠 Update To-Do App (Part 2)

Add this at the very bottom of your script:

```js
let saved = localStorage.getItem("myTasks");
if (saved) {
  tasks = JSON.parse(saved);
  renderTasks();
}
```

This makes your app **load saved tasks on startup**.

---

## ✅ In-Class Challenge

* Add localStorage saving to your To-Do App
* Test it: Add tasks → refresh → see if they stay
* Try deleting, refreshing — does it remember?

---

## 🧠 What You Picked Up

| Concept            | Use                            |
| ------------------ | ------------------------------ |
| `localStorage`     | Save data across sessions      |
| `JSON.stringify()` | Convert array → string         |
| `JSON.parse()`     | Convert string → array         |
| App enhancement    | Your To-Do App now has memory! |

---

## 📝 Homework / Extension

* Add a "Clear All" button that also clears storage:

```js
localStorage.removeItem("myTasks");
```

* Try saving other settings (like theme or username)
* Add a timestamp next to each task (and save it too)

---

## ✅ You Can Now\...

* Save data to the browser
* Make your app persist between visits
* Use JSON to convert arrays and objects
* Build web apps that feel more real!
