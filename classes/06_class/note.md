# 🏫 **Code the Web – Class 6: Arrays in Action**

### 🎯 **Session Goal**

Strengthen students’ understanding of **arrays** and how to use them with **inputs**, **loops**, and the **DOM** to build dynamic lists. Students will make a working **comment collector** or **feedback list** app.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                           |
| ------------- | ----------------------------------------------------- |
| Topic         | Arrays + dynamic DOM updates                          |
| Duration      | 1.5–2 hours                                           |
| Format        | Interactive coding, live demo, structured challenge   |
| Prerequisites | Class 5 (forms, input handling, functions)            |
| Key Concepts  | `push()`, `for` loop, `.value`, dynamic DOM creation  |
| Output        | Live-updating list of items (e.g., comments, answers) |

---

## 🛠️ **Live Demo: Collecting Comments**

```html
<input type="text" id="commentInput" placeholder="Type your comment" />
<button onclick="addComment()">Add</button>

<ul id="commentList"></ul>

<script>
  let comments = [];

  function addComment() {
    let input = document.getElementById("commentInput").value;
    if (input.trim() === "") return;

    comments.push(input);
    document.getElementById("commentInput").value = "";
    updateList();
  }

  function updateList() {
    let list = document.getElementById("commentList");
    list.innerHTML = ""; // Clear existing
    for (let i = 0; i < comments.length; i++) {
      let li = document.createElement("li");
      li.innerText = comments[i];
      list.appendChild(li);
    }
  }
</script>
```

---

## 📖 **Key JavaScript Concepts**

| Concept           | Description                           |
| ----------------- | ------------------------------------- |
| `[]`              | Array declaration                     |
| `push()`          | Adds new item to end of array         |
| `for` loop        | Iterates over all array items         |
| `createElement()` | Creates HTML elements from JavaScript |
| `appendChild()`   | Adds elements to the DOM              |
| `innerHTML = ""`  | Clears existing HTML                  |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Class 5 (5–10 min)

* What’s an input field?
* How do we use `value` and `onsubmit`?

### 🔹 Step 2: Explain Arrays Visually (10 min)

* A “list box” that stores multiple values
* Show array growing with `push()`

### 🔹 Step 3: Code a Comment Collector (30 min)

* Create input and button
* Push user input to array
* Loop through array to display all values in a list

### 🔹 Step 4: Enhance with DOM Creation (20 min)

* Use `document.createElement()` to build `<li>`s dynamically
* Keep interface clean by clearing input and re-rendering list

---

## 🧪 **In-Class Challenge**

> 🎯 Create a simple **Wish List App**

* Add item to array
* Show all items as an unordered list
* Bonus: Show total number of items added

```js
document.getElementById("count").innerText = "Total: " + comments.length;
```

---

## 📝 **Homework / Extension Task**

* Add a **clear all** button
* Show newest comment at the **top** of the list
* Style your comment list with alternating colors
* Try storing **name + comment** (use objects)

---

## 🧠 **Secretly Learned**

| Concept       | Where It’s Used                        |
| ------------- | -------------------------------------- |
| Arrays        | Storing comments, wishes, feedback     |
| DOM update    | `innerHTML`, `createElement`, `append` |
| Looping       | `for (let i = 0; i < arr.length...)`   |
| Input reading | `document.getElementById().value`      |
| Array length  | `arr.length` for counter               |

---