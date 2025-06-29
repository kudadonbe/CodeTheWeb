### **Slide 1: Title Slide**

**🏫 Code the Web – Class 9**
**Building with Arrays – To-Do App (Part 2)**

> 🎯 Make your To-Do App functional
> 🧠 Add tasks with JavaScript and arrays
> ✅ See your code come alive!

---

### **Slide 2: Session Goal**

**🎯 Today’s Objective**

* Use JavaScript to **add tasks** to your To-Do App
* Store task data in an **array**
* Use JavaScript to **create and display** list items
* Prevent empty inputs and keep the list clean

---

### **Slide 3: Class Overview**

**🧑‍🏫 What’s the Plan?**

| Section      | Description                            |
| ------------ | -------------------------------------- |
| **Topic**    | Making the To-Do app work using JS     |
| **Duration** | 1.5–2 hours                            |
| **Output**   | Working "Add Task" feature             |
| **You Know** | HTML layout, IDs, buttons from Class 8 |

---

### **Slide 4: Key Concepts**

**📖 Concepts You’ll Use Today**

| Concept           | Explanation                    |
| ----------------- | ------------------------------ |
| `push()`          | Add item to array              |
| `trim()`          | Clean extra spaces from input  |
| `createElement()` | Create new HTML elements       |
| `appendChild()`   | Add elements to page           |
| `innerHTML = ""`  | Clear list before re-rendering |

---

### **Slide 5: Review Layout**

**🔁 From Class 8**

Ask:

* What do you see in your HTML layout?
* Where should new tasks go?

Remember:

* `#taskInput` → user input
* `#taskList` → empty space to display tasks
* `Add Task` → the button to trigger logic

---

### **Slide 6: JavaScript – Task Logic**

**🛠️ Basic Task Handling**

```js
let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  input.value = "";
  renderTasks();
}
```

> ✅ Prevents empty inputs
> ✅ Adds task to array

---

### **Slide 7: Render the List**

**🔁 Show Tasks on the Page**

```js
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = ""; // Clear old list

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i];
    list.appendChild(li);
  }
}
```

> 💡 Renders all tasks from the array

---

### **Slide 8: Add Button Code**

**🔘 HTML Button for Action**

```html
<button onclick="addTask()">Add Task</button>
```

When clicked → runs `addTask()` → updates the list!

---

### **Slide 9: In-Class Challenge**

**🧪 Challenge Time!**

Try extending your app:

1. Show total number of tasks

   ```js
   count.innerText = tasks.length;
   ```
2. Capitalize first letter of each task
3. Show latest task **on top** using:

   ```js
   tasks.unshift(taskText);
   ```

---

### **Slide 10: Bonus Ideas**

**✨ Make It Smarter**

* Convert task input into **Title Case**
* Show a **"No tasks yet"** message if list is empty
* Style completed tasks (✅ next class)

---

### **Slide 11: Homework / Extension**

**📝 Practice at Home**

* Add a **timestamp** next to each task
* Try grouping logic inside a `todoApp` object
* Add light styling: spacing, hover effects, fonts

---

### **Slide 12: Secretly Learned**

**🧠 Behind the Code**

| Concept          | Where It Appears                        |
| ---------------- | --------------------------------------- |
| Array logic      | `push()` / `unshift()`                  |
| App memory       | Task list lives in `let tasks = []`     |
| DOM rendering    | `createElement()` and `appendChild()`   |
| Input validation | `trim()` and `if (input === "") return` |

---

### **Slide 13: Wrap-Up**

**✅ You Can Now\...**

* Accept user input
* Store tasks in memory using arrays
* Build and display list items dynamically
* Turn your static page into a working app!