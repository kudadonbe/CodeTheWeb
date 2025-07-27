---
marp: true
theme: uncover
class: invert
paginate: true
backgroundImage: url('../../settings/kudadonbe_theme_black.png')
---

# 🏫 Code the Web – Class 11

## **Portfolio Site – HTML Structure**

> 🎯 Build the skeleton of your personal website
> 🧱 Use clean HTML to organize content
> 🚫 No CSS or JavaScript yet—structure first!

---

## 🎯 **What You’ll Build Today**

* A personal **portfolio webpage**
* Only HTML – **no styling or behavior yet**
* Structured into meaningful **sections**
* Ready for CSS & JavaScript later

---

## 🧑‍🏫 **Today's Plan**

| Section         | Description                                   |
| --------------- | --------------------------------------------- |
| **Topic**       | Build your own portfolio layout with HTML     |
| **Duration**    | 1.5–2 hours                                   |
| **Output**      | Full HTML structure: About, Projects, Contact |
| **Skills Used** | Tags, IDs, anchor links, semantic layout      |

---

## 📐 **Page Sections to Include**

* `<header>` – Your name + title
* `<nav>` – Navigation links
* `<section id="about">` – About Me
* `<section id="projects">` – Project list
* `<section id="contact">` – Contact info
* `<footer>` – Copyright / year

✅ Use semantic tags
✅ Add meaningful text as placeholders

---

## 🛠️ **Sample HTML Structure (P1)**

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
```

---

## 🛠️ **Sample HTML Structure (P2)**

```html
<section id="about">
  <h2>About Me</h2>
  <p>Write something here.</p>
</section>
```

🧱 Build this first, then expand.

---

## 📖 **HTML Concepts Reviewed**

| Tag            | Purpose                               |
| -------------- | ------------------------------------- |
| `<header>`     | Title area of the page                |
| `<nav>`        | Menu with links                       |
| `<section>`    | Content block (About, Projects, etc.) |
| `<footer>`     | Bottom credits                        |
| `<a href="">`  | Links to sections using IDs           |
| `<ul>`, `<li>` | Project or skill list                 |

---

## 🌐 **Real-World Use**

* Show your skills to others
* Share projects and code
* Link it in CVs, emails, or job applications
* Reflect your progress and personal style

---

## 📝 **Section Planning**

Draw or outline on paper:

* Header
* Navigation
* About
* Projects
* Contact
* Footer

✅ Planning before coding helps structure your ideas

---

## 💻 **Hands-On Practice**

* Create a new file: `portfolio.html`
* Add each section with IDs
* Write placeholder content (your name, email, sample projects)

---

## 🔗 **Internal Navigation with Anchors**

```html
<nav>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
</nav>
```

* Clicking link scrolls to `<section id="about">`
* Makes your page easier to navigate

---

## 🧪 **Add an Extra Section**

➕ Add a **“Skills”** or **“Experience”** section
📋 Use a list (`<ul>`) or table (`<table>`)
✨ Bonus: Add your **own project names**

---

## 📝 **Customize at Home**

Add:

* ✅ Your real name
* ✅ Real project names
* ✅ A short bio
* ✅ Extra paragraph under “About Me”

---

## 🧠 **Behind the Scenes**

| Concept             | Where You Used It                       |
| ------------------- | --------------------------------------- |
| Semantic HTML       | `<header>`, `<nav>`, `<section>`        |
| ID Navigation       | `href="#about"` → links to sections     |
| Structural Planning | Organize content areas                  |
| Personal Branding   | Starting your professional web presence |

---

## ✅ **You Can Now\...**

* Build a **real HTML website layout**
* Use semantic structure to organize content
* Add links that navigate across the page
* Plan your portfolio project like a developer!
