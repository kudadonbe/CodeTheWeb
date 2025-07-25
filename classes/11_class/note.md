# 🏫 **Code the Web – Class 11: Portfolio Site – HTML Structure**

### 🎯 **Session Goal**

Begin building a **personal portfolio website** by planning and writing the full **HTML structure** of a multi-section page. No CSS or JavaScript yet—focus on clean layout using headings, sections, and semantic tags.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| Topic         | Create HTML structure for a personal portfolio site                |
| Duration      | 1.5–2 hours                                                        |
| Format        | Planning, coding sections, hands-on page building                  |
| Prerequisites | All previous sessions (HTML tags, IDs, project layout)             |
| Key Concepts  | Semantic HTML, sectioning, linking, placeholders                   |
| Output        | A working `.html` file with structure for About, Projects, Contact |

---

## 🧱 **Sample Page Sections**

```html
<header>
  <h1>Your Name</h1>
  <p>Frontend Developer</p>
</header>

<nav>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

<section id="about">
  <h2>About Me</h2>
  <p>Write a short paragraph about yourself here.</p>
</section>

<section id="projects">
  <h2>Projects</h2>
  <ul>
    <li>To-Do App</li>
    <li>Compliment Generator</li>
  </ul>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>Email: you@example.com</p>
</section>

<footer>
  <p>© 2025 Your Name</p>
</footer>
```

---

## 📖 **Key HTML Concepts Reviewed**

| Tag            | Purpose                         |
| -------------- | ------------------------------- |
| `<header>`     | Page intro/title                |
| `<nav>`        | Navigation menu                 |
| `<section>`    | Logical content area            |
| `<footer>`     | Page closing, credits           |
| `<a href="">`  | Link to another page or section |
| `id`           | Anchor for links                |
| `<ul>`, `<li>` | Project list                    |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Why Build a Portfolio? (5–10 min)

* Discuss real-world use: showcase skills, link projects
* Preview how this portfolio will grow in future sessions

### 🔹 Step 2: Plan Sections Together (10–15 min)

* On board or paper: draw rough layout
* Write down 3–4 sections: About, Projects, Contact, Footer

### 🔹 Step 3: Code the Structure (30–40 min)

* Guide students to create a new `portfolio.html` file
* Add and link each section
* Add dummy project names and placeholder text

### 🔹 Step 4: Add Navigation Links (10 min)

* Use `href="#about"` to link to sections
* Test smooth scrolling / anchor jumping

---

## 🧪 **In-Class Challenge**

> Add one more section:

* “Skills” or “Experience” with a short list
* Use `<ul>` or `<table>` if appropriate

**Bonus:** Add your own projects in the list (e.g., “Secret Revealer” or “Feedback Form”)

---

## 📝 **Homework / Extension Task**

* Replace dummy content with:

  * Your real name
  * A short bio
  * Project list with actual titles
* Write an extra paragraph under “About Me”

---

## 🧠 **Secretly Learned**

| Concept            | Where It’s Used                         |
| ------------------ | --------------------------------------- |
| Semantic HTML      | `<header>`, `<nav>`, `<section>`, etc.  |
| ID navigation      | `href="#section"` links                 |
| Structure planning | Divide page into reusable content areas |
| Personal branding  | Start thinking of content + purpose     |

---