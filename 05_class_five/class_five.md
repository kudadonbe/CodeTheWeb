# 🏫 **Code the Web – Class 5: Forms and Input**

### 🎯 **Session Goal**

Teach students how to create **HTML forms** and use JavaScript to **read user input**, **validate it**, and **respond**. The focus is on capturing data and reacting to it.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Topic         | Forms and input handling                                                      |
| Duration      | 1.5–2 hours                                                                   |
| Format        | Form creation → JS interaction → input validation                             |
| Prerequisites | Class 4 (variables, functions, arrays)                                        |
| Key Concepts  | `<form>`, `<input>`, `onsubmit`, `event.preventDefault()`, `value`, `if/else` |
| Output        | Feedback Form or Simple Login Check                                           |

---

## 🛠️ **Live Demo: Feedback Form Example**

```html
<form onsubmit="handleFeedback(event)">
  <label>Your Name:</label>
  <input type="text" id="username" />
  <button type="submit">Submit</button>
</form>
<p id="result"></p>

<script>
  function handleFeedback(event) {
    event.preventDefault(); // Stop page from reloading
    let name = document.getElementById("username").value;

    if (name.trim() === "") {
      document.getElementById("result").innerText = "Please enter your name.";
    } else {
      document.getElementById("result").innerText = "Thank you, " + name + "!";
    }
  }
</script>
```

---

## 📖 **Key Concepts Introduced**

| Concept                  | Explanation                      |
| ------------------------ | -------------------------------- |
| `<form>` tag             | Groups inputs together           |
| `onsubmit`               | Runs when form is submitted      |
| `event.preventDefault()` | Stops the page from refreshing   |
| `input.value`            | Gets user input                  |
| `trim()`                 | Removes extra spaces             |
| Validation               | Check if input is empty or valid |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Previous Class (5–10 min)

* What is a function?
* What is an array?
* How did we show random messages?

### 🔹 Step 2: Show a Form (10 min)

* HTML: `<form>`, `<input>`, `<label>`, `<button>`
* Mention `type="text"` and `type="submit"`

### 🔹 Step 3: Use JS to Read Input (20–30 min)

* Explain `document.getElementById("...").value`
* Show simple greeting from form
* Live demo: change result when name is entered

### 🔹 Step 4: Add Validation (20 min)

* If empty → show error
* Else → show greeting

---

## 🧪 **In-Class Challenge**

> Create a simple **Login Simulator**:

* Ask for a username
* If the name is “admin”, show “Welcome back, Admin!”
* Else show: “Welcome, guest \[name]!”

```js
if (name === "admin") {
  result.innerText = "Welcome back, Admin!";
} else {
  result.innerText = "Welcome, guest " + name + "!";
}
```

---

## 📝 **Homework / Extension Task**

* Add another field: e.g., "Favorite Color"

* Show both inputs in a custom message:
  “Hi Ali, we love the color blue too!”

* Bonus: Add a field for age and display a message depending on value (age checker)

---

## 🧠 **Secretly Learned**

| Concept          | Where It’s Used                      |
| ---------------- | ------------------------------------ |
| Forms            | `<form>` and `<input>`               |
| Input values     | `.value`                             |
| DOM manipulation | `getElementById().innerText`         |
| Conditionals     | `if/else`                            |
| Input validation | `trim()`, check for empty fields     |
| Event handling   | `onsubmit`, `event.preventDefault()` |

---