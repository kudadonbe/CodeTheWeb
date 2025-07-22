---

marp: true
theme: uncover
class: invert
paginate: true
--------------

# 🏫 Code the Web – Class 7

## Show/Hide Tricks + Visual Logic

> 🎯 Make things appear or disappear with a click
> 🧠 Use booleans to control the interface
> 🔐 Build secret reveals or password gates

---

## 🎯 What You’ll Learn Today

* Show/hide page elements using JavaScript
* Use **booleans** to track state
* Add logic to your interface
* Create a **toggle behavior** like Show ↔ Hide

---

## 🧑‍🏫 Class Plan

| Section      | Description                              |
| ------------ | ---------------------------------------- |
| **Topic**    | Visual logic + booleans + toggling       |
| **Time**     | 1.5–2 hours                              |
| **Output**   | Secret Revealer or Password Gate         |
| **Required** | DOM & input handling from previous class |

---

## 📖 Concepts You’ll Use

| Concept         | Description                                  |
| --------------- | -------------------------------------------- |
| `style.display` | Control if element is shown (`block`/`none`) |
| Boolean         | `true` or `false` values                     |
| `!isVisible`    | Flip the boolean (NOT)                       |
| `if/else`       | Choose behavior based on conditions          |

---

## 🔁 Review Questions

* What is an array used for?
* What does `.push()` do?
* How did we **dynamically show list items**?

---

## 👁️ Hide and Show with CSS + JS

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

## 🛠️ Basic Show Logic

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

## 🔁 Toggle with Boolean

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

## 🧪 Mini Project

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

## 🧪 Improve UX with Button Text

```js
btn.innerText = isVisible ? "Hide" : "Show";
```

✅ This updates the button to match the state

---

## 📝 Try at Home

* Add a **second secret**
* Have two buttons: each toggles one message
* Change button text ("Show" ↔ "Hide")
* Add emojis 🎉 or sound 🎵
* Try making a **“spoiler reveal”** effect

---

## 🧠 Concepts in Action

| Concept      | Example Used                     |
| ------------ | -------------------------------- |
| Boolean      | `let isVisible = true`           |
| DOM Control  | `style.display`                  |
| Toggle Logic | `if/else` with flip `!isVisible` |
| Input Check  | `prompt()` for secret code       |
| UI Feedback  | `innerText` change on button     |

---

## ✅ What You Can Do Now

* Control visibility of HTML elements
* Toggle things on/off using JavaScript
* Use boolean logic to make interactive pages
* Build secret messages, password checks, and more!
