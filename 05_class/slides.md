### **Slide 1: Title Slide**

**🏫 Code the Web – Class 5**
**Forms and Input**

> 🎯 Learn to create HTML forms
> 💡 Read and validate input with JavaScript
> ✅ Respond based on user data!

---

### **Slide 2: Session Goal**

**🎯 What You'll Learn Today**

* Create a form using HTML
* Read user input using JavaScript
* Validate input (check if filled)
* Show custom messages with JS

---

### **Slide 3: Class Overview**

**🧑‍🏫 Structure of Today’s Class**

* **Topic:** Forms & input handling
* **Duration:** 1.5–2 hours
* **Format:** Build form → Connect with JS → Add validation
* **Output:** Feedback form or login check
* **Review Needed:** Variables, functions, arrays

---

### **Slide 4: Key Concepts**

**📖 HTML + JavaScript Concepts**

| Concept                  | Description                        |
| ------------------------ | ---------------------------------- |
| `<form>`                 | Group inputs together              |
| `onsubmit`               | Runs when form is submitted        |
| `event.preventDefault()` | Prevents page from reloading       |
| `input.value`            | Gets user input                    |
| `trim()`                 | Removes unnecessary spaces         |
| `if/else`                | Decide based on input (validation) |

---

### **Slide 5: Recap Class 4**

**🔁 Quick Review**

Ask students:

* What is a **function**?
* What is an **array**?
* How did we show **random messages**?

✔ Remember: `function showCompliment()`, `array[]`, `Math.random()`

---

### **Slide 6: Step 1 – Show a Form**

**📄 HTML Form Elements**

```html
<form>
  <label>Your Name:</label>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

* Use `<form>`, `<input>`, `<label>`, `<button>`
* Type: `text`, `submit`

---

### **Slide 7: Step 2 – Read Input**

**🔍 Use JavaScript to Get Input**

```js
let name = document.getElementById("username").value;
```

* Read value from form field
* Use `.value` to access what user typed
* Show result using `innerText`

---

### **Slide 8: Step 3 – Live Demo Code**

**🧪 Feedback Form with Validation**

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

### **Slide 9: Step 4 – Add Validation**

**✅ Why Validate Input?**

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

### **Slide 10: Challenge Time!**

**🧪 Build a Login Simulator**

* Ask for **username**

* If it's **"admin"**, show:

  > “Welcome back, Admin!”

* Otherwise:

  > “Welcome, guest \[name]!”

```js
if (name === "admin") {
  result.innerText = "Welcome back, Admin!";
} else {
  result.innerText = "Welcome, guest " + name + "!";
}
```

---

### **Slide 11: Homework / Extension**

**📝 Practice at Home**

* Add another field (e.g. **Favorite Color**)
* Show a custom message:

> “Hi Ali, we love the color blue too!”

**Bonus:**
Add **age** and show:

> “You’re old enough!” or “Still young!” based on value

---

### **Slide 12: Secretly Learned**

**🧠 What You Learned Today**

| Concept          | Where It’s Used                |
| ---------------- | ------------------------------ |
| Forms            | `<form>`, `<input>`            |
| Input values     | `.value`                       |
| DOM Manipulation | `getElementById().innerText`   |
| Conditionals     | `if/else`                      |
| Input Validation | `trim()`, check for empty      |
| Event Handling   | `onsubmit`, `preventDefault()` |

---

### **Slide 13: Summary**

**✅ You Can Now\...**

* Build a working form with submit button
* Capture user input and use it in JS
* Validate inputs and give feedback
* Make your web pages **interactive** and **responsive**
