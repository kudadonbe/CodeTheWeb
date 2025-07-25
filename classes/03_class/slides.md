---
marp: true
theme: uncover
class: invert
paginate: true
---

# 🏫 Code the Web – Class 3  
## Store and Use Logic

> 🔹 Learn how to store user input  
> 🔹 Use if/else to respond  
> 🔹 Let’s make web pages interactive!

---

## 🎯 Goal of Today’s Class

- Store information using `let`  
- Ask users for their name or age  
- Use `if/else` to show different greetings  
- Expand your "Welcome Card" into something smart!

---

## 🧑‍🏫 Class Format & Focus

- **Topic:** Variables + conditional logic  
- **Time:** 1.5–2 hours  
- **Format:** Explanation → Live Demo → Practice  
- **Output:** Personalized greeting message  
- **Before this:** You learned functions, DOM, `onclick`

---

## 📖 What You'll Learn Today

| Concept         | Description                           |
| --------------- | ------------------------------------- |
| `let`           | Store a value like name or age        |
| `prompt()`      | Ask the user for input                |
| `if / else`     | Make decisions based on values        |
| `===`           | Check if two values are exactly equal |
| `console.log()` | Print messages in developer tools     |

---

## 🔁 From Last Class (Class 2)

- What did your button do?  
- You used:

  - `function myFunction()`  
  - `onclick="myFunction()"`  
  - `innerText` to change content

---

## 📦 Variables

- Think of a variable as a box to store data  
- Use `let` to declare it  
- Example:

```js
let name = "Ali";
````

---

## 🧾 Using prompt()

* Ask users for their name:

```js
let name = prompt("What is your name?");
```

* View the value:

```js
console.log(name);
```

---

## 🔀 Using if/else

* Compare input:

```js
if (name === "Husen") {
  // special message
} else {
  // general greeting
}
```

---

## 🧪 Greeting by Name

```html
<h2 id="greeting">Welcome!</h2>
<button onclick="personalGreet()">Greet Me</button>

<script>
function personalGreet() {
  let name = prompt("What is your name?");
  if (name === "Husen") {
    document.getElementById("greeting").innerText = "Hello, Teacher Husen!";
  } else {
    document.getElementById("greeting").innerText = "Hello, " + name + "!";
  }
}
</script>
```

---

## 👨‍🏫 Challenge 1: Personalized Greeting

> Ask for the user's name
> If it’s **Husen**, show:
> **“Welcome back, teacher!”**
> Otherwise:
> **“Hi, \[name]!”**

---

## 🔢 Challenge 2: Age-Based Message

```js
let age = prompt("How old are you?");
if (age >= 18) {
  alert("You are old enough!");
} else {
  alert("You're still young!");
}
```

---

## 📝 Extension / Homework

> Ask both name and age
> Show a message like:
> **“Hello Ali, you're 20 – a grown-up coder!”**

🔹 Bonus: Change the background color if name is "Husen"

---

## 🧠 What You Secretly Learned Today

| Concept      | Example                  |
| ------------ | ------------------------ |
| Variables    | `let name = prompt(...)` |
| User Input   | `prompt()`               |
| Conditions   | `if (name === "Husen")`  |
| Comparisons  | `===`, `>=`              |
| String Logic | `"Hello " + name`        |

---

## ✅ Today You Can...

* Store info using `let`
* Collect input with `prompt()`
* Use `if/else` to make choices
* Customize your page based on user input
* Write smarter, interactive JavaScript

