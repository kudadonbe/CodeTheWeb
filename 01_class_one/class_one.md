# 📘 Module 1 – Lesson 1: Welcome Card

**Lesson Title:** Your First Website: The Magic of HTML, CSS, and JS  
**Lesson Type:** Beginner  
**Format:** Project-based (Welcome Card)  
**Duration:** 30–45 minutes

---

## 🎯 Objectives

By the end of this lesson, students will:
- Build a web page using HTML
- Style the page with CSS
- Add interactivity using JavaScript
- Learn the concepts of:
  - Variables
  - DOM access
  - Event handling

---

## 🛠️ Files Needed

- `index.html` (self-contained file)

---

## 🪄 Live Code – Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome Card</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f4f4f4;
      display: flex;
      justify-content: center;
      padding-top: 50px;
    }
    .card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
      width: 300px;
    }
    .card img {
      width: 100px;
      border-radius: 50%;
    }
    .card button {
      margin-top: 10px;
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://placekitten.com/100/100" alt="Profile Pic">
    <h2 id="name">Your Name</h2>
    <p id="bio">I love building the web!</p>
    <button onclick="changeGreeting()">Click Me!</button>
  </div>

  <script>
    function changeGreeting() {
      let name = "Husen";
      document.getElementById("name").innerText = "Hello, " + name + "!";
    }
  </script>
</body>
</html>
```

---

## 🧠 Syntax Quick Reference

| Language | Concept         | Example |
|----------|------------------|---------|
| HTML     | Heading tag      | `<h2>My Name</h2>` |
| CSS      | Style rule       | `.card { background: white; }` |
| JS       | Variable         | `let name = "Husen";` |
| JS       | DOM access       | `document.getElementById("name")` |
| JS       | Event trigger    | `onclick="changeGreeting()"` |

---

## 🧭 Teaching Steps

### Step 1 – Setup (5 mins)
- Open a code editor or CodePen
- Paste the starter template
- Run it and explain the layout

### Step 2 – HTML Structure (5 mins)
- Show `<h2>`, `<p>`, `<img>`, `<button>`
- Point out use of `id="..."` for JavaScript access

### Step 3 – CSS Styling (5 mins)
- Walk through the `.card {}` styles
- Live-edit: change colors or fonts

### Step 4 – JavaScript Behavior (10 mins)
- Explain the `<script>` block
- Show `let name = "Husen";`
- Explain `getElementById().innerText = ...`
- Discuss how `onclick` runs the function

---

## 🧪 Challenge Task

> Change the name and greeting.  
> Make it say:  
> “Hello, I’m [your name] and I code the web!”

Example:

```js
let name = "Aishath";
document.getElementById("name").innerText = "Hi! I'm " + name + " and I code the web!";
```

---

## 🔁 Review – What They Learned

| Concept       | Where It Appeared             |
|---------------|-------------------------------|
| HTML          | Structure of the card         |
| CSS           | Visual styling                |
| JavaScript    | Button interactivity          |
| Variables     | `let name = "..."`            |
| DOM Access    | `getElementById()`            |
| Events        | `onclick="..."`               |

---

## 📌 Tips for Instructors

- Use Live Server or CodePen for instant feedback
- Ask: “What do you *think* this code will do?”
- Let students customize: colors, names, pictures

---

## 🧠 Hidden Fundamentals (Taught Without Saying)

- Structure (HTML)
- Presentation (CSS)
- Behavior (JavaScript)
- Data (variables and strings)
- User interaction (events)
- DOM manipulation (JS controls HTML)

---

## 📝 Homework Idea

- Add your **real name**
- Customize card with a new **image** and **bio**
- Make the button **change color** or update the bio text

---