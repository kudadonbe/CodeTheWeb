### **Slide 1: Title Slide**

**🏫 Code the Web – Class 2**
**Buttons + JavaScript**

> 🎯 Make your web pages respond when clicked
> 🖱️ Add interaction with buttons and functions
> ✨ Edit your Welcome Card with real code!

---

### **Slide 2: Session Goal**

**🎯 What You'll Learn Today**

* Use **JavaScript** to control your page
* Write a function that runs on a button click
* Update the **text** on the screen dynamically
* Extend your Welcome Card from Class 1

---

### **Slide 3: Class Overview**

**🧑‍🏫 Today’s Focus**

| Section        | Description                        |
| -------------- | ---------------------------------- |
| **Topic**      | Add interactivity using JavaScript |
| **Duration**   | 1.5–2 hours                        |
| **Outcome**    | Button changes a name or message   |
| **Start With** | The `index.html` from Class 1      |

---

### **Slide 4: Key Concepts**

**📖 JavaScript Concepts for Today**

| Concept            | Description                              |
| ------------------ | ---------------------------------------- |
| `function`         | A block of code you can run repeatedly   |
| `let`              | Used to store a value                    |
| `onclick`          | Triggers code when an element is clicked |
| `getElementById()` | Finds an HTML element by its ID          |
| `innerText`        | Changes the visible text                 |

---

### **Slide 5: Quick Recap**

**🔁 From Class 1**

Ask:

* What was in your Welcome Card?
* What tags did you use? (`<h1>`, `<p>`, `<img>`...)

Remind:

* You already built a **static page**
* Today it becomes **interactive**

---

### **Slide 6: JavaScript Basics**

**💡 What Is JavaScript?**

* It controls how your webpage **behaves**
* You write it inside `<script>...</script>` tags
* Optional examples:

```js
console.log("Hello!");  
alert("Welcome!");
```

---

### **Slide 7: Live Demo**

**🛠️ Greeting Button Demo**

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

✅ Button changes the text!

---

### **Slide 8: Hands-On Practice**

**💻 Your Turn!**

* Create a **button**
* Write a **function**
* Use `getElementById()`
* Use `innerText` to change:

  * Name
  * Greeting
  * Any other element

---

### **Slide 9: Mini Challenge**

**🧪 Add a Second Button**

> 🔸 Create 2 buttons:
>
> 1. **Change the name**
> 2. **Change the bio/message**

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

### **Slide 10: Homework / Extension**

**📝 Practice Ideas**

* Add another **button** with a different effect
* Use `prompt()` to ask for the user’s name:

```js
let name = prompt("What is your name?");
```

* Create a greeting like:

```js
let greeting = "Welcome, " + name + "!";
```

---

### **Slide 11: Secretly Learned**

**🧠 What You Picked Up**

| Concept          | Where You Used It                  |
| ---------------- | ---------------------------------- |
| Variables        | `let name = "Husen"`               |
| Strings          | `"Hello, " + name`                 |
| DOM Manipulation | `getElementById().innerText = ...` |
| Events           | `onclick` to trigger actions       |
| Functions        | `function changeGreeting() {}`     |

---

### **Slide 12: Wrap-Up**

**✅ You Can Now\...**

* Write basic JavaScript functions
* Make buttons that **change the page**
* Use **IDs** to target HTML elements
* Build an interactive Welcome Card!