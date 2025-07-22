---

marp: true
theme: uncover
class: invert
paginate: true

---

# 🏫 Code the Web – Class 17

## Fetch & Use JSON Data from APIs

> 🌐 Learn how to load real data
> 📦 Work with JSON from an API
> 🧠 Display info on your own website!

---

## 🎯 What You’ll Learn Today

* What is `fetch()` and how it works
* How to read **JSON** from an API
* How to display data on your page
* Practice using a fake API or JSON file

---

## 🧑‍🏫 Class Format

| Section      | Description                               |
| ------------ | ----------------------------------------- |
| **Topic**    | Fetching JSON + rendering data            |
| **Duration** | 1.5–2 hours                               |
| **Output**   | Simple data viewer (e.g., users or posts) |
| **Skills**   | `fetch()`, `.then()`, JSON, DOM update    |

---

## 🌐 What Is `fetch()`?

* A built-in browser function to **get data from a URL**
* Works with **APIs**, **JSON files**, and online services
* Returns a **Promise** → use `.then()` or `await`

---

## 🧪 Example 1 – Fetch a JSON File

```js
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
```

✅ The file must be served in the same folder (or via server)

---

## 📦 Sample JSON

```json
[
  { "name": "Ali", "age": 17 },
  { "name": "Laila", "age": 18 }
]
```

You can save this as `students.json` and load it with fetch.

---

## 🧪 Example 2 – Use Data in HTML

```js
fetch("students.json")
  .then(res => res.json())
  .then(students => {
    let list = document.getElementById("output");
    students.forEach(s => {
      let li = document.createElement("li");
      li.innerText = `${s.name} (${s.age})`;
      list.appendChild(li);
    });
  });
```

---

## 📖 Key Concepts Introduced

| Concept    | Description                             |
| ---------- | --------------------------------------- |
| `fetch()`  | Loads data from a URL                   |
| `.then()`  | Handles the result asynchronously       |
| `.json()`  | Converts response to usable JavaScript  |
| JSON       | Data format with `{ key: value }` pairs |
| DOM update | Display values using `.appendChild()`   |

---

## 🧠 What is JSON?

* **JavaScript Object Notation**
* Looks like an object, but in a **text file**
* Use `JSON.parse()` to read it
* Use `JSON.stringify()` to save it

---

## ⚡ Real API Example (optional)

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    users.forEach(user => console.log(user.name));
  });
```

You can also try `/posts`, `/comments`, etc.

---

## 🔁 Bonus – Using `async/await`

```js
async function loadUsers() {
  let res = await fetch("students.json");
  let data = await res.json();
  console.log(data);
}
```

Works the same, just cleaner in some apps.

---

## 🧪 Challenge

* Load a list of items from a `.json` file or test API
* Show the data in a `<ul>`
* Bonus: Show more fields (age, email, etc.)

---

## 📝 Homework / Extension

* Create your own `data.json` file
* Load data and show it in the DOM
* Try using **buttons** to filter or sort
* Try using `fetch()` with:

  * `https://jsonplaceholder.typicode.com/users`
  * Your own hosted file

---

## 🧠 What You Picked Up

| Concept        | Where Used                    |
| -------------- | ----------------------------- |
| `fetch()`      | To load from URL or file      |
| `.then()`      | Promise chaining              |
| `res.json()`   | Convert fetch result to data  |
| JSON structure | Read and loop through objects |
| DOM update     | Add content to the page       |

---

## ✅ You Can Now\...

* Use `fetch()` to load data
* Display JSON info on your site
* Build dynamic, data-driven pages
* Prepare for real-world APIs and backend work!