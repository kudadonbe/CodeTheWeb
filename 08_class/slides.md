### **Slide 1: Title Slide**

**🏫 Code the Web – Class 8**
**Intro to Project Building – To-Do App**

> 🎯 Learn how real web apps are structured
> 🛠 Plan and build a clean app layout
> 💡 Prepare for real interactivity in the next class!

---

### **Slide 2: Session Goal**

**🎯 What You’ll Learn Today**

* How to plan a web app visually and structurally
* How to build static layouts using **HTML + CSS**
* How to break features into parts
* Prepare your project for **JavaScript logic next class**

---

### **Slide 3: Class Overview**

**🧑‍🏫 Today’s Format**

| Section      | Description                              |
| ------------ | ---------------------------------------- |
| **Topic**    | HTML/CSS layout + app planning           |
| **Duration** | 1.5–2 hours                              |
| **Output**   | Static layout for a To-Do App            |
| **You Need** | Class 7 knowledge: DOM, toggling, inputs |

---

### **Slide 4: Key Concepts**

**📖 Concepts for Today**

| Concept        | Description                                  |
| -------------- | -------------------------------------------- |
| Project layout | Structure of your app visually (UI sections) |
| Wireframe      | Simple sketch or plan before building        |
| Separation     | HTML first → JavaScript later                |
| UI planning    | Use meaningful IDs for inputs, buttons, list |

---

### **Slide 5: Quick Review**

**🔁 What We Already Know**

* How to **read input values**
* How to **toggle elements on/off**
* How to use `getElementById()` and `.value`
* How to design **user interaction logic**

Ask:

> What’s an app YOU would like to build?

---

### **Slide 6: Project Preview**

**🧭 Today’s Goal: To-Do App Layout**

Show a screenshot or demo.

Main parts:

* ✅ Title: *My Tasks*
* 📝 Input box for tasks
* ➕ Button to add
* 📋 List to display tasks

---

### **Slide 7: Wireframe First**

**🖊 Sketch It Before You Code**

Draw a wireframe on board or paper:

```
----------------------
|     My Tasks       |
| [___________] [+]  |
| • Task 1           |
| • Task 2           |
----------------------
```

✅ Students plan layout BEFORE starting code

---

### **Slide 8: HTML Structure**

**🧱 Layout – Sample HTML**

```html
<div class="todo-app">
  <h2>My Tasks</h2>
  <input type="text" id="taskInput" placeholder="New task..." />
  <button>Add Task</button>
  <ul id="taskList"></ul>
</div>
```

---

### **Slide 9: Basic Styling**

**🎨 Sample CSS Layout**

```css
.todo-app {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
}

input, button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
}
```

Simple but neat! Students can customize.

---

### **Slide 10: In-Class Challenge**

**🧪 Your Task**

> Build a clean, non-functional **To-Do App layout**

Include:

* ✅ Title: *My Tasks*
* ✍️ Task input field
* ➕ Add Task button
* 📋 Empty list area (`<ul>`)

**Focus On:**
✔ Clean structure
✔ CSS styling
✔ Clear HTML sectioning (`<!-- Comment -->`)

---

### **Slide 11: Homework / Extension**

**📝 Practice at Home**

* Add an **emoji or icon** to your Add button
* Style the layout in **your own theme**
* Add HTML comments like:

```html
<!-- Task Input -->
<!-- Task List -->
```

---

### **Slide 12: Secretly Learned**

**🧠 Hidden Lessons from Today**

| Concept         | Where You Used It                       |
| --------------- | --------------------------------------- |
| App Planning    | Sketching UI before writing code        |
| UI Structure    | Using HTML to scaffold a layout         |
| CSS Layout      | Spacing and styling with padding, width |
| Naming Strategy | IDs like `taskInput`, `taskList`        |

---

### **Slide 13: Wrap-Up**

**✅ You Can Now\...**

* Plan your app like a developer
* Structure your page for real interaction
* Build a clean interface with HTML & CSS
* Get ready to add **JavaScript logic** next class!