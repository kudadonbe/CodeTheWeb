# 🏫 **Code the Web – Class 17: Fetch & JSON APIs**

### 🎯 **Session Goal**

Students will learn to fetch external JSON data and display it dynamically using JavaScript and the DOM. This is their first step into using APIs and connecting web pages with real data.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                              |
| ------------- | ---------------------------------------- |
| Topic         | `fetch()`, JSON, and DOM display         |
| Duration      | 1.5–2 hours                              |
| Format        | Concept intro → live demo → student task |
| Prerequisites | Arrays, functions, DOM methods           |
| Output        | A live web page that shows fetched data  |

---

## 📚 **Key Concepts to Introduce**

| Concept          | Explanation                                          |
| ---------------- | ---------------------------------------------------- |
| `fetch()`        | Load data from a URL or local file (returns Promise) |
| `.then()`        | Handle the Promise after fetch completes             |
| `res.json()`     | Convert raw response into usable data                |
| JSON             | Text format for storing objects & arrays             |
| `.appendChild()` | Add HTML elements to the page                        |
| `async/await`    | Cleaner way to write fetch-based logic (bonus)       |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap (10 min)

* Ask: “What is JSON? Have we seen it before in any project?”
* Quick example: show a JS object and then its JSON string version
* Remind: `JSON.stringify()` & `JSON.parse()` from Class 15 (localStorage)

---

### 🔹 Step 2: Intro to `fetch()` (10–15 min)

* Write basic `fetch("file.json").then(...)` in front of students
* Show response in `console.log()`
* Talk about `.json()` as a method to *parse* the response

---

### 🔹 Step 3: Show Data on Page (15–20 min)

* Load student data and display names in a list
* DOM update using `.createElement()` and `.appendChild()`
* Add this inside `.then(data => { ... })`

```js
students.forEach(s => {
  let li = document.createElement("li");
  li.innerText = `${s.name} (${s.age})`;
  list.appendChild(li);
});
```

---

### 🔹 Step 4: Use Real API (Optional, 10–15 min)

* Demo: `jsonplaceholder.typicode.com/users`
* Load and log results
* Ask: “What else can we show here?”

---

### 🔹 Step 5: Introduce `async/await` (Optional)

* Rewrite the earlier fetch logic using `async function`
* Explain how `await` pauses until data is ready

---

## 🧪 **In-Class Challenge**

Ask students to:

* Load `students.json` and show names in a list
* Add another field (age, email, or city) to display
* Bonus: Add a header or count: “We found 5 students”

---

## 📝 **Homework / Extension Task**

* Build your own `data.json` file with 3+ entries
* Fetch and show this new data on the page
* (Optional) Add a **filter** or **sort** button

---

## 🧠 **Secretly Learned**

| Concept          | Where It Appears                        |
| ---------------- | --------------------------------------- |
| Asynchronous JS  | `.then()` and `async/await`             |
| JSON structure   | External data format in `.json` files   |
| DOM logic        | Dynamically generating elements with JS |
| Data flow        | Separating data from display logic      |
| Beginner API use | Real fetch from internet-based endpoint |
