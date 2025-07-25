---
marp: true
theme: uncover
class: invert
paginate: true
---

# 🏫 Code the Web – Class 5  
## Forms and Input

> 🎯 Learn to create HTML forms  
> 💡 Read and validate input with JavaScript  
> ✅ Respond based on user data!

---

## 🎯 What You'll Learn Today

- Create a form using HTML  
- Read user input using JavaScript  
- Validate input (check if filled)  
- Show custom messages with JS

---

## 🧑‍🏫 Structure of Today’s Class

- **Topic:** Forms & input handling  
- **Duration:** 1.5–2 hours  
- **Format:** Build form → Connect with JS → Add validation  
- **Output:** Feedback form or login check  
- **Review Needed:** Variables, functions, arrays

---

## 📖 HTML + JavaScript Concepts

| Concept                  | Description                        |
| ------------------------ | ---------------------------------- |
| `<form>`                 | Group inputs together              |
| `onsubmit`               | Runs when form is submitted        |
| `event.preventDefault()` | Prevents page from reloading       |
| `input.value`            | Gets user input                    |
| `trim()`                 | Removes unnecessary spaces         |
| `if/else`                | Decide based on input (validation) |

---

## 🔁 Quick Review

Ask students:

- What is a **function**?  
- What is an **array**?  
- How did we show **random messages**?

✔ Remember: `function showCompliment()`, `array[]`, `Math.random()`

---

## 📄 HTML Form Elements

```html
<form>
  <label>Your Name:</label>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
````

* Use `<form>`, `<input>`, `<label>`, `<button>`
* Type: `text`, `submit`

---

## 🔍 Use JavaScript to Get Input

```js
let name = document.getElementById("username").value;
```

* Read value from form field
* Use `.value` to access what user typed
* Show result using `innerText`

---

## 🧪 Feedback Form with Validation

```html
<form onsubmit="handleFeedback(event)">
  <label>Your Name:</label>
  <input type="text" id="username" />
  <button type="submit">Submit</button>
</form>
<p id="result"></p>
```

```js
function handleFeedback(event) {
  event.preventDefault();
  let name = document.getElementById("username").value;

  if (name.trim() === "") {
    document.getElementById("result").innerText = "Please enter your name.";
  } else {
    document.getElementById("result").innerText = "Thank you, " + name + "!";
  }
}
```

---

## ✅ Why Validate Input?

* Prevent empty fields
* Give feedback to the user

```js
if (name.trim() === "") {
  result.innerText = "Please enter your name.";
} else {
  result.innerText = "Thank you, " + name + "!";
}
```

---

## 🧪 Build a Login Simulator

* Ask for **username**

If it's **"admin"**, show:

> “Welcome back, Admin!”

Otherwise:

> “Welcome, guest \[name]!”

```js
if (name === "admin") {
  result.innerText = "Welcome back, Admin!";
} else {
  result.innerText = "Welcome, guest " + name + "!";
}
```

---

## 📝 Practice at Home

* Add another field (e.g. **Favorite Color**)
* Show a custom message:

> “Hi Ali, we love the color blue too!”

**Bonus:**
Add **age** and show:

> “You’re old enough!” or “Still young!” based on value

---

## 🧠 What You Learned Today

| Concept          | Where It’s Used                |
| ---------------- | ------------------------------ |
| Forms            | `<form>`, `<input>`            |
| Input values     | `.value`                       |
| DOM Manipulation | `getElementById().innerText`   |
| Conditionals     | `if/else`                      |
| Input Validation | `trim()`, check for empty      |
| Event Handling   | `onsubmit`, `preventDefault()` |

---

## ✅ You Can Now\...

* Build a working form with submit button
* Capture user input and use it in JS
* Validate inputs and give feedback
* Make your web pages **interactive** and **responsive**

```