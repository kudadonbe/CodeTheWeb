---
marp: true
theme: uncover
class: invert
paginate: true
---

# 🏫 Code the Web – Class 6  
## Arrays in Action

> 🎯 Build a live comment collector  
> 🧠 Learn how arrays and DOM work together  
> 💡 Update your page with a growing list!

---

## 🎯 What You’ll Learn Today

- Use **arrays** to collect multiple inputs  
- Use **loops** to display all items  
- Use **JavaScript + DOM** to show dynamic lists  
- Build your first **live-updating UI**

---

## 🧑‍🏫 Today's Structure

- **Topic:** Arrays + dynamic DOM updates  
- **Duration:** 1.5–2 hours  
- **Format:** Code-along → Live Demo → Challenge  
- **Output:** A comment or feedback list  
- **Previous:** Forms, input `.value`, `onsubmit`

---

## 📖 JavaScript Concepts Introduced

| Concept           | Description           |
| ----------------- | --------------------- |
| `[]`              | Array declaration     |
| `.push()`         | Add new item to array |
| `for` loop        | Go through all items  |
| `createElement()` | Build elements in JS  |
| `appendChild()`   | Add items to the page |
| `innerHTML = ""`  | Clear current items   |

---

## 🔁 Review Check

Ask:

- How do we get **input values**?  
- What does `.value` do?  
- Why do we use `event.preventDefault()`?

✔ Forms are interactive  
✔ We already know how to read one input — now we collect many!

---

## 📦 Arrays Are Lists

- Store multiple values inside one variable  
- Like a **box** that holds many notes

```js
let comments = ["Hi", "Nice job", "Cool!"];
````

* Add with:

```js
comments.push("New comment");
```

---

## 🛠️ HTML for the Collector

```html
<input type="text" id="commentInput" placeholder="Type your comment" />
<button onclick="addComment()">Add</button>
<ul id="commentList"></ul>
```

---

## 🧠 Collect & Show Comments

```js
let comments = [];

function addComment() {
  let input = document.getElementById("commentInput").value;
  if (input.trim() === "") return;

  comments.push(input);
  document.getElementById("commentInput").value = "";
  updateList();
}
```

---

## 🔁 Display All Comments

```js
function updateList() {
  let list = document.getElementById("commentList");
  list.innerHTML = ""; // Clear list

  for (let i = 0; i < comments.length; i++) {
    let li = document.createElement("li");
    li.innerText = comments[i];
    list.appendChild(li);
  }
}
```

---

## 🎯 Build a Wish List App

✅ Features:

* Add new wishes
* Display in a `<ul>`

Bonus:

```js
document.getElementById("count").innerText = "Total: " + comments.length;
```

---

## 📝 Homework / Enhancement Task

* Add a **Clear All** button
* Show **newest item on top**
* Style: alternate row colors
* Extra: Collect **name + comment** using objects

---

## 🧠 Behind the Scenes

| Concept       | Example in Class                    |
| ------------- | ----------------------------------- |
| Arrays        | Storing comments                    |
| DOM Updates   | `createElement`, `appendChild`      |
| Looping       | `for` loop over `comments[]`        |
| Input Reading | `document.getElementById().value`   |
| Array Length  | `comments.length` for count display |

---

## ✅ You Can Now\...

* Build and use an array in your app
* Collect user input over time
* Show that data on the page dynamically
* Create fully working interactive lists

```
