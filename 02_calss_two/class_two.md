# 🏫 **Code the Web – Class 2: Buttons + JavaScript**

### 🎯 **Session Goal**

Learn how to add interactivity to a webpage using **JavaScript functions**, **onclick events**, and **DOM manipulation**. Students will modify their Welcome Card from Class 1.

---

## 🧑‍🏫 **Class Overview**

| Section         | Description                                           |
| --------------- | ----------------------------------------------------- |
| Topic           | Add interaction with JavaScript                       |
| Duration        | 1.5–2 hours                                           |
| Format          | Live demo + hands-on coding                           |
| Prior Knowledge | HTML and CSS (from Class 1)                           |
| Key Concepts    | `onclick`, `innerText`, `getElementById()`, functions |
| Outcome         | Button changes name/message on click                  |
| Files Used      | `index.html` (continue from previous session)         |

---

## 🛠️ **Live Demo Code**

Use this to demonstrate JavaScript behavior:

```html
<button onclick="changeGreeting()">Click Me!</button>

<script>
  function changeGreeting() {
    let name = "Husen";
    document.getElementById("name").innerText = "Hello, " + name + "!";
  }
</script>
```

HTML element being changed:

```html
<h2 id="name">Your Name</h2>
```

---

## 📖 **Key JavaScript Concepts**

| Concept            | Explanation                          |
| ------------------ | ------------------------------------ |
| `function`         | A reusable block of code             |
| `let`              | Declares a variable                  |
| `onclick`          | Runs code when an element is clicked |
| `getElementById()` | Finds an element using its `id`      |
| `innerText`        | Updates the content of an element    |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Class 1 (5–10 min)

* Ask: “What did we build last time?”
* Quick review of HTML + CSS from Welcome Card

### 🔹 Step 2: Explain JavaScript Basics (10 min)

* What is JavaScript?
* Where do we write JS? (inside `<script>` tag)
* Demo simple `console.log()` and `alert()` (optional)

### 🔹 Step 3: Live Demo – Greeting Button (20 min)

* Create a button
* Write a function that changes text
* Use `document.getElementById()` to target an element
* Use `innerText` to change what it says

### 🔹 Step 4: Hands-On Practice (30 min)

* Students create their own button
* Change greeting message with their name
* Try different messages or colors

### 🔹 Step 5: Mini Challenge (15–20 min)

> Add a second button that changes the background color or bio text

---

## 🧪 **In-Class Challenge**

> 🔸 Create two buttons:
>
> 1. One to change the name
> 2. One to change the bio

```js
function changeBio() {
  document.getElementById("bio").innerText = "I'm learning to code!";
}
```

```html
<p id="bio">I love building the web!</p>
<button onclick="changeBio()">Change Bio</button>
```

---

## 📝 **Homework / Extension Task**

* Add another feature (new button or color theme)
* Try using `prompt()` to ask for the user’s name
* Use variables creatively:
  `let greeting = "Welcome, Ali!";`

---

## 🧠 **Secretly Learned**

| Concept          | Where It's Used                    |
| ---------------- | ---------------------------------- |
| Variables        | `let name = "Husen";`              |
| Strings          | `"Hello, " + name`                 |
| DOM manipulation | `getElementById().innerText = ...` |
| Events           | `onclick`                          |
| Functions        | `function changeGreeting() {}`     |

---