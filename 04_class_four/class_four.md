# 🏫 **Code the Web – Class 4: Reuse Logic & Repeat Tasks**

### 🎯 **Session Goal**

Teach students how to **write reusable functions** and use **loops** to repeat actions. Students will build or enhance a **Compliment Generator** that gives random messages on button click.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                          |
| ------------- | ---------------------------------------------------- |
| Topic         | Functions and Loops                                  |
| Duration      | 1.5–2 hours                                          |
| Format        | Concept explanation, live demo, code-along, practice |
| Prerequisites | Class 3 (functions, variables, conditions)           |
| Key Concepts  | `function`, `for` loop, `Math.random()`, `array`     |
| Output        | Random message/compliment generator                  |

---

## 🛠️ **Live Demo: Compliment Generator**

```html
<h2 id="output">Click the button!</h2>
<button onclick="showCompliment()">Get Compliment</button>

<script>
  function showCompliment() {
    let compliments = ["You're awesome!", "Great job!", "Keep coding!", "Nice work!"];
    let index = Math.floor(Math.random() * compliments.length);
    document.getElementById("output").innerText = compliments[index];
  }
</script>
```

---

## 📖 **Key JavaScript Concepts**

| Concept         | Description                                      |
| --------------- | ------------------------------------------------ |
| `function`      | Reusable block of code                           |
| `array`         | A list of items (`["a", "b", "c"]`)              |
| `Math.random()` | Returns a random number between 0 and 1          |
| `Math.floor()`  | Rounds down to the nearest whole number          |
| `array.length`  | Number of items in an array                      |
| `for` loop      | Repeats code a number of times (intro, optional) |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Class 3 (10 min)

* Ask: What is a variable? What does `if/else` do?
* Quick review of `prompt()` and `innerText`

### 🔹 Step 2: What is a Function? (10 min)

* Syntax: `function name() { ... }`
* Why functions are useful: reuse code for different actions

### 🔹 Step 3: What is an Array? (10–15 min)

* A list of values: compliments, colors, tips
* Show how to access items with `index`

```js
let messages = ["Hi", "Hello", "Hey"];
alert(messages[0]); // "Hi"
```

### 🔹 Step 4: Random Compliment Logic (20–25 min)

* `Math.random()` to choose index
* `array.length` to stay within bounds
* Update `innerText` with chosen value

---

## 🧪 **In-Class Challenge**

> 🎲 Build a "Mood Lifter" app:

* Create a button
* Each time it’s clicked, show a random motivational quote or joke

---

## ✨ Bonus Practice

### Loop Demo:

```js
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

> Ask: “Can you loop through compliments and log each one?”

---

## 📝 **Homework / Extension Task**

* Add more messages to the compliment array
* Try changing text **color** or **background** based on random choice
* Bonus: Add two buttons: one for compliments, one for jokes

---

## 🧠 **Secretly Learned**

| Concept    | Where It’s Used                               |
| ---------- | --------------------------------------------- |
| Arrays     | List of compliments                           |
| Indexing   | `array[index]`                                |
| Randomness | `Math.random()`, `Math.floor()`               |
| Functions  | `function showCompliment()`                   |
| Reuse      | Buttons can call same/different functions     |
| Optional   | `for` loop logic (preview of future sessions) |

---