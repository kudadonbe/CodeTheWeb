---

marp: true
theme: uncover
class: invert
paginate: true
--------------

# 💻 Teacher Slides: To-Do App Enhancements

---

## ✅ 🧪 Challenge Time! – Sample Code & Answers

### 1. Show Total Number of Tasks

```html
<p>Total Tasks: <span id="taskCount">0</span></p>
```

```js
function updateTaskCount() {
  const count = document.getElementById("taskCount");
  count.innerText = tasks.length;
}
```

Call `updateTaskCount()` after adding/removing tasks.

---

### 2. Capitalize First Letter of Each Task (Sentence Case)

```js
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const taskText = capitalizeFirstLetter(taskInput.value.trim());
```

---

### 3. Show Latest Task on Top

```js
tasks.unshift(taskText); // Adds to beginning
```

Redraw the list after updating tasks.

---

## ✨ Make It Smarter – Code Examples

### 1. Convert Input into Title Case

```js
function toTitleCase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
const taskText = toTitleCase(taskInput.value.trim());
```

---

### 2. Show a "No Tasks Yet" Message

```html
<p id="emptyMessage">No tasks yet!</p>
```

```css
#emptyMessage {
  font-style: italic;
  color: gray;
}
```

```js
function updateEmptyMessage() {
  const empty = document.getElementById("emptyMessage");
  empty.style.display = tasks.length === 0 ? "block" : "none";
}
```

Call it whenever tasks change.

---

### 3. Style Completed Tasks (Preview)

```js
li.classList.toggle("completed");
```

```css
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
```

---

## 📝 Practice at Home – Tips & Code

### 1. Add Timestamp to Each Task

```js
const timestamp = new Date().toLocaleString();
li.innerHTML = `<span>${taskText}</span> <small>${timestamp}</small>`;
```

---

### 2. Group Logic Inside a todoApp Object

```js
const todoApp = {
  tasks: [],
  addTask(text) {
    this.tasks.push(text);
    this.render();
  },
  render() {
    // Clear and redraw task list
  }
};
```

---

### 3. Add Light Styling

```css
li {
  margin-bottom: 10px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.3s;
}
li:hover {
  background-color: #f0f0f0;
}

body {
  font-family: 'Segoe UI', sans-serif;
}
```

---

Use these code blocks as reference or slides during recap and home practice review.
Make sure students understand when and why to use each pattern.
