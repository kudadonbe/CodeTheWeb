# 🏫 **Code the Web – Class 7: Show/Hide Tricks + Visual Logic**

### 🎯 **Session Goal**

Teach students how to **show or hide elements** based on conditions. Introduce **booleans**, **visual logic**, and **toggle UI behavior** using JavaScript. Students will build a **Secret Revealer** or a **password gate**.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| Topic         | Booleans, conditional display, toggling visibility          |
| Duration      | 1.5–2 hours                                                 |
| Format        | Live demo, concept intro, student mini-project              |
| Prerequisites | Class 6 (DOM manipulation, loops, functions)                |
| Key Concepts  | `style.display`, `booleans`, `if/else`, `toggle`            |
| Output        | Interactive section that appears/disappears on button click |

---

## 🛠️ **Live Demo: Secret Revealer**

```html
<p id="secret" style="display: none;">🕵️ This is a secret message!</p>
<button onclick="revealSecret()">Reveal</button>

<script>
  function revealSecret() {
    document.getElementById("secret").style.display = "block";
  }
</script>
```

---

### 🔁 Better: Toggle Version with Boolean

```html
<p id="secret">🕵️ This is a secret message!</p>
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
    isVisible = !isVisible; // Flip the boolean
  }
</script>
```

---

## 📖 **Key Concepts Introduced**

| Concept         | Explanation                                     |
| --------------- | ----------------------------------------------- |
| `style.display` | Controls visibility (`"none"`, `"block"`, etc.) |
| Boolean         | `true` or `false`, used for logic checks        |
| `!isVisible`    | NOT operator: flips `true` ↔ `false`            |
| `if/else`       | Used to decide what to show/do                  |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Class 6 (5–10 min)

* What is an array? What does `.push()` do?
* How did we display list items dynamically?

### 🔹 Step 2: What is Visibility? (10 min)

* Show how CSS `display: none` works
* Show `style.display` in the console

### 🔹 Step 3: Build a Simple Secret Revealer (15 min)

* Hide a paragraph using `style="display:none"`
* Button shows it on click

### 🔹 Step 4: Boolean Toggle (25 min)

* Use a `let isVisible = true` flag
* Flip the flag using `!`
* Use `if/else` to update UI based on the flag

---

## 🧪 **In-Class Challenge**

> Build a simple **"Show Answer" button**

* Hide a `<p>` with the answer
* Show or hide it when the user clicks

**Bonus:** Add a **"password gate"**:

* Ask user for a secret code (`prompt`)
* If correct, show the hidden message

```js
let code = prompt("Enter the code");
if (code === "1234") {
  secret.style.display = "block";
} else {
  alert("Access Denied");
}
```

---

## 📝 **Homework / Extension Task**

* Add a second secret message
* Make buttons toggle different messages
* Add sound effects or emoji when revealed
* Change button text between “Show” / “Hide”

```js
btn.innerText = isVisible ? "Hide" : "Show";
```

---

## 🧠 **Secretly Learned**

| Concept          | Where It’s Used                       |
| ---------------- | ------------------------------------- |
| Booleans         | `let isVisible = true`                |
| DOM Control      | `element.style.display`               |
| Logic/Toggle     | `if (isVisible) { ... } else { ... }` |
| NOT operator     | `isVisible = !isVisible`              |
| User Input Check | `prompt()` and code gate              |

---
