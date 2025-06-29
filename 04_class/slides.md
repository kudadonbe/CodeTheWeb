### **Slide 1: Title Slide**

**🏫 Code the Web – Class 4**
**Reuse Logic & Repeat Tasks**

> 🎯 Build a Random Compliment Generator
> 🔁 Learn to reuse code with functions
> 🎲 Make your page react differently every time!

---

### **Slide 2: Session Goal**

**🎯 Goal of Today’s Class**

* Learn to reuse logic with `function`
* Store multiple options using `array`
* Use `Math.random()` to pick one randomly
* Build a **Compliment Generator**

---

### **Slide 3: Class Overview**

**🧑‍🏫 Class Structure**

* **Topic:** Functions & Loops
* **Duration:** 1.5–2 hours
* **Format:** Concept → Demo → Code-Along → Practice
* **Output:** A random compliment or message
* **You Need to Know:** Variables, functions, conditions (from Class 3)

---

### **Slide 4: Key Concepts**

**📖 JavaScript Concepts**

| Concept         | Description                             |
| --------------- | --------------------------------------- |
| `function`      | Reusable block of code                  |
| `array`         | A list of items                         |
| `Math.random()` | Get a random number (0–1)               |
| `Math.floor()`  | Round down to a whole number            |
| `array.length`  | Count of items in the array             |
| `for loop`      | Repeat code multiple times (intro only) |

---

### **Slide 5: Quick Recap (Class 3)**

**🔁 From Last Class**

Ask the class:

* What’s a variable?
* What does `if/else` do?
* What does `prompt()` return?

Also review:

* Changing text with `innerText`

---

### **Slide 6: What Is a Function?**

**🛠️ Reusable Logic**

* Functions = blocks of code you can call by name
* Syntax:

  ```js
  function greet() {
    alert("Hi there!");
  }
  ```
* Call it like this:

  ```js
  greet();
  ```

---

### **Slide 7: What Is an Array?**

**📦 Grouped Values**

* A variable that holds multiple values:

  ```js
  let messages = ["Hi", "Hello", "Hey"];
  alert(messages[0]); // Hi
  ```
* Arrays use numbers called **indexes** starting from 0

---

### **Slide 8: Random Selection Logic**

**🎲 Pick a Random Message**

```js
let index = Math.floor(Math.random() * messages.length);
alert(messages[index]);
```

> ✔ Always stays inside the array range
> ✔ Picks a different one each time

---

### **Slide 9: Live Demo Code**

**🧪 Compliment Generator**

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

### **Slide 10: Challenge: Mood Lifter App**

**🧪 Your Turn!**

🎲 Build a mini "Mood Lifter" tool:

* Add a button
* Show a random quote, tip, or joke when clicked

Optional:

* Use emojis!
* Make the font or background change with each click

---

### **Slide 11: Bonus: Loop Preview**

**🔁 Try This Loop**

```js
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Ask students:

> “Can you loop through compliments and log them one by one?”

---

### **Slide 12: Homework / Extension**

**📝 Try at Home**

* Add more messages to your compliment array
* Change text color or background randomly
* Bonus: Add **2 buttons**:

  * One for compliments
  * One for jokes

---

### **Slide 13: Secretly Learned**

**🧠 What You Gained Today**

| Concept    | Where You Used It                      |
| ---------- | -------------------------------------- |
| Arrays     | List of compliments                    |
| Indexing   | `array[index]`                         |
| Randomness | `Math.random()`, `Math.floor()`        |
| Functions  | `function showCompliment()`            |
| Reuse      | Call the same logic again and again    |
| Loops      | `for` loop to explore arrays (preview) |

---

### **Slide 14: Wrap Up**

**✅ You Can Now\...**

* Reuse logic using functions
* Store and access multiple messages
* Pick random items from arrays
* Build a smarter interactive page
