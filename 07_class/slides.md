### **Slide 1: Title Slide**

**🏫 Code the Web – Class 7**
**Show/Hide Tricks + Visual Logic**

> 🎯 Make things appear or disappear with a click
> 🧠 Use booleans to control the interface
> 🔐 Build secret reveals or password gates

---

### **Slide 2: Session Goal**

**🎯 What You’ll Learn Today**

* Show/hide page elements using JavaScript
* Use **booleans** to track state
* Add logic to your interface
* Create a **toggle behavior** like Show ↔ Hide

---

### **Slide 3: Class Overview**

**🧑‍🏫 Class Plan**

| Section      | Description                              |
| ------------ | ---------------------------------------- |
| **Topic**    | Visual logic + booleans + toggling       |
| **Time**     | 1.5–2 hours                              |
| **Output**   | Secret Revealer or Password Gate         |
| **Required** | DOM & input handling from previous class |

---

### **Slide 4: Key Concepts**

**📖 Concepts You’ll Use**

| Concept         | Description                                  |
| --------------- | -------------------------------------------- |
| `style.display` | Control if element is shown (`block`/`none`) |
| Boolean         | `true` or `false` values                     |
| `!isVisible`    | Flip the boolean (NOT)                       |
| `if/else`       | Choose behavior based on conditions          |

---

### **Slide 5: Recap Class 6**

**🔁 Review Questions**

* What is an array used for?
* What does `.push()` do?
* How did we **dynamically show list items**?

---

### **Slide 6: What Is Visibility?**

**👁️ Hide and Show with CSS + JS**

* HTML elements can be hidden using:

```html
<p style="display: none;">Hidden</p>
```

* JS changes that:

```js
element.style.display = "block";
```

Use this to **control what’s shown**!

---

### **Slide 7: Secret Revealer (Demo 1)**

**🛠️ Basic Show Logic**

```html
<p id="secret" style="display: none;">🕵️ Secret Message</p>
<button onclick="revealSecret()">Reveal</button>

<script>
function revealSecret() {
  document.getElementById("secret").style.display = "block";
}
</script>
```

✅ Works, but doesn’t toggle!

---

### **Slide 8: Toggle Version (Demo 2)**

**🔁 Toggle with Boolean**

```html
<p id="secret">🕵️ Secret Message</p>
<button onclick="toggleSecret()">Toggle Secret</button>

<script>
let isVisible = true;

function toggleSecret() {
  let secret = document.getElementById("secret");
  if (isVisible) {
    secret.style.display = "none";
  } else {
    secret.style.display = "block";
  }
  isVisible = !isVisible;
}
</script>
```

---

### **Slide 9: Challenge – Show the Answer**

**🧪 Mini Project**

🎯 Build a “Show Answer” button

* Start with a `<p>` hidden
* Show/hide it with a button
* Use a boolean to toggle

**Bonus Challenge:**
Add a **password check** with `prompt()`:

```js
let code = prompt("Enter code");
if (code === "1234") {
  secret.style.display = "block";
} else {
  alert("Access Denied");
}
```

---

### **Slide 10: Button Text Toggle**

**🧪 Improve UX with Button Text**

```js
btn.innerText = isVisible ? "Hide" : "Show";
```

✅ This updates the button to match the state

---

### **Slide 11: Homework / Extension**

**📝 Try at Home**

* Add a **second secret**
* Have two buttons: each toggles one message
* Change button text ("Show" ↔ "Hide")
* Add emojis 🎉 or sound 🎵
* Try making a **“spoiler reveal”** effect

---

### **Slide 12: Secretly Learned**

**🧠 Concepts in Action**

| Concept      | Example Used                     |
| ------------ | -------------------------------- |
| Boolean      | `let isVisible = true`           |
| DOM Control  | `style.display`                  |
| Toggle Logic | `if/else` with flip `!isVisible` |
| Input Check  | `prompt()` for secret code       |
| UI Feedback  | `innerText` change on button     |

---

### **Slide 13: Wrap-Up**

**✅ What You Can Do Now**

* Control visibility of HTML elements
* Toggle things on/off using JavaScript
* Use boolean logic to make interactive pages
* Build secret messages, password checks, and more!
