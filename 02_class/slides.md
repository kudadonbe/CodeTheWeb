---
marp: true
theme: uncover
class: invert
paginate: true
---

# 🏫 Code the Web – Class 2  
## Buttons + JavaScript

> 🎯 Make your web pages respond when clicked  
> 🖱️ Add interaction with buttons and functions  
> ✨ Edit your Welcome Card with real code!

---

## 🎯 What You'll Learn Today

- Use **JavaScript** to control your page  
- Write a function that runs on a button click  
- Update the **text** on the screen dynamically  
- Extend your Welcome Card from Class 1

---

## 🧑‍🏫 Today’s Focus

| Section        | Description                        |
| -------------- | ---------------------------------- |
| **Topic**      | Add interactivity using JavaScript |
| **Duration**   | 1.5–2 hours                        |
| **Outcome**    | Button changes name/message        |
| **Start With** | The `index.html` from Class 1      |

---

## 📖 JavaScript Concepts for Today

| Concept            | Description                              |
| ------------------ | ---------------------------------------- |
| `function`         | Block of reusable code                   |
| `let`              | Stores a value                           |
| `onclick`          | Runs code when clicked                   |
| `getElementById()` | Finds an element in HTML                 |
| `innerText`        | Changes the visible text                 |

---

## 🔁 From Class 1

Ask the class:

- What was in your **Welcome Card**?
- What HTML tags did you use? (`<h1>`, `<p>`, `<img>`...)

Remind them:

- You built a **static page**  
- Today it becomes **interactive** 🔄

---

## 💡 What Is JavaScript?

- It controls how your webpage **behaves**
- You write it inside `<script>...</script>`
- Example:

```js
console.log("Hello!");
alert("Welcome!");
````

> JS helps us talk to the page and make changes

---

## 🛠️ Greeting Button Demo

```html
<h2 id="name">Your Name</h2>
<button onclick="changeGreeting()">Click Me!</button>

<script>
function changeGreeting() {
  let name = "Husen";
  document.getElementById("name").innerText = "Hello, " + name + "!";
}
</script>
```

✅ Button updates the text with JavaScript!

---

## 💻 Your Turn!

Build it yourself:

* Add a **button**
* Write a **function**
* Use `getElementById()` and `innerText` to change:

  * Name
  * Greeting
  * Any element

---

## 🧪 Mini Challenge: Two Buttons

Make 2 buttons:

1. Change the **name**
2. Change the **bio/message**

```html
<p id="bio">I love building the web!</p>
<button onclick="changeBio()">Change Bio</button>
```

```js
function changeBio() {
  document.getElementById("bio").innerText = "I'm learning to code!";
}
```

---

## 📝 Practice Ideas (Homework)

* Add more buttons with different actions
* Use `prompt()` to ask for a name:

```js
let name = prompt("What is your name?");
let greeting = "Welcome, " + name + "!";
```

* Update the greeting using the input!

---

## 🧠 What You Picked Up

| Concept          | Where You Used It                  |
| ---------------- | ---------------------------------- |
| Variables        | `let name = "Husen"`               |
| Strings          | `"Hello, " + name`                 |
| DOM Manipulation | `getElementById().innerText = ...` |
| Events           | `onclick` to trigger actions       |
| Functions        | `function changeGreeting() {}`     |

---

## ✅ You Can Now\...

* ✅ Write basic JavaScript functions
* ✅ Make buttons that change content
* ✅ Use **IDs** to target HTML
* ✅ Make your Welcome Card **interactive**

> 🎉 You’ve added behavior to your webpage!

