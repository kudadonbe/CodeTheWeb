# 🏫 **Code the Web – Class 8: Intro to Project Building (To-Do App)**

### 🎯 **Session Goal**

Introduce students to building a **real web app** by planning and scaffolding a **To-Do List App**. Focus on **UI layout**, **project structure**, and preparing for dynamic logic in the next class.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                               |
| ------------- | --------------------------------------------------------- |
| Topic         | Project planning + HTML/CSS structure                     |
| Duration      | 1.5–2 hours                                               |
| Format        | Project planning, layout design, static HTML/CSS building |
| Prerequisites | Class 7 (toggle logic, DOM manipulation, input)           |
| Key Concepts  | App layout, project breakdown, wireframing, static HTML   |
| Output        | Non-functional To-Do app layout (ready for JS next class) |

---

## 🛠️ **Sample Layout (HTML/CSS Only)**

```html
<div class="todo-app">
  <h2>My Tasks</h2>
  <input type="text" id="taskInput" placeholder="New task..." />
  <button>Add Task</button>
  <ul id="taskList"></ul>
</div>
```

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

---

## 📖 **Key Concepts Introduced**

| Concept        | Description                                        |
| -------------- | -------------------------------------------------- |
| Project layout | Visual sections of an app (input, button, list)    |
| Wireframe      | Simple boxes or sketches to show UI plan           |
| Separation     | Plan structure before adding logic                 |
| UI planning    | Naming IDs, thinking about how users will interact |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Review Prior Concepts (5–10 min)

* Remind: inputs, buttons, visibility toggles
* Ask: What’s a real app you’d want to build?

### 🔹 Step 2: Introduce the To-Do App (10–15 min)

* Show a demo or screenshot of what they’ll build
* Break down features:

  * Add task
  * Show tasks
  * Mark as done (future)
  * Delete task (future)

### 🔹 Step 3: Wireframe / Plan (15–20 min)

* Draw structure on board or sketch:

  * Title
  * Input field
  * Add button
  * Task list below

### 🔹 Step 4: Start Building the Layout (30–40 min)

* Code the HTML structure
* Apply basic CSS styling (padding, width, border)
* Assign IDs for future JavaScript usage

---

## 🧪 **In-Class Challenge**

> Build a clean static UI layout:

* Title: "My Tasks"
* Input for task
* Button: “Add Task”
* Empty space (ul) where tasks will appear

✅ Focus on:

* Neat structure
* Clean styling
* Semantic HTML (use `<ul>`, `<li>`, etc.)

---

## 📝 **Homework / Extension Task**

* Add an icon or emoji to the button
* Try styling the input and list with your own theme
* Write a comment in your HTML for each section (e.g. `<!-- Task Input -->`)

---

## 🧠 **Secretly Learned**

| Concept         | Where It’s Used                         |
| --------------- | --------------------------------------- |
| App planning    | Visualize layout before coding behavior |
| UI structure    | HTML scaffolding for interactive apps   |
| CSS layout      | Clean design using `margin`, `padding`  |
| Naming strategy | Meaningful IDs for future scripting     |

---