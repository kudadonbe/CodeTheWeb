# 🏫 **Code the Web – Class 3: Store and Use Info**

### 🎯 **Session Goal**

Teach students how to **store information in variables** and use **if/else logic** to respond differently based on that info. Expand the Welcome Card or create a new "greeting by name" interaction.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                          |
| ------------- | ---------------------------------------------------- |
| Topic         | Variables and basic conditional logic                |
| Duration      | 1.5–2 hours                                          |
| Format        | Explanation, live demo, student practice             |
| Prerequisites | Class 2 (functions, DOM, onclick events)             |
| Key Concepts  | `let`, `prompt()`, `if/else`, `===`, `console.log()` |
| Output        | Page greets user differently based on name or age    |

---

## 🛠️ **Live Demo Code: Greeting with Name**

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

## 📖 **Key JavaScript Concepts**

| Concept       | Description                                 |
| ------------- | ------------------------------------------- |
| `let`         | Store a value (name, age, etc.)             |
| `prompt()`    | Ask the user for input                      |
| `if/else`     | Conditional decision-making                 |
| `===`         | Checks if two things are equal (strictly)   |
| `console.log` | Debug or print values (useful in dev tools) |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Class 2 (5 min)

* Ask: “What did your button do last time?”
* Review: `function`, `onclick`, `innerText`

### 🔹 Step 2: Introduce Variables (15 min)

* What is a variable?
* Show how to store a name or age
* Use `let` to create a greeting message

### 🔹 Step 3: User Input with `prompt()` (10 min)

* Show how to ask for user name
* Use `console.log(name)` to view what they entered

### 🔹 Step 4: Add Conditions (20–30 min)

* Introduce `if/else`
* Compare input to expected value
* Customize greeting message

---

## 🧪 **In-Class Challenges**

### Challenge 1:

> Ask the user’s name. If it’s "Husen", say "Welcome back, teacher!" Otherwise, say "Hi, \[name]!"

### Challenge 2:

> Ask age and say:

* “You are old enough” if age >= 18
* “You're still young!” otherwise

```js
let age = prompt("How old are you?");
if (age >= 18) {
  alert("You are old enough!");
} else {
  alert("You're still young!");
}
```

---

## 📝 **Homework / Extension Task**

* Ask both name **and** age
* Give a personalized message like:

  * "Hello Ali, you're 20 – a grown-up coder!"
* Bonus: Try changing the background color based on name

---

## 🧠 **Secretly Learned**

| Concept      | Where It's Used                 |
| ------------ | ------------------------------- |
| Variables    | `let name = prompt(...)`        |
| Conditionals | `if (name === "Husen") { ... }` |
| User Input   | `prompt()`                      |
| Comparison   | `===`, `>=`                     |
| String Logic | `"Hello, " + name`              |

---
